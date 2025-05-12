import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full bg-[#00373E] text-white py-10 px-8 font-bricolage rounded-t-[20px]"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-white mr-3"></div>
              <h2 className="text-3xl font-bold font-bricolage">Freemind</h2>
            </div>
            <p className="text-base text-gray-300 mb-6 font-bricolage">
              Your go-to destination for embracing mindfulness and finding inner
              peace midst the digital noise of today's world.
            </p>
          </div>

          {/* Quick Menu */}
          <div className="col-span-6 md:col-span-2">
            <h3 className="text-lg font-semibold mb-5 font-bricolage">
              Quick Menu
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white font-bricolage"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white font-bricolage"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white font-bricolage"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white font-bricolage"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-6 md:col-span-2">
            <h3 className="text-lg font-semibold mb-5 font-bricolage">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white font-bricolage"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white font-bricolage"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white font-bricolage"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white font-bricolage"
                >
                  Forums
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-lg font-semibold mb-3 font-bricolage">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4 font-bricolage">
              Subscribe now to be updated with the latest features
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-white text-base text-white px-5 py-3 rounded-l outline-none border-0 flex-grow font-bricolage"
              />
              <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 text-base rounded-r transition-colors font-bricolage">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright and Social Icons */}
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0 font-bricolage">
            &copy;{currentYear} Mindfulity. All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300">
              <Facebook size={22} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Instagram size={22} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
