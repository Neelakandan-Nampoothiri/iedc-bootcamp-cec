import React from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0px 10px 30px rgba(56, 189, 248, 0.2)',
        y: -5
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="w-full aspect-video bg-gray-100">
        <img className="w-full h-full object-cover" src={event.image} alt={event.title} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2 font-poppins">{event.title}</h3>
        <p className="text-sm text-theme-accent mb-3 font-semibold">{event.date}</p>
        <p className="text-text-secondary text-base">{event.description}</p>
      </div>
    </motion.div>
  );
};

export default EventCard;