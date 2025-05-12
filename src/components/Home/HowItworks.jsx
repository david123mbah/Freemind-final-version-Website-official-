import React from 'react';

const HowItworks = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 max-w-[1200px] mx-auto gap-12">
      {/* Left Side - Text */}
      <div className="flex-1 space-y-6">
        <p className="uppercase text-sm font-semibold text-[#00373E] tracking-wide">
          How It Works
        </p>
        <h2 className="text-4xl font-bold text-[#00373E] leading-snug">
          We Help You <br />
          Prioritize Your <br />
          Mental Health
        </h2>
        <p className="text-[#00373E] text-base leading-relaxed max-w-md">
          Browse therapists, book a session, and start your healing journey with trusted professionals.
        </p>
        <button className="mt-4 bg-[#00373E] text-white px-6 py-3 rounded-md font-medium hover:bg-[#005157] transition">
          Find A Therapist
        </button>
      </div>

      {/* Right Side - Illustration */}
      <div className="flex-1 flex justify-center">
        <div className="bg-[#00373E] p-6 md:p-10 rounded-[40px]">
          <img
            src="/public/howitworks.png" // Place this image inside /public
            alt="How it works illustration"
            className="w-[300px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItworks;
