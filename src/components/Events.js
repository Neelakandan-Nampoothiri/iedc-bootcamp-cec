import React from 'react';
import EventCard from './EventCard';
import { motion } from 'framer-motion';
import exodia from "../assets/exodia.webp";
import Design from "../assets/Design.webp";
import techforge from "../assets/techforge.webp";
import github from "../assets/github.webp";

const eventsData = [
  {
    id: 1,
    title: 'Exodia',
    date: '24-02-2024',
    description: 'Exodia is live! Visit www.exodiacec.online to witness EXODIA 2024, a collaboration between FOCES CEC, IEDC BOOTCAMP CEC, and Mulearn CHN. Navigate seamlessly, explore event details, and reserve your spot for a grand gathering of minds and innovation',
    image: exodia,
  },
  {
    id: 2,
    title: 'TechForge 2.0',
    date: '24-09-2024',
    description: 'Step into the future with Techforge 2.0! Powered by the collaboration between IEDC Bootcamp CEC and GTech µLearn CHN, this cutting-edge event is your gateway to growth and innovation.',
    image: techforge,
    
  },
  {
    id: 3,
    title: 'UI/UX Design Workshop',
    date: '23-11-2023',
    description: 'Reflecting on the dynamic UI/UX workshop by IEDC BOOTCAMP CEC and FOCES CEC. Participants supercharged their design expertise, showcasing skills in an epic hackathon.',
    image: Design,
  },
    {
    id: 4,
    title: 'GitWay',
    date: '26-12-2023',
    description: 'Embark on a coding adventure with IEDC BOOTCAMP CEC Coding Expedition led by Noel Paul George, a Microsoft Learn Student Ambassador.',
    image: github 
  }
  
];

const Events = () => {
  return (
    <div className="bg-theme-bg pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-text-primary text-center mb-12 font-poppins"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Events & Workshops
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
