import React, { useState } from 'react';
import { Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Contactes = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, message });
    // Reset form
    setEmail('');
    setMessage('');
    alert('Message sent!');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-bricolage">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-sm font-medium text-teal-800 uppercase tracking-wide mb-2">GET IN TOUCH</h2>
        <h1 className="text-5xl font-bold text-teal-900 mb-4">We're Here to Support You</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Whether you have questions, need help getting started, or want to learn more — reach out anytime.
        </p>
      </div>

      {/* Contact Information and Form Container */}
      <div className="bg-white rounded-[25px] shadow-lg p-8 flex flex-col md:flex-row gap-12 mb-12">
        {/* Contact Details (Left) */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-teal-900 mb-8">Contact Details:</h2>
          
          <div className="space-y-6">
            <div>
              <p className="font-bold text-lg text-teal-900">Email:</p>
              <a href="mailto:support@solus.com" className="text-teal-700 hover:text-teal-500">
                support@solus.com
              </a>
            </div>
            
            <div>
              <p className="font-bold text-lg text-teal-900">Phone:</p>
              <a href="tel:+11234567890" className="text-teal-700 hover:text-teal-500">
                +1 (123) 456-7890
              </a>
            </div>
            
            <div>
              <p className="font-bold text-lg text-teal-900">Address:</p>
              <p className="text-gray-700">123 Wellness Way, Yaoundé, Cameroon</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-teal-900 hover:text-teal-600">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-teal-900 hover:text-teal-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-teal-900 hover:text-teal-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-teal-900 hover:text-teal-600">
                <MessageCircle size={24} />
              </a>
            </div>
            
            <p className="text-gray-700 pt-6">We typically respond within 12 hours.</p>
          </div>
        </div>

        {/* Contact Form (Right) */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-teal-900 mb-8">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-teal-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-teal-500"
                placeholder="Email"
                required
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-lg font-medium text-teal-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-teal-500 min-h-32"
                placeholder="Message"
                rows={4}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-teal-900 text-white py-4 px-6 rounded-[30px] hover:bg-teal-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactes;