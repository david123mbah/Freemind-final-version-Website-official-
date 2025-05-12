import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 font-bricolage">
      <div 
        className="flex justify-between items-center bg-white p-6 rounded-xl shadow-md cursor-pointer font-bricolage transition-all duration-200 hover:shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-bricolage">{question}</h3>
        <button className="text-3xl font-bold text-teal-600 h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-50 transition-all font-bricolage">
          {isOpen ? '−' : '+'}
        </button>
      </div>
      {isOpen && (
        <div className="bg-white p-6 mt-2 rounded-xl font-bricolage text-base md:text-lg text-gray-700">
          <p className="font-bricolage">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FrequentlyAsked = () => {
  // FAQ data
  const faqs = [
    {
      question: "How do I book a therapy session?",
      answer: "You can book a therapy session through our online portal. Simply create an account, browse available therapists, and select a time that works for you. You'll receive a confirmation email with all necessary details."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, we offer online therapy sessions via secure video conferencing. These sessions are just as effective as in-person therapy and provide greater flexibility for those with busy schedules or transportation limitations."
    },
    {
      question: "What's the difference between therapy and coaching?",
      answer: "Therapy focuses on healing, processing emotions, and addressing mental health concerns, while coaching is more goal-oriented and focuses on personal development, accountability, and future planning. Therapists have clinical training to address mental health issues."
    },
    {
      question: "Do I need a subscription to access services?",
      answer: "We offer both subscription plans and pay-per-session options. Subscriptions provide better value if you plan to attend regular sessions, while single session payments offer flexibility for occasional use."
    },
    {
      question: "Can I switch therapists if I don't feel the right connection?",
      answer: "Absolutely. The therapeutic relationship is important for effective treatment. If you don't feel connected with your current therapist, you can request a change at any time through your client portal without any questions asked."
    },
    {
      question: "Is my information and session history kept confidential?",
      answer: "Yes, we take confidentiality very seriously. All your personal information and session notes are encrypted and securely stored. We comply with all privacy regulations and will never share your information without your explicit consent except in legally mandated situations."
    }
  ];

  return (
    <div className=" min-h-screen p-8 font-bricolage">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4 font-bricolage">
          <p className="text-base uppercase font-semibold text-teal-700 tracking-wider font-bricolage">NEED HELP?</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-10 text-center font-bricolage">
          Frequently<br />Asked Questions
        </h1>
        <div className="flex flex-col md:flex-row gap-12 mb-12 items-center font-bricolage">
          <div className="md:w-1/2 flex flex-col items-center font-bricolage">
            <p className="text-gray-700 mb-8 text-lg md:text-xl font-bricolage">
              Find answers to common questions about our services, therapy, and mental well-being.
            </p>
            <div className="w-full flex justify-center mb-8 font-bricolage">
              <img 
                src="/Illustrationb.png" 
                alt="Mental wellness illustration" 
                className="w-130 h-130 object-contain rounded-2xl "
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full font-bricolage">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;