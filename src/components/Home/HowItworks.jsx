import React from 'react';

const HowItworks = () => {
  return (
    <section className="grid md:grid-cols-2 gap-16 px-6 md:px-20 py-24 max-w-[1200px] mx-auto">
      {/* Left Side - Text Content */}
      <div className="flex flex-col justify-center space-y-8">
        <div className="space-y-6">
          <p className="uppercase text-sm font-semibold text-[#00373E] tracking-wider">
            How It Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00373E] leading-tight">
            We Help You<br />
            Prioritize Your<br />
            Mental Health
          </h2>
          <p className="text-[#00373E]/80 text-lg leading-relaxed">
            Browse therapists, book a session, and start your healing journey with trusted professionals.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-[#00373E] text-white rounded-[30px] font-medium hover:bg-[#005157] transform hover:scale-105 transition-all duration-200">
            Find A Therapist
          </button>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-br from-[#00373E] to-[#005157] p-8 rounded-[40px] shadow-xl">
          <img
            src="/howitworks.png"
            alt="How it works illustration"
            className="w-full max-w-[400px] h-auto object-contain transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItworks;
