import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <div className="bg-theme-bg pt-28 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-text-primary text-center mb-8 font-poppins"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Get In Touch
        </motion.h1>
        
        <AnimatePresence>
          {submitted ? (
            <motion.div
              className="text-center p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p className="font-bold">Thank you!</p>
              <p>Your message has been sent successfully.</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary">Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-theme-accent focus:border-theme-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary">Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-theme-accent focus:border-theme-accent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary">Message</label>
                <textarea name="message" id="message" rows="4" required className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-text-primary focus:outline-none focus:ring-theme-accent focus:border-theme-accent"></textarea>
              </div>
              <div className="text-center">
                <motion.button 
                  type="submit"
                  className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-theme-accent"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0px 0px 20px rgba(56, 189, 248, 0.5)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Contact;