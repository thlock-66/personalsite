import Header from "./Header";
import './work.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Gdesign() {
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
                graphic design work.
            </h1>
            <motion.div
                initial={{ opacity: 0, y: 180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.6,
                }}
                className="maingallery">
                <div className="row">
                    <div className="column">
                        <img src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2FBurgers.jpg?v=1599107392134" alt="1" />
                        <img src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2Fpeaches.jpg?v=1599107424652" alt="2" />
                        <img src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2Fbmt.jpg?v=1599107692251" alt="3" />
                    </div>
                    <div className="column">
                        <img src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2FNamecards%20Stack.jpg?v=1599107403704" alt="4" />
                        <img src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2Fviking%20card.jpg?v=1599107421729" alt="5" />
                        <img src="https://cdn.glitch.com/26f8490e-80fc-419b-8f0f-f1950bd52101%2Ffishes.jpg?v=1599107394534" alt="6" />
                    </div>
                    <p><br /><br /><br /></p>
                </div>
            </motion.div >

        </div >
    );
}
