import Header from "./Header";
import './work.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ncs1 from "./img/ncs1.png";
import ncs3 from "./img/ncs3.png";
import ncs4 from "./img/ncs4.png";
import ncs5 from "./img/ncs5.jpg";
import graphene from "./img/graphene.png";

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
                    ui/ux product designer at NCS (current)
                </h2>
                <p>
                    Under the Singtel Management Associate Programme, I worked at NCS as a UX designer. Some projects and clients I have worked for are Resorts World Sentosa, doing a casino website and portal redesign, to capture new visitors and for existing visitors to manage their rewards.  Another client I worked with was with National Gallery Singapore, doing visitor experience consulting. There, I helped create a visitor experience journey for the clients, and co-led client conversations on how to incorporate an innovation culture in the Gallery for their staff.
                    <br></br>
                    <br></br>
                    In another project, I worked as a front-end UI developer in a PUB website redesign project. I worked with the UX designers in my team, to transform Figma designs into code, to handoff to backend developers. Below is an example of a page I transformed into code, and the beta website has been launched <a href="https://beta.pub.gov.sg/"> here </a>.
                    <br></br>
                    <br></br>
                    <div className="videoDiv">
                        <img src={ncs5} width="100%" alt="ncs5" />
                    </div>
                </p>
                <p>
                    I also worked in the NEXT robotics team in my first year as a UI/UX product designer, helping to design robotic payloads as well as accompanying apps for use in the healthcare and eldercare sector. I engaged with many hospitals and nursing homes to gain insights into their problems, to create user-friendly robotic solutions.
                    <br /><br />
                    <div className="videoDiv">
                        <img src={ncs1} width="100%" alt="ncs1" />
                    </div>
                    <br /><br />
                    I also developed and improved the user experience for our robotic nurse assistant for patients in hospitals, from the flow of interactions between patient and robot, designing robot UI screens on Figma and AfterEffects, to development in Python. I also wireframed a new UI for our robot navigation software in Figma, improving the current UI based on user feedback and worked with front-end developers to ensure the product is built as designed.
                    <br /><br />
                    We participated in the IMDA Open Innovation Challenge for Elderly Smart Home Solutions. Using the design thinking process and in-depth user research and market research, we came up with a solution focused on both the mental and physical well-being of the elderly. I modelled the robot companion solution in Fusion360, designing expressions for engagement and interactivity, and also created the accompanying phone app mockup in Figma for demo purposes.
                    <br /><br />
                    <div className="videoDiv">
                        <img src={ncs3} width="50%" alt="ncs3" />
                        <img src={ncs4} width="50%" alt="ncs4" />
                    </div>
                    <br /><br />
                    I was also a finalist in the NCS NEXT hackathon 2021 and 2022, pitching a solution for banking in the metaverse in 2022, and pitching a solution for digital transformation to a panelist of senior leaders at MBS in 2021. We achieved 2nd place in the Innovator Category in 2021. A trailer of our metaverse solution is shown below:
                    <br /><br />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <video controls style={{ width: '100%', height: 'auto' }}>
                            <source src={process.env.PUBLIC_URL + "/parallel.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    If you would like to learn more, feel free to contact me!
                </p>
                <br />
                <h2>
                    ui/ux internship: graphene (summer 2020)
                </h2>
                <p>
                    A summer internship at Graphene Services, an AI-powered market research company. Designed the interface and user experience for their new website, and did market research and product design for a new collaborative task delegation app.
                    <br /><br />
                    Software used: Adobe AfterEffects, Invision Studio, Figma
                    <br /><br />
                    <div className="videoDiv">
                        <img src={graphene} width="100%" alt="graphene" />
                    </div>
                </p>
                <br />
            </motion.div>
        </div>
    );
}