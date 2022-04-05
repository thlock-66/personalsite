import Header from "./Header";
import './work.css';
import { motion } from "framer-motion";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

export default function SmartMirror() {
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
                smart mirror.
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
                    Project Smart Mirror was a product design project for MA4858: Product Design. The aim was come up with a product using the design thinking process that can make use of Toshiba's Artificial Intelligence, RECAIUS, as well as to build a physical and app prototype. The project was sponsored by Toshiba.
                </p>
                <div className="carousel">
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F2.jpg?v=1595326140355"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F3.jpg?v=1595326160801"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F4.jpg?v=1595326186186"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F5.jpg?v=1595326196330"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F6.jpg?v=1595326202189"
                                alt="Fifth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F21.jpg?v=1595326261130"
                                alt="Sixth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F8.jpg?v=1595326214910"
                                alt="Seventh slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F7.jpg?v=1595326210681"
                                alt="Eigth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F9.jpg?v=1595326226751"
                                alt="Ninth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F10.jpg?v=1595326232181"
                                alt="Tenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F11.jpg?v=1595326241970"
                                alt="Eleventh slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F12.jpg?v=1595326244270"
                                alt="Twelth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F14.jpg?v=1595326249881"
                                alt="Thirteenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F15.jpg?v=1595326253239"
                                alt="Fourteenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2F16.jpg?v=1595326256846"
                                alt="Fifteenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2FMidterm%20Presentation.jpg?v=1599098484120"
                                alt="Sixteenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2FMidterm%20Presentation%20(1).jpg?v=1599098483789"
                                alt="Seventeenth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <p>View final poster <a href='/smartmirrorposter.png' download>here</a></p>
                <h3>Group mates: Tam Lock Yin, Poh Shao Kai, Ng Yuzhi, Xu Yan</h3>
            </motion.div>

        </div>
    );
}