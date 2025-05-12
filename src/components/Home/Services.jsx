const Services = () => {
  const services = [
    {
      title: "Mindfulness & Meditation",
      description:
        "Guided meditation sessions and stress management techniques.",
      icon: "/Illustration_10.png",
    },
    {
      title: "One-on-One Therapy",
      description:
        "Virtual and in-person therapy sessions with licensed professionals.",
      icon: "/therapy_icon.png",
    },
    {
      title: "Wellness Coaching",
      description:
        "Personalized guidance to help you build healthier habits, manage stress, and achieve balance in all areas of your life.",
      additionalText:
        "Our wellness coaches support you in creating sustainable routines for mental, emotional, and physical well-being.",
      icon: "/illustration_6.png",
    },
  ];

  return (
    <div className="w-full py-12 font-bricolage">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 font-bricolage">
          <span className="text-sm uppercase tracking-wider text-teal-800 font-semibold font-bricolage">
            SERVICES
          </span>
          <h2 className="text-4xl font-bold text-teal-900 mt-2 font-bricolage">
            Your Path to
            <br />
            Well-being
          </h2>
          <p className="text-teal-900/70 mt-4 font-bricolage">
            Discover expert guidance for a healthier
            <br />
            mind and balanced life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mindfulness & Meditation Card */}
          <div className="bg-orange-100 border border-orange-200 rounded-[30px] p-8 relative overflow-hidden flex flex-col min-h-[320px] font-bricolage">
            <div className="z-10 relative">
              <h3 className="text-2xl font-semibold text-teal-900 font-bricolage">
                Mindfulness &<br />
                Meditation
              </h3>
              <p className="mt-4 text-teal-900/80 font-bricolage">
                Guided meditation sessions
                <br />
                and stress management
                <br />
                techniques.
              </p>
              <button className="mt-6 px-6 py-2 border border-teal-800 text-teal-800 rounded-[30px] hover:bg-teal-800 hover:text-white transition-colors font-bricolage">
                Learn More
              </button>
            </div>
            <div className="absolute bottom-4 right-4 opacity-70">
              <img
                src={services[0].icon}
                alt="Meditation icons"
                className="w-204 h-204"
              />
            </div>
          </div>

          {/* One-on-One Therapy Card */}
          <div className="bg-white border border-gray-200 rounded-[30px] p-8 relative overflow-hidden flex flex-col min-h-[320px] font-bricolage">
            <div className="z-10 relative">
              <h3 className="text-2xl font-semibold text-teal-900 font-bricolage">
                One-on-One
                <br />
                Therapy
              </h3>
              <p className="mt-4 text-teal-900/80 font-bricolage">
                Virtual and in-person therapy
                <br />
                sessions with licensed
                <br />
                professionals.
              </p>
              <button className="mt-6 px-6 py-2 border border-teal-800 text-teal-800 rounded-[30px] hover:bg-teal-800 hover:text-white transition-colors font-bricolage">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Wellness Coaching - Full Width Card */}
        <div className="mt-8">
          <div className="bg-white border border-gray-200 rounded-[30px] p-8 relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center font-bricolage">
            <div className="z-10 relative">
              <h3 className="text-2xl font-semibold text-teal-900 font-bricolage">
                Wellness Coaching
              </h3>
              <p className="mt-4 text-teal-900/80 font-bricolage">
                Personalized guidance to help you build healthier habits,
                <br />
                manage stress, and achieve balance in all areas of your life.
              </p>
              <p className="mt-4 text-teal-900/80 font-bricolage">
                Our wellness coaches support you in creating sustainable
                <br />
                routines for mental, emotional, and physical well-being.
              </p>
              <button className="mt-6 px-6 py-2 bg-teal-800 text-white rounded-[30px] hover:bg-teal-700 transition-colors font-bricolage">
                Learn More
              </button>
            </div>
            <div className="hidden md:flex justify-end items-center">
              <img
                src={services[2].icon}
                alt="Wellness coaching illustration"
                className="w-69 h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
