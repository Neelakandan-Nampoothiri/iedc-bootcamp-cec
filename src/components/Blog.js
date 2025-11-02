import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogModal from './BlogModal';

const blogPosts = [
  {
    id: 1,
    title: 'Our Vision for the Next Year',
    snippet: 'A brief look into the upcoming initiatives, projects, and goals for the IEDC community at CEC. We are excited for what is to come!',
    fullContent: 'Our vision for the upcoming year at IEDC Bootcamp CEC is to foster a vibrant ecosystem of innovation and entrepreneurship. We aim to launch new mentorship programs, organize advanced workshops on emerging technologies, and facilitate stronger connections with industry leaders. Our goal is to empower every student to transform their ideas into impactful ventures, driving positive change within our community and beyond. We are committed to providing the resources, guidance, and platform necessary for our members to excel and make a significant mark in the world of technology and business.',
    date: 'Oct 28, 2025',
  },
  {
    id: 2,
    title: 'Highlights from the React Workshop',
    snippet: 'We had an amazing turnout for our React workshop. Here are some of the key takeaways and moments from the event.',
    fullContent: 'Full content for Highlights from the React Workshop. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: 'Oct 20, 2025',
  },
  {
    id: 3,
    title: 'Why Side Projects are Important',
    snippet: 'Exploring how personal projects can boost your skills, resume, and passion for technology.',
    fullContent: 'Full content for Why Side Projects are Important. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: 'Oct 15, 2025',
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <motion.div 
      className="bg-theme-bg pt-28 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-text-primary text-center mb-12 font-poppins">Announcements</h1>
        <motion.div className="space-y-8" variants={containerVariants}>
          {blogPosts.map(post => (
            <motion.div key={post.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-text-primary mb-2 font-poppins">{post.title}</h2>
              <p className="text-sm text-text-secondary mb-4">{post.date}</p>
              <p className="text-text-secondary mb-4">{post.snippet}</p>
              <button onClick={() => openModal(post)} className="text-theme-accent font-semibold hover:underline">Read More &rarr;</button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <BlogModal post={selectedPost} onClose={closeModal} />
    </motion.div>
  );
};

export default Blog;
