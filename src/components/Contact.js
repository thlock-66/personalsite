import Header from "./Header";
import './contact.css';
import { motion } from "framer-motion";
import profpic from "./img/profpic.jpg";

export default function Contact() {
  return (
    <div>
      < Header />
      <h1>Hello! I'm Lock Yin :-)</h1>
      <motion.div
        initial={{ opacity: 0, y: 180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.6,
        }}
        className="about">
        <img class="image" src={profpic} alt="profilepic" />
        <p className="contactpage">
          2020 Renaissance Engineering Programme graduate from Nanyang Technological University. <br />
          BSc. Mechanical Engineering & M.S. Technological Management.<br />
          In my free time, I enjoy photography, travelling, bouldering, and learning new languages. <br />
          I am currently learning front-end development
          <br />
          <br />
          Contact me:
          <br />

          <a className="email" href="mailto:tlockyin@gmail.com">tlockyin@gmail.com </a><br />
          <a className="email" href="https://linkedin.com/in/lockyin">linkedin.com/in/lockyin </a><br /> <br />

          <a className="resume" href='/resume.docx' download>Resume</a>
        </p>
        <img class="image-small" src={profpic} alt="profilepic2" />
      </motion.div>
    </div>
  );
}