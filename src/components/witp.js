import Header from "./Header";
import './work.css';
import witpimg from "./img/work3.jpg";
import witp1 from "./img/witp1.png";
import witp2 from "./img/witp2.png";
import witp3 from "./img/witp3.png";
import witp4 from "./img/witp4.png";
import witppersona from "./img/witp-persona.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WITP() {
    return (
        <div>
            < Header />
            <h1>
                <button className="btn back-button" type="button">
                    <Link to="/work" color="black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="black" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </Link>
                </button>
                walk-in-the-PARK.
            </h1>
            <motion.div
                initial={{ opacity: 0, y: 180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.6,
                }}>
                <p>
                    walk-in-the-PARK was the result of a product design group project at UC Berkeley, aimed to simplify the driving process by making parking a seamless process. The idea sprouted from the frustration of finding street parking in crowded cities such as San Francisco, and the confusing street parking signs that have led to avoidable parking tickets.
                    <br />
                </p>
                <div className="videoDiv">
                    <img src={witpimg} width="100%" alt="walkinthepark" />
                </div>
                <p>
                    We aimed to design a product that streamlined the parking experience for the average driver. The product would enable the user to seamlessly find, navigate, and pay for parking. It would offer the user a peace of mind and allow the user to concentrate on his/her task at hand, be it a leisure family trip or an urgent conference meeting. <br />
                    We conducted surveys and interviews with many drivers, to collate their pain points and help validate our assumptions. From this, we also came up with 2 main user personas and used them as a base to draw out a more streamlined user journey.
                </p>
                <div className="videoDiv">
                    <img src={witppersona} width="100%" alt="persona" />
                </div>
                <p>
                    In order to address the pain points identified, our solution comprised of two main portions: digital parking signs together with an accompanying parking app.
                    We then started prototyping from simple concept sketches to simple mockups done in Figma and iterated along the way through feedback from user testing.
                </p>
                <div className="witpimg">
                    <img className="witpimage" src={witp1} alt="persona" />
                    <img className="witpimage" src={witp2} alt="persona" />
                    <img className="witpimage" src={witp3} alt="persona" />
                    <img className="witpimage" src={witp4} alt="persona" />
                </div>

                <div className="caption">
                    <p> Concept sketch, first iteration, second iteration and final iteration of the digital parking signs. </p>
                </div>

                <p>A more in-depth design process can be found <a href='/witpreport.docx' download>here</a></p>
                <h3>Group Members: Joseph Teo, Kok Hui Yuan, Lock Yin Tam, Oh Zhe Hao, Vienna Neo</h3>

            </motion.div>

        </div>
    );
}