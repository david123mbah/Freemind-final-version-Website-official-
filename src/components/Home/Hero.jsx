import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#F7F6F4] overflow-hidden rounded-[40px] max-w-[1200px] mx-auto mt-10 px-6 py-24">
      {/* Background Illustration */}
      <img
        src="/Hero.png"
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#00373E] leading-tight">
          Support for Your
          <br />
          Mental Well-being
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#00373E] max-w-xl leading-relaxed">
          Connect with licensed therapists, counselors,
          <br />
          and wellness coaches to support your journey.
        </p>

        {/* CTA */}
        <button className="bg-[#00373E] text-white px-12 py-3 rounded-[30px] font-medium hover:bg-[#005157] transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
