'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const WORD_LIMIT = 1000;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'message') {
      const words = value.trim() === '' ? 0 : value.trim().split(/\s+/).length;
      setWordCount(words);
      
      if (words > WORD_LIMIT) return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Your message has been sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          whatsapp: '',
          message: ''
        });
        setWordCount(0);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Top Border Line */}
      <div className="w-full border-t border-gray-700 mb-4" />

      <div id="contact" className="flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-20 py-10">
        <Toaster />
        
        {/* Header */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[20px] flex items-center"
        >
          <SparklesIcon className="text-[#9bfffa] mr-[10px] h-5 w-5"/>
          <h1 className="Welcome-text text-[13px]">
            Get in Touch
          </h1>
        </motion.div>

        {/* Form Container with Glassmorphism */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[600px] bg-[#ffffff0a] backdrop-blur-[6px] rounded-xl p-8 border border-[#ffffff1a] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
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
                  className="w-full bg-[#ffffff0a] backdrop-blur-sm border border-[#ffffff1a] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-[#0066cc] transition-colors"
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
                  className="w-full bg-[#ffffff0a] backdrop-blur-sm border border-[#ffffff1a] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-[#0066cc] transition-colors"
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
                  className="w-full bg-[#ffffff0a] backdrop-blur-sm border border-[#ffffff1a] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-[#0066cc] transition-colors"
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
                  className="w-full bg-[#ffffff0a] backdrop-blur-sm border border-[#ffffff1a] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-[#0066cc] transition-colors"
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
                className="w-full bg-[#ffffff0a] backdrop-blur-sm border border-[#ffffff1a] rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-[#0066cc] transition-colors resize-none"
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
              disabled={loading}
              className="w-full py-3 px-6 bg-gradient-to-r from-[#0066cc] to-[#00bfff] text-white rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed backdrop-blur-sm"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Border Line */}
      <div className="w-full border-t border-gray-700 mt-4" />
    </>
  );
};

export default Contact;
