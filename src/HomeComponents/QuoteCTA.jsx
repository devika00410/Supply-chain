"use client";
import { motion } from "framer-motion";

export default function QuoteCTA() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Smooth scroll handler
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.querySelector("#contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      className="bg-gray-100 text-center py-16 px-6 rounded-2xl max-w-5xl mx-auto"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers on scroll into view
    >
      {/* Quote */}
      <blockquote className="text-2xl md:text-3xl font-semibold italic text-gray-800 mb-6">
        “Great logistics isn’t just about moving goods — it’s about moving businesses forward.”
      </blockquote>

      {/* Sub-text */}
      <p className="text-lg text-gray-600 mb-8">
        Let’s build smarter supply chains together.
      </p>

      {/* CTA Button */}
      <button
        onClick={handleScroll}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl shadow-md transition duration-300"
      >
        Get in Touch
      </button>
    </motion.section>
  );
}
