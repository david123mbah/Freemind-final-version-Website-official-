import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="relative bg-[#F7F6F4] overflow-hidden rounded-[40px] max-w-[1100px] mx-auto mt-10 px-6 py-24 font-bricolage"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Illustration */}
      <img
        src="/Hero.png"
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 font-bricolage"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#00373E] leading-tight font-bricolage">
          Support for Your
          <br />
          Mental Well-being
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#00373E] max-w-xl leading-relaxed font-bricolage">
          Connect with licensed therapists, counselors,
          <br />
          and wellness coaches to support your journey.
        </p>

        {/* Download Buttons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="flex items-center bg-[#00373E] text-white px-6 py-3 rounded-full font-medium hover:bg-[#005157] transition-colors font-bricolage"
          >
            <img
              src="/playstore-icon.png"
              alt="Play Store"
              className="w-6 h-6 mr-2"
            />
            Play Store
          </a>
          <a
            href="#"
            className="flex items-center bg-[#00373E] text-white px-6 py-3 rounded-full font-medium hover:bg-[#005157] transition-colors font-bricolage"
          >
            <img
              src="/appstore-icon.png"
              alt="App Store"
              className="w-6 h-6 mr-2"
            />
            App Store
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
