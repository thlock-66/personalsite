import Header from "./Header";
import './work.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import work1 from './img/work1.jpg';
import work2 from './img/work2.jpg';
import work3 from './img/work3.jpg';
import work5 from './img/work5.jpg';

export default function Work() {
  return (
    <div>
      < Header />
      <h1>design work.</h1>
      <div className="main">
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.6,
          }}
          className="responsive">
          <div className="gallery">
            <div className="content">
              <Link to="/uiux">
                <img src={work1} className="workpic" alt="ui/ux" />
              </Link>
              <div className="desc">UI/UX Work</div>
            </div>
          </div>
          <div className="gallery">
            <div className="content">
              <Link to='/gdesign'>
                <img src={work2} className="workpic" alt="Graphic Design" />
              </Link>
              <div className="desc">Graphic Design Work</div>
            </div>
          </div>
          <div className="gallery">
            <div className="content">
              <Link to="/witp">
                <img src={work3} className="workpic" alt="walk-in-the-park" />
              </Link>
              <div className="desc">Product Design Project: Walk-in-the-PARK</div>
            </div>
          </div>
          <div className="gallery">
            <div className="content">
              <Link to="/fyp">
                <img src={work5} className="workpic" alt="FYP" />
              </Link>
              <div className="desc">Final Year Project: Silicone 3D Printing</div>
            </div>
          </div>
        </motion.div>
      </div >
    </div >
  );
}