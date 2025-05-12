import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!",
      author: "Anna R.",
      age: 32,
      backgroundColor: "bg-amber-100"
    },
    {
      quote: "I was struggling with stress and anxiety, but the mindfulness programs at Solus have helped me find balance. I finally feel like I'm prioritizing my mental well-being.",
      author: "Mark S.",
      age: 41,
      backgroundColor: "bg-teal-900 text-white"
    }
  ];

  const partners = [
    { name: "Wealthsimple", logo: "/wwws.png" },
    { name: "Notion", logo: "/dhhd.png" },
    { name: "Medium", logo: "/fggf.png" },
    { name: "Braze", logo: "/bcbcb.png" },
    { name: "Sonos", logo: "/sc.png" }
  ];

  return (
    <div className="w-full">
      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-6">
          <span className="text-sm uppercase tracking-wider text-teal-800">TESTIMONIALS</span>
          <h2 className="text-4xl font-bold text-teal-900 mt-2">What Our Clients<br />Are Saying</h2>
          <p className="text-gray-700 mt-4 mb-8">
            Positive experiences from users who have<br />benefited from therapy or wellness<br />programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`${testimonial.backgroundColor} p-8 rounded-lg relative overflow-hidden`}
            >
              <p className="text-lg mb-8">
                "{testimonial.quote}"
              </p>
              <div className="font-medium">
                — {testimonial.author}, {testimonial.age}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-800 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-teal-800 font-medium mb-6">Our Partners</div>
          <div className="flex flex-wrap items-center justify-between gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all cursor-pointer">
                <img src={partner.logo} alt={partner.name + ' logo'} className="h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section Header */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <span className="text-sm uppercase tracking-wider text-teal-800">EXPLORE & LEARN</span>
        <h2 className="text-4xl font-bold text-teal-900 mt-2">Resources for</h2>
      </div>
    </div>
  );
};

export default Testimonials;