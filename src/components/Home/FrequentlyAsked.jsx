import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="mb-6 font-bricolage"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="flex justify-between items-center bg-white p-6 rounded-xl shadow-md cursor-pointer font-bricolage transition-all duration-200 hover:shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-bricolage">
          {question}
        </h3>
        <button className="text-3xl font-bold text-teal-600 h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-50 transition-all font-bricolage">
          {isOpen ? "−" : "+"}
        </button>
      </div>
      {isOpen && (
        <div className="bg-white p-6 mt-2 rounded-xl font-bricolage text-base md:text-lg text-gray-700">
          <p className="font-bricolage">{answer}</p>
        </div>
      )}
    </motion.div>
  );
};

const FrequentlyAsked = () => {
  // FAQ data
  const faqs = [
    {
      question: "How do I book a therapy session?",
      answer:
        "You can book a therapy session through our online portal. Simply create an account, browse available therapists, and select a time that works for you. You'll receive a confirmation email with all necessary details.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes, we offer online therapy sessions via secure video conferencing. These sessions are just as effective as in-person therapy and provide greater flexibility for those with busy schedules or transportation limitations.",
    },
    {
      question: "What's the difference between therapy and coaching?",
      answer:
        "Therapy focuses on healing, processing emotions, and addressing mental health concerns, while coaching is more goal-oriented and focuses on personal development, accountability, and future planning. Therapists have clinical training to address mental health issues.",
    },
    {
      question: "Do I need a subscription to access services?",
      answer:
        "We offer both subscription plans and pay-per-session options. Subscriptions provide better value if you plan to attend regular sessions, while single session payments offer flexibility for occasional use.",
    },
    {
      question: "Can I switch therapists if I don't feel the right connection?",
      answer:
        "Absolutely. The therapeutic relationship is important for effective treatment. If you don't feel connected with your current therapist, you can request a change at any time through your client portal without any questions asked.",
    },
    {
      question: "Is my information and session history kept confidential?",
      answer:
        "Yes, we take confidentiality very seriously. All your personal information and session notes are encrypted and securely stored. We comply with all privacy regulations and will never share your information without your explicit consent except in legally mandated situations.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen p-8 font-bricolage"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4 font-bricolage">
          <p className="text-base uppercase font-semibold text-teal-700 tracking-wider font-bricolage">
            NEED HELP?
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-10 text-center font-bricolage">
          Frequently
          <br />
          Asked Questions
        </h1>
        <div className="flex flex-col md:flex-row gap-20 mb-12 items-center font-bricolage">
          <motion.div
            className="md:w-1/2 flex flex-col items-center font-bricolage"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p className="text-gray-700 mb-8 text-lg md:text-xl font-bricolage">
              Find answers to common questions about our services, therapy, and
              mental well-being.
            </p>
            <motion.div
              className="w-full flex justify-center mb-8 font-bricolage"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img
                src="/Illustrationb.png"
                alt="Mental wellness illustration"
                className="w-130 h-130 object-contain rounded-2xl "
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 w-full font-bricolage"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.18 } },
              hidden: {},
            }}
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FrequentlyAsked;
