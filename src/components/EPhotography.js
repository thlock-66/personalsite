import Header from "./Header";
import { motion } from "framer-motion";
import './photography.css';
import img5 from './img/img5.jpg';
import img13 from './img/img13.jpg';
import img14 from './img/img14.jpg';
import img22 from './img/img22.jpg';
import img23 from './img/img23.jpg';
import img25 from './img/img25.jpg';
import img26 from './img/img26.jpg';
import img27 from './img/img27.jpg';
import img28 from './img/img28.jpg';

export default function Photography() {
  return (
    <div>
      <Header />
      <h1>event photography.</h1>
      <div className="maingallery">
        <div className="row">
          <motion.div
            initial={{ opacity: 0, y: 180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.6,
            }}
            className="column">
            <img src={img22} alt="img22" />
            <img src={img14} alt="img14" />
            <img src={img26} alt="img26" />
            <img src={img25} alt="img25" />
            <img src={img28} alt="img28" />

          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.6,
            }}
            className="column">
            <img src={img23} alt="img23" />
            <img src={img5} alt="img5" />
            <img src={img13} alt="img13" />
            <img src={img27} alt="img27" />
          </motion.div>
        </div>
      </div>
    </div >
  );
}