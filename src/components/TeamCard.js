import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const TeamCard = ({ member }) => {
  return (
    <motion.div
      className="relative bg-white rounded-xl overflow-hidden group shadow-lg border border-gray-100"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative pt-[100%]">
        <img className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={member.photo} alt={member.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-text-primary">
        <h3 className="inline-block bg-black/50 text-white px-3 py-1 rounded-md text-lg font-bold font-poppins">{member.name}</h3>
        <p className="inline-block bg-black/50 px-3 py-1 rounded-md text-base text-theme-accent font-semibold">{member.position}</p>
      </div>
      {/* Social Icons on Hover */}
      <div className="absolute inset-0 bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-4">
          <a href="#" className="text-text-primary hover:text-theme-accent transform hover:scale-125 transition-transform"><FaTwitter size={24} /></a>
          <a href="#" className="text-text-primary hover:text-theme-accent transform hover:scale-125 transition-transform"><FaLinkedin size={24} /></a>
          <a href="#" className="text-text-primary hover:text-theme-accent transform hover:scale-125 transition-transform"><FaGithub size={24} /></a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;