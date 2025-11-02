import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-primary"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 15,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{ backgroundSize: '400% 400%' }}
        />
        <div className="absolute inset-0 bg-dark-overlay opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-4">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold font-poppins mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          IEDC Bootcamp CEC
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl font-light text-gray-200 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          Innovative, Energetic, Student-driven. Join us to build the future.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
        >
          <Link
            to="/events"
            className="inline-block bg-gradient-primary text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-theme-accent/30"
          >
            Explore Events
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
