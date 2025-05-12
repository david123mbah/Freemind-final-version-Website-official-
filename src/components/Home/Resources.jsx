import React from 'react';

const Resources = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-8 font-bricolage">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-2xl">
        <p className="text-sm text-[#00373E] uppercase tracking-wider mb-2">EXPLORE & LEARN</p>
        <h2 className="text-4xl font-bold text-[#00373E] mb-4">Resources for<br />Your Well-being</h2>
        <p className="text-[#00373E] text-lg">
          Explore expert insights, self-care guides,<br />
          and tools to support your mental health.
        </p>
      </div>

      {/* Resource Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
        {/* Card 1: Articles & Guides */}
        <div className="bg-white rounded-xl p-8 w-full md:w-72 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#00373E] mb-2">Articles &<br />Guides</h3>
          <p className="text-[#00373E] text-sm mb-6 leading-relaxed">
            Practical tips on stress management, mindfulness, and emotional resilience.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-6 py-2 rounded-full font-medium mt-auto">
            Explore
          </button>
        </div>

        {/* Card 2: Meditation & Relaxation */}
        <div className="bg-white rounded-xl p-8 w-full md:w-72 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#00373E] mb-2">Meditation &<br />Relaxation</h3>
          <p className="text-[#00373E] text-sm mb-6 leading-relaxed">
            Audio sessions for guided meditation and deep breathing exercises.
          </p>
          <button className="bg-teal-400 hover:bg-teal-500 text-teal-900 px-6 py-2 rounded-full font-medium mt-auto">
            Explore
          </button>
        </div>

        {/* Card 3: Webinars & Workshops */}
        <div className="bg-white rounded-xl p-8 w-full md:w-72 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#00373E] mb-2">Webinars &<br />Workshops</h3>
          <p className="text-[#00373E] text-sm mb-6 leading-relaxed">
            Live and recorded sessions with mental health professionals.
          </p>
          <button className="bg-pink-300 hover:bg-pink-400 text-pink-900 px-6 py-2 rounded-full font-medium mt-auto">
            Explore
          </button>
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-white rounded-xl p-8 w-full max-w-5xl mt-12 flex justify-between items-center">
        <div className="max-w-md">
          <p className="text-xs text-[#00373E] uppercase tracking-wider mb-6">  COMMUNITY</p>
          <h3 className="text-3xl font-bold text-[#00373E] mb-4">You're Not Alone<br />on This Journey</h3>
          <p className="text-[#00373E] text-base mb-6">
            Connect with others, share experiences,<br />
            and find encouragement in a safe,<br />
            supportive space.
          </p>
          <button className="bg-[#00373E] hover:bg-[#004a54] text-white px-6 py-3 rounded-full font-medium">
            Join The Community
          </button>
        </div>
        <div className="hidden md:block">
          <img 
            src="/Illustration_11.png" 
            alt="Community illustrations showing various emoji-like faces and shapes" 
            className="w-66 h-66"
          />
        </div>
      </div>
      
      
    </div>
  );
};

export default Resources;