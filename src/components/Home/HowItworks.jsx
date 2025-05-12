import React from "react";
import { motion } from "framer-motion";

const HowItworks = () => {
  return (
    <motion.section
      className="grid md:grid-cols-2 gap-16 px-6 md:px-20 py-24 max-w-[1200px] mx-auto font-bricolage"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Side - Text Content */}
      <motion.div
        className="flex flex-col justify-center space-y-8 font-bricolage"
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="space-y-6 font-bricolage">
          <p className="uppercase text-sm font-semibold text-[#00373E] tracking-wider font-bricolage">
            How It Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00373E] leading-tight font-bricolage">
            We Help You
            <br />
            Prioritize Your
            <br />
            Mental Health
          </h2>
          <p className="text-[#00373E]/80 text-lg leading-relaxed font-bricolage">
            Browse therapists, book a session, and start your healing journey
            with trusted professionals.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-[#00373E] text-white rounded-[30px] font-medium hover:bg-[#005157] transform hover:scale-105 transition-all duration-200 font-bricolage">
            Find A Therapist
          </button>
        </div>
      </motion.div>

      {/* Right Side - Illustration */}
      <motion.div
        className="flex items-center justify-center font-bricolage"
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <div className="bg-gradient-to-br from-[#00373E] to-[#005157] p-8 rounded-[40px] shadow-xl font-bricolage">
          <img
            src="/howitworks.png"
            alt="How it works illustration"
            className="w-full max-w-[400px] h-auto object-contain transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HowItworks;
