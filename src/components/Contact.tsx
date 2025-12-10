"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  return (
    <section id="contact" className="relative py-32 bg-neutral-900">
      {/* Top border accent with animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-100 mb-6" style={{ fontFamily: "'Cormorant', serif" }}>
            Let's Create Something Amazing
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to bring your event to life? Get in touch with us today.
          </p>

          {/* Contact Methods with staggered animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-br from-neutral-800/80 to-neutral-850/80 border border-neutral-700/50 rounded-2xl p-8 hover:border-amber-400/60 transition-all duration-300 hover:shadow-[0_0_50px_rgba(251,191,36,0.2)] cursor-pointer"
            >
              <div className="mb-4 text-amber-400">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-neutral-100 mb-4">Email Us</h3>
              <div className="space-y-3">
                <div className="block text-amber-400 transition-colors duration-300 font-medium">
                  contact@events-88.com
                </div>
                <div className="block text-amber-400 transition-colors duration-300 font-medium">
                  arina@events-88.com
                </div>
              </div>
            </motion.div>

            {/* Phone Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-br from-neutral-800/80 to-neutral-850/80 border border-neutral-700/50 rounded-2xl p-8 hover:border-amber-400/60 transition-all duration-300 hover:shadow-[0_0_50px_rgba(251,191,36,0.2)] cursor-pointer"
            >
              <div className="mb-4 text-amber-400">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-neutral-100 mb-4">Call or Text</h3>
              <div className="block text-2xl text-amber-400 transition-colors duration-300 mb-3 font-semibold">
                (650) 704-7978
              </div>
              <div className="text-sm text-neutral-300 space-y-1 font-light">
                <p>📱 Text: 24 hours</p>
                <p>📞 Call: 12-7 PM</p>
              </div>
            </motion.div>
          </div>

          {/* Strong CTA Button with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-900 font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(251,191,36,0.4)] hover:from-amber-300 hover:to-amber-400"
            >
              Send Us a Message
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowForm(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-900 border-2 border-amber-400/30 rounded-2xl p-8 max-w-lg w-full relative"
          >
            {/* Close button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-amber-400 flex items-center justify-center text-neutral-400 hover:text-amber-400 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-semibold text-white mb-2">Contact Us</h3>
            <p className="text-neutral-400 mb-6 text-sm">Choose how you'd like to reach out:</p>

            <div className="space-y-4">
              {/* Email Option */}
              <motion.a
                href="mailto:contact@events-88.com?subject=Event%20Inquiry&body=Hi%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20services.%0A%0AName%3A%20%0AEvent%20Date%3A%20%0AEvent%20Type%3A%20%0ANumber%20of%20Guests%3A%20%0AMessage%3A%20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-neutral-800 to-neutral-850 border border-neutral-700 hover:border-amber-400/60 rounded-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-white">Email Us</div>
                  <div className="text-sm text-neutral-400">Opens your default email app</div>
                </div>
                <svg className="w-5 h-5 text-neutral-600 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>

              {/* Call Option */}
              <motion.a
                href="tel:6507047978"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-neutral-800 to-neutral-850 border border-neutral-700 hover:border-amber-400/60 rounded-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-white">Call Now</div>
                  <div className="text-sm text-amber-400">(650) 704-7978</div>
                </div>
                <svg className="w-5 h-5 text-neutral-600 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>

              {/* Text Option */}
              <motion.a
                href="sms:6507047978?body=Hi%2C%20I'm%20interested%20in%20your%20event%20services."
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-neutral-800 to-neutral-850 border border-neutral-700 hover:border-amber-400/60 rounded-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-white">Send a Text</div>
                  <div className="text-sm text-neutral-400">Available 24/7</div>
                </div>
                <svg className="w-5 h-5 text-neutral-600 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
