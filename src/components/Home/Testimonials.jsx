import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!",
      author: "Anna R.",
      age: 32,
      backgroundColor: "bg-amber-100",
    },
    {
      quote:
        "I was struggling with stress and anxiety, but the mindfulness programs at Solus have helped me find balance. I finally feel like I'm prioritizing my mental well-being.",
      author: "Mark S.",
      age: 41,
      backgroundColor: "bg-teal-900 text-white",
    },
  ];

  const partners = [
    { name: "Wealthsimple", logo: "/wwws.png" },
    { name: "Notion", logo: "/dhhd.png" },
    { name: "Medium", logo: "/fggf.png" },
    { name: "Braze", logo: "/bcbcb.png" },
    { name: "Sonos", logo: "/sc.png" },
  ];

  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + total) % total);
  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="w-full font-bricolage">
      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          {/* Heading/Intro on the left */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <span className="text-sm uppercase tracking-wider text-teal-800 font-bricolage">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl font-bold text-teal-900 mt-2 font-bricolage">
              What Our Clients
              <br />
              Are Saying
            </h2>
            <p className="text-gray-700 mt-4 mb-8 font-bricolage">
              Positive experiences from users who have
              <br />
              benefited from therapy or wellness
              <br />
              programs.
            </p>
            <div className="flex item-start gap-3 mb-4 justify-center font-bricolage">
              <button
                onClick={prevTestimonial}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-800 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Testimonial Card on the right, aligned at top */}
          <div className="md:w-1/2 flex justify-end items-start">
            <div
              className={`${testimonials[current].backgroundColor} p-6 rounded-[30px] relative overflow-hidden w-[320px] font-bricolage`}
            >
              <p className="text-xl md:text-2xl mb-6 font-semibold font-bricolage">
                "{testimonials[current].quote}"
              </p>
              {/* Navigation Arrows close together under testimonial text */}

              <div className="font-medium text-base mb-2 font-bricolage">
                — {testimonials[current].author}, {testimonials[current].age}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-gray-50 py-38 mt-16 font-bricolage rounded-[30px]">
          <div className="max-w-8xl mx-auto px-4">
            <div className="text-teal-800 font-medium mb-6 font-bricolage">Our Partners</div>
            <div className="flex flex-wrap items-center justify-between gap-8 font-bricolage">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="grayscale hover:grayscale-0 transition-all cursor-pointer font-bricolage"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name + " logo"}
                    className="h-9 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
