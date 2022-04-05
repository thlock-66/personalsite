import Header from "./Header";
import './work.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import fyp1 from './img/fyp/fyp1.jpg';
import fyp2 from './img/fyp/fyp2.jpg';
import fyp3 from './img/fyp/fyp3.jpg';
import fyp4 from './img/fyp/fyp4.jpg';
import fyp5 from './img/fyp/fyp5.jpg';
import fyp6 from './img/fyp/fyp6.jpg';
import fyp7 from './img/fyp/fyp7.jpg';
import fyp8 from './img/fyp/fyp8.jpg';
import fyp9 from './img/fyp/fyp9.jpg';
import fyp10 from './img/fyp/fyp10.jpg';
import fyp11 from './img/fyp/fyp11.jpg';
import fyp12 from './img/fyp/fyp12.jpg';
import fyp13 from './img/fyp/fyp13.jpg';
import fyp14 from './img/fyp/fyp14.jpg';
import fyp15 from './img/fyp/fyp15.jpg';
import fyp16 from './img/fyp/fyp16.jpg';
import fyp17 from './img/fyp/fyp17.jpg';
import fyp18 from './img/fyp/fyp18.jpg';
import fyp19 from './img/fyp/fyp19.jpg';
import fyp20 from './img/fyp/fyp20.jpg';
import fyp21 from './img/fyp/fyp21.jpg';
import fyp22 from './img/fyp/fyp22.jpg';
import fyp23 from './img/fyp/fyp23.jpg';
import fyp24 from './img/fyp/fyp24.jpg';
import fyp25 from './img/fyp/fyp25.jpg';
import fyp26 from './img/fyp/fyp26.jpg';
import fyp27 from './img/fyp/fyp27.jpg';
import fyp28 from './img/fyp/fyp28.jpg';
import fyp29 from './img/fyp/fyp29.jpg';
import fyp30 from './img/fyp/fyp30.jpg';

export default function FYP() {
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
                final year project: 3D silicone printing.
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
                    My final year project was a self-proposed project on the printing of silicone. The goal of the project was to make a 3D printer, capable of printing silicone parts to be used in medical applications, and to finally print a customized solid silicone breast implant without collapse as a proof of concept. Below is a summary of the project.
                </p>
                <div className="carousel">
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp4}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp5}
                                alt="Fifth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp6}
                                alt="Sixth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp7}
                                alt="Seventh slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp8}
                                alt="Eigth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp9}
                                alt="Ninth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp10}
                                alt="Tenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp11}
                                alt="Eleventh slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp12}
                                alt="Twelth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp13}
                                alt="Thirteenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp14}
                                alt="Fourteenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp15}
                                alt="Fifteenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp16}
                                alt="Sixteenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp17}
                                alt="Seventeenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp18}
                                alt="18th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp19}
                                alt="19th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp20}
                                alt="20th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp21}
                                alt="21st slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp22}
                                alt="22nd slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp23}
                                alt="23rd slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp24}
                                alt="24th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp25}
                                alt="25th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp26}
                                alt="26th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp27}
                                alt="27th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp28}
                                alt="28th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp29}
                                alt="29th slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={fyp30}
                                alt="30th slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <p><br /></p>
            </motion.div>

        </div>
    );
}