import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Share2 } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Submitted:', { email, message });
    // Reset form
    setEmail('');
    setMessage('');
  };

  return (
    <div className="w-full bg-[#BD9037] p-8 font-['Bricolage_Grotesque']">
      <div className="text-center mb-8">
        <p className="text-emerald-800 text-xs uppercase font-medium mb-1">GET IN TOUCH</p>
        <h2 className="text-3xl font-bold text-emerald-800 mb-2">We're Here to Support You</h2>
        <p className="text-emerald-900 max-w-xl mx-auto text-sm">
          Whether you have questions, need help getting started, or want to learn more — reach out anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {/* Contact Card */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-bold text-emerald-800 mb-4">Contact Details:</h3>
          
          <div className="mb-3">
            <p className="text-sm text-gray-700">Email: <span className="text-emerald-700">support@solus.com</span></p>
          </div>
          
          <div className="mb-3">
            <p className="text-sm text-gray-700">Phone: <span className="text-emerald-700">+1 (123) 456-7890</span></p>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-700">Address: <span className="text-gray-600">123 Wellness Way, Calm City, CA 90210</span></p>
          </div>
          
          <div className="flex space-x-2">
            <a href="#" className="text-emerald-800">
              <Linkedin size={16} />
            </a>
            <a href="#" className="text-emerald-800">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-emerald-800">
              <Twitter size={16} />
            </a>
            <a href="#" className="text-emerald-800">
              <Share2 size={16} />
            </a>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">We typically respond within 12 hours.</p>
        </div>
        
        {/* Message Form */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-bold text-emerald-800 mb-4">Send Us a Message</h3>
          
          <div className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                placeholder="Email"
              />
            </div>
            
            <div>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                placeholder="Message"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full bg-emerald-800 text-white py-2 px-4 rounded-md font-medium hover:bg-emerald-700 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Company Info */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-xl font-bold text-emerald-800 mb-2">Solus</h3>
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a href="#" className="text-emerald-700 hover:underline">About</a>
            <a href="#" className="text-emerald-700 hover:underline">Instagram</a>
            <a href="#" className="text-emerald-700 hover:underline">Facebook</a>
            <a href="#" className="text-emerald-700 hover:underline">Terms Of Use</a>
            <a href="#" className="text-emerald-700 hover:underline">Therapists</a>
            <a href="#" className="text-emerald-700 hover:underline">Privacy Policy</a>
            <a href="#" className="text-emerald-700 hover:underline">Resources</a>
            <a href="#" className="text-emerald-700 hover:underline">YouTube</a>
            <a href="#" className="text-emerald-700 hover:underline">Contact</a>
            <a href="#" className="text-emerald-700 hover:underline">LinkedIn</a>
          </div>
          
          <p className="text-xs text-gray-500 mt-3">© {new Date().getFullYear()} Solus. All Rights Reserved.</p>
        </div>
        
        {/* Support Card */}
        <div className="bg-emerald-800 p-6 rounded-lg text-white">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1">Find</h3>
              <h3 className="text-xl font-bold mb-1">Support,</h3>
              <h3 className="text-xl font-bold mb-1">Guidance,</h3>
              <h3 className="text-xl font-bold mb-1">and Balance.</h3>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-emerald-400 rounded-full relative">
                <div className="w-6 h-6 bg-amber-400 rounded-full absolute top-2 right-0"></div>
                <div className="w-6 h-6 bg-orange-400 rounded-full absolute bottom-0 left-2"></div>
              </div>
            </div>
          </div>
          
          <button
            className="w-full bg-white text-emerald-800 py-2 px-4 rounded-md font-medium mt-6 hover:bg-gray-100 transition duration-200"
          >
            Find Support Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;