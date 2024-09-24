import Header from "./Header";
import { motion } from "framer-motion";
import './photography.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img11 from './img/img11.jpg';
import img12 from './img/img12.jpg';
import img16 from './img/img16.jpg';
import img17 from './img/img17.jpg';
import img18 from './img/img18.jpg';
import img19 from './img/img19.jpg';
import img20 from './img/img20.jpg';
import img21 from './img/img21.jpg';
import img24 from './img/img24.jpg';

export default function Photography() {
  return (
    <div>
      <Header />
      <h1>personal photography.</h1>
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
            <img src={img1} alt="img1" />
            <img src={img4} alt="img4" />
            <img src={img21} alt="img21" />
            <img src={img20} alt="img20" />
            <img src={img9} alt="img9" />
            <img src={img6} alt="img6" />
            <img src={img16} alt="img16" />
            <img src={img8} alt="img8" />

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
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
            <img src={img18} alt="img18" />
            <img src={img19} alt="img19" />
            <img src={img11} alt="img11" />
            <img src={img12} alt="img12" />
            <img src={img24} alt="img24" />
            <img src={img7} alt="img7" />
            <img src={img17} alt="img17" />
          </motion.div>
        </div>
      </div>
    </div >
  );
}