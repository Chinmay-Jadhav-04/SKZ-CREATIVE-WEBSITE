import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { Mails } from 'lucide-react';

export async function POST(req) {
  console.log('📩 Starting email process...');

  // Check if the email password exists
  if (!process.env.EMAIL_APP_PASSWORD) {
    console.error('❌ Missing EMAIL_APP_PASSWORD environment variable');
    return NextResponse.json(
      { error: 'Email configuration missing' },
      { status: 500 }
    );
  }

  try {
    // Parse request body
    let body;
    try {
      body = await req.json();
      console.log('✅ Request body parsed:', Object.keys(body));
    } catch (error) {
      console.error('❌ Failed to parse request body:', error);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, whatsapp, message } = body;

    // Validate input fields
    if (!firstName || !lastName || !email || !whatsapp || !message) {
      console.error('❌ Missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // ✅ Fix self-signed certificate error
      },
    });
    

    // Construct email content as a structured form
    const emailContent = `
      <h2> You have a new message from</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        <tr><th style="background-color: #f4f4f4;">Field</th><th>Value</th></tr>
        <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>WhatsApp</strong></td><td>${whatsapp}</td></tr>
        <tr><td><strong>Message</strong></td><td style="max-width: 500px;">${message}</td></tr>
      </table>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `You have a new message from: ${firstName} ${lastName}`,
      replyTo: email,
      html: emailContent,
    });

    console.log(`✅ Email sent successfully: ${info.messageId}`);

    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Failed to send email:', error);

    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
