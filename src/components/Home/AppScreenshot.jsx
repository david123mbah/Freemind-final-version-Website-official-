import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const AppVideoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const video = document.getElementById('app-demo-video');
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-16 px-4 font-bricolage">
      <div className=" rounded-3xl  flex flex-col md:flex-row">
        {/* Video Section */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-[300px] h-[600px] bg-black rounded-[40px] overflow-hidden shadow-lg relative">
            <video
              id="app-demo-video"
              className="w-full h-full object-cover"
              src="/app demo.mp4"
              poster="/api/placeholder/640/360"
              onEnded={() => setIsPlaying(false)}
            />
            <motion.div
              className="absolute inset-0 bg-teal-900 bg-opacity-30 flex items-center justify-center cursor-pointer"
              whileHover={{ backgroundColor: 'rgba(5, 64, 59, 0.4)' }}
              onClick={togglePlay}
            >
              <motion.div
                className="bg-white rounded-full p-4 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? (
                  <Pause className="text-teal-800 w-8 h-8" />
                ) : (
                  <Play className="text-teal-800 w-8 h-8" />
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-teal-700 font-semibold uppercase tracking-wider mb-4">App Demo</h2>
            <h3 className="text-4xl font-bold text-teal-900 mb-6">Discover Inner Peace</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              FreeMind is a comprehensive mental health and wellness mobile platform integrating meditation, music therapy, poetry, community interaction, AI-powered chat, sleep monitoring, mood tracking, diary journaling, and doctor appointment scheduling.
            </p>
            <div className="flex gap-4">
              <motion.button
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
              <motion.button
                className="border border-teal-500 text-teal-500 px-6 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppVideoCard;