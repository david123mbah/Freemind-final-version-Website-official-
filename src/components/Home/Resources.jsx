import React from "react";
import { motion } from "framer-motion";

const Resources = () => {
  return (
    <motion.div
      className="flex flex-col items-center w-full min-h-screen p-8 font-bricolage"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-16 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        <p className="text-sm text-[#00373E] uppercase tracking-wider mb-2">
          EXPLORE & LEARN
        </p>
        <h2 className="text-4xl font-bold text-[#00373E] mb-4">
          Resources for
          <br />
          Your Well-being
        </h2>
        <p className="text-[#00373E] text-lg">
          Explore expert insights, self-care guides,
          <br />
          and tools to support your mental health.
        </p>
      </motion.div>

      {/* Resource Cards Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
      >
        {/* Card 1: Articles & Guides */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="bg-white rounded-xl p-8 w-full md:w-72 flex flex-col items-center">
            <h3 className="text-xl font-semibold text-[#00373E] mb-2">
              Articles &<br />
              Guides
            </h3>
            <p className="text-[#00373E] text-sm mb-6 leading-relaxed">
              Practical tips on stress management, mindfulness, and emotional
              resilience.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-6 py-2 rounded-full font-medium mt-auto">
              Explore
            </button>
          </div>
        </motion.div>

        {/* Card 2: Meditation & Relaxation */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="bg-white rounded-xl p-8 w-full md:w-72 flex flex-col items-center">
            <h3 className="text-xl font-semibold text-[#00373E] mb-2">
              Meditation &<br />
              Relaxation
            </h3>
            <p className="text-[#00373E] text-sm mb-6 leading-relaxed">
              Audio sessions for guided meditation and deep breathing exercises.
            </p>
            <button className="bg-teal-400 hover:bg-teal-500 text-teal-900 px-6 py-2 rounded-full font-medium mt-auto">
              Explore
            </button>
          </div>
        </motion.div>

        {/* Card 3: Webinars & Workshops */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="bg-white rounded-xl p-8 w-full md:w-72 flex flex-col items-center">
            <h3 className="text-xl font-semibold text-[#00373E] mb-2">
              Webinars &<br />
              Workshops
            </h3>
            <p className="text-[#00373E] text-sm mb-6 leading-relaxed">
              Live and recorded sessions with mental health professionals.
            </p>
            <button className="bg-pink-300 hover:bg-pink-400 text-pink-900 px-6 py-2 rounded-full font-medium mt-auto">
              Explore
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Community Section */}
      <motion.div
        className="bg-white rounded-xl p-8 w-full max-w-5xl mt-12 flex flex-col md:flex-row md:justify-between md:items-center items-center gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="max-w-md text-center md:text-left">
          <p className="text-xs text-[#00373E] uppercase tracking-wider mb-6">
            COMMUNITY
          </p>
          <h3 className="text-3xl font-bold text-[#00373E] mb-4">
            You're Not Alone
            <br />
            on This Journey
          </h3>
          <p className="text-[#00373E] text-base mb-6">
            Connect with others, share experiences,
            <br />
            and find encouragement in a safe,
            <br />
            supportive space.
          </p>
          <button className="bg-[#00373E] hover:bg-[#004a54] text-white px-6 py-3 rounded-full font-medium">
            Join The Community
          </button>
        </div>
        <div className="md:block flex justify-center">
          <img
            src="/Illustration_11.png"
            alt="Community illustrations showing various emoji-like faces and shapes"
            className="w-66 h-66"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resources;
