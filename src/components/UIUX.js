import Header from "./Header";
import './work.css';
import { motion } from "framer-motion";
import icecream from "./img/ice-cream.jpg";
import { Link } from "react-router-dom";
import ncs1 from "./img/ncs1.png";
import ncs3 from "./img/ncs3.png";
import ncs4 from "./img/ncs4.png";

export default function UIUX() {
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
                ui/ux work.
            </h1>
            <motion.div
                initial={{ opacity: 0, y: 180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.6,
                }}>
                <h2>
                    ui/ux product designer at NCS
                </h2>
                <p>
                    Under the Singtel Management Associate Programme, I worked at NCS as a UI/UX product designer in a robotics team, helping to design robotic payloads as well as accompanying apps for use in the healthcare and eldercare sector. I engaged with many hospitals and nursing homes to gain insights into their problems, to create user-friendly robotic solutions.
                    <br /><br />
                    <div className="videoDiv">
                        <img src={ncs1} width="100%" alt="ncs1" />
                    </div>
                    <br /><br />
                    I developed and improved the user experience for our robotic nurse assistant for patients in hospitals, from the flow of interactions between patient and robot, designing robot UI screens on Figma and AfterEffects, to development in Python.
                    <br /><br />
                    I also participated in the IMDA Open Innovation Challenge for Elderly Smart Home Solutions. We went through the whole design thinking process, coming up with personas for different elderly and staff based on previous interviews and market research, to create a solution focused on both mental and physical well-being of the elderly. I modelled the robot companion solution in Fusion360, designing expressions for engagement and interactivity, and also created the accompanying phone app mockup in Figma for demo purposes.
                    <br /><br />
                    <div className="videoDiv">
                        <img src={ncs3} width="50%" alt="ncs3" />
                        <img src={ncs4} width="50%" alt="ncs4" />
                    </div>
                    <br /><br />
                    I was also a finalist in the NCS NEXT hackathon, pitching a solution for digital transformation to a panelist of senior leaders at MBS. We achieved 2nd place in the Innovator Category.
                    <br /><br />
                    If you would like to learn more, feel free to contact me!
                </p>
                <br />
                <h2>
                    uiux internship: graphene (summer 2020)
                </h2>
                <p>
                    A summer internship at Graphene Services, an AI-powered market research company. Designed the interface and user experience for their new website, and did market research and product design for a new collaborative task delegation app.
                    <br /><br />
                    Software used: Adobe AfterEffects, Invision Studio, Figma
                </p>
                <br />
                <h2>
                    personal project: ice cream recipe mobile app (summer 2019)
                </h2>
                <p>
                    A personal project of an ice cream recipe mobile app, that came about from a particular hot summer where I was experimenting with different desserts and having trouble finding recipes to make use of my leftover ingredients.
                    <br /><br />
                    Mini project made to learn Adobe XD and auto-animate features.
                </p>
                <div className="videoDiv">
                    <img src={icecream} width="100%" alt="icecream" />
                </div>
                <br />
            </motion.div>
        </div>
    );
}