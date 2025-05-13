import React, { useState } from "react";
import { User } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!",
      author: "Anna R.",
      age: 32,
      backgroundColor: "bg-amber-100",
      src: "/Frame.png",
    },
    {
      quote:
        "I was struggling with stress and anxiety, but the mindfulness programs at Solus have helped me find balance. I finally feel like I'm prioritizing my mental well-being.",
      author: "Mark S.",
      age: 41,
      backgroundColor: "bg-teal-900 text-white",
      src: "/Ellipse 2d.png",
    },
    {
      quote:
        "The coaching sessions gave me practical tools to manage my daily stress. I feel more confident and positive about my future.",
      author: "Jane D.",
      age: 28,
      backgroundColor: "bg-pink-100",
      src: "/user12.png",
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

  // Get three testimonials in a row, wrapping around
  const getVisibleTestimonials = () => {
    return [0, 1, 2].map(
      (offset) => testimonials[(current + offset) % testimonials.length]
    );
  };

  return (
    <motion.div
      className="w-full font-bricolage"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
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
        </div>
        <motion.div
          className="flex flex-wrap justify-center items-stretch gap-6 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.18 } },
            hidden: {},
          }}
        >
          {getVisibleTestimonials().map((t, idx) => (
            <motion.div
              key={idx}
              className={`${t.backgroundColor} p-6 rounded-[30px] relative overflow-hidden w-full sm:w-[320px] flex flex-col items-center font-bricolage shadow-md`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* User profile */}
              <motion.div
                className="flex flex-col items-center mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              >
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-2 border-2 border-white">
                  {t.src ? (
                    <img
                      src={t.src}
                      alt={t.author}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <div className="text-base font-semibold font-bricolage text-[#00373E] dark:text-white">
                  {t.author}, {t.age}
                </div>
              </motion.div>
              <p className="text-lg md:text-xl mb-4 font-medium font-bricolage text-center">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center gap-2 mb-8">
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
        {/* Partners Section */}
        <div className="bg-gray-50 py-38 mt-16 font-bricolage rounded-[30px]">
          <div className="max-w-8xl mx-auto px-4">
            <div className="text-teal-800 font-medium mb-6 font-bricolage">
              Our Partners
            </div>
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
    </motion.div>
  );
};

export default Testimonials;
