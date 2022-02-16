import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
    className="header">
      <div className="header-inner">
        <div className="logo">Lock Yin</div>
        <nav className="nav">
          <li>
            <a href="https://tamlockyin.wixsite.com/mysite/other-works">Work</a>
          </li>
          <li>
            <a href="https://tamlockyin.wixsite.com/mysite/photography">Photography</a>
          </li>
        </nav>
        <div className="contact">
          <a href="tlockyin@gmail.com">Contact Me</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
