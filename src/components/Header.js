import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        <div className="logo"><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Lock Yin</Link></div>
        <nav className="nav">
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/photography">Photography</Link>
          </li>
        </nav>
        <div className="contact">
          <Link to="/contact">Contact Me</Link>
        </div>
        {/* <div className="hamburger-menu" onClick={}> 
          <span></span>
          <span></span>
          </div>
        </div> */}
        <div className="dropdown">
          <button className="btn hamburger-menu" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <span></span>
            <span></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><Link className="dropdown-item" to="/work">Work</Link></li>
            <li><Link className="dropdown-item" to="/photography">Photography</Link></li>
            <li className="contact1"><Link className="dropdown-item" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </motion.div >
  );
};

export default Header;
