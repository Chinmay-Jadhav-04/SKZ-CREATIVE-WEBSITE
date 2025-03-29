'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const [wordCount, setWordCount] = useState(0);
  const WORD_LIMIT = 1000;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'message') {
      const words = value.trim().split(/\s+/).length;
      if (value.trim() === '') {
        setWordCount(0);
      } else {
        setWordCount(words);
      }
      
      if (words > WORD_LIMIT) return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        to_email: 'chinmayrjadhav4122003@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        whatsapp: formData.whatsapp,
        message: formData.message,
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',  // Email JS service ID
        'YOUR_TEMPLATE_ID', // Email JS template ID
        templateParams,
        'YOUR_PUBLIC_KEY'   // Email JS public key
      );
      
      toast.success('Your message has been sent successfully!', {
        duration: 5000,
        position: 'top-right',
        style: {
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid #7042f88b',
        },
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        whatsapp: '',
        message: ''
      });
      setWordCount(0);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-20 py-20">
      <Toaster />
      
      {/* Header */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[20px]"
      >
        <SparklesIcon className="text-[#9bfffa] mr-[10px] h-5 w-5"/>
        <h1 className="Welcome-text text-[13px]">
          Get in Touch
        </h1>
      </motion.div>

      {/* Form Container */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[600px] bg-[#0300145e] backdrop-blur-lg rounded-xl p-6 border border-[#7042f88b]"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-200 mb-2 text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-[#0300149e] border border-[#7042f88b] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2 text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-[#0300149e] border border-[#7042f88b] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-200 mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0300149e] border border-[#7042f88b] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2 text-sm">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full bg-[#0300149e] border border-[#7042f88b] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-200 mb-2 text-sm">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-[#0300149e] border border-[#7042f88b] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-purple-500 resize-none"
            />
            <div className="flex justify-end mt-1">
              <span className={`text-sm ${wordCount > WORD_LIMIT ? 'text-red-500' : 'text-gray-400'}`}>
                {wordCount}/{WORD_LIMIT} words
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            variants={slideInFromRight(0.8)}
            initial="hidden"
            animate="visible"
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-[1.01]"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
