import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

import joe from "../assets/Joe.webp";
import lekshmi from "../assets/Lekshmi.webp";
import jerry from "../assets/Jerry.webp";
import abhijith from "../assets/Abhijith.webp";

const teamData = [
  {
    id: 1,
    name: "Joe Abraham K",
    position: "Student Lead 1",
    photo: joe,
  },
  {
    id: 2,
    name: "Lekshmipriya S",
    position: "Student Lead 2",
    photo: lekshmi,
  },
  {
    id: 3,
    name: "Jerry Sanju Joanes",
    position: "Finance Lead",
    photo: jerry,
  },
  {
    id: 4,
    name: "Abhijith J Nair",
    position: "Operations Lead",
    photo: abhijith,
  },
];

const Team = () => {
  return (
    <div className="bg-theme-bg pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-text-primary text-center mb-12 font-poppins"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Team
        </motion.h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
