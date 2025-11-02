import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogModal = ({ post, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (!post) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="fixed inset-0 bg-black/70" onClick={onClose}></div>
        
        <motion.div
          className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 text-text-primary"
          variants={modalVariants}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
          <h2 className="text-3xl font-bold font-poppins mb-4">{post.title}</h2>
          <p className="text-sm text-text-secondary mb-4">{post.date}</p>
          <p className="text-lg leading-relaxed">{post.fullContent || post.snippet}</p>
          {/* Add more content here if fullContent is available */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogModal;
