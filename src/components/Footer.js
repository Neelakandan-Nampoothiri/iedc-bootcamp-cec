import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-text-primary font-poppins mb-2">IEDC CEC</h3>
          <p className="text-text-secondary pr-4">Fostering innovation and entrepreneurship among students at College of Engineering Chengannur.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-text-secondary hover:text-theme-accent">Home</Link></li>
            <li><Link to="/events" className="text-text-secondary hover:text-theme-accent">Events</Link></li>
            <li><Link to="/team" className="text-text-secondary hover:text-theme-accent">Team</Link></li>
            <li><Link to="/blog" className="text-text-secondary hover:text-theme-accent">Blog</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold text-text-primary mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-text-secondary hover:text-theme-accent transform hover:scale-110 transition-transform"><FaTwitter size={24} /></a>
            <a href="https://www.linkedin.com/company/iedc-bootcamp-cec/" className="text-text-secondary hover:text-theme-accent transform hover:scale-110 transition-transform"><FaLinkedin size={24} /></a>
            <a href="#" className="text-text-secondary hover:text-theme-accent transform hover:scale-110 transition-transform"><FaGithub size={24} /></a>
            <a href="https://www.instagram.com/iedcbootcampcec?igsh=NmphdmZ0bDRvdTBu" className="text-text-secondary hover:text-theme-accent transform hover:scale-110 transition-transform"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-8 text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} IEDC CEC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;