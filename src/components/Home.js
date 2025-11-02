import React from 'react';
import Hero from './Hero';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="bg-theme-bg py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-text-primary mb-4 font-poppins"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About IEDC CEC
          </motion.h2>
          <motion.p 
            className="text-lg text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Innovation and Entrepreneurship Development Cell (IEDC) at College of Engineering Chengannur is a student-run organization dedicated to fostering a culture of innovation, creativity, and entrepreneurship among students. We provide a platform for students to develop their ideas, learn new skills, and connect with like-minded individuals.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Home;
