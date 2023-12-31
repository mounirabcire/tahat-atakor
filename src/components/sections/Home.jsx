import { useState } from 'react';

import MenuBar from '../MenuBar';
import PagesLinks from '../PagesLinks';
import Button from '../Button';
import logo from '../../assets/logo-white.svg';
import bgImg from '../../assets/bg.jpg';
import '../../styles/home.css';
import { AnimatePresence, motion } from 'framer-motion';

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const style = {
        background: `url(${bgImg}) no-repeat fixed center`,
        backgroundSize: 'cover',
        position: 'relative',
    };

    function handleVisibility() {
        setIsVisible(pre => !pre);
    }

    const parentVars = {
        hidden: {
            transition: {
                staggerChildren: 0.06,
                staggerDirection: -1,
            },
        },
        visible: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.06,
                staggerDirection: 1,
            },
        },
    };

    const textVars = {
        hidden: {
            y: '50vh',
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: 0.5,
            },
        },
    };

    return (
        <header className="home-section" id="home">
            <div className="bg-img" style={style}>
                <div className="bg-back">
                    <div className="container">
                        <AnimatePresence>
                            {isVisible && (
                                <MenuBar
                                    handleVisibility={handleVisibility}
                                    isVisible={isVisible}
                                />
                            )}
                        </AnimatePresence>
                        <nav>
                            <div className="row">
                                <div className="logo col-6">
                                    <img src={logo} alt="A logo" />
                                </div>
                                <div className="pagesLinks col-6">
                                    <div
                                        className="menu"
                                        onClick={() => {
                                            setIsVisible(pre => !pre);
                                        }}
                                    >
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <PagesLinks parentClassName="links-nav" />
                                </div>
                            </div>
                        </nav>
                        <section>
                            <motion.div
                                className="row"
                                variants={parentVars}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.div className="headings col-12">
                                    <h1>
                                        <motion.div variants={textVars}>
                                            Book Your Adventure: Find the
                                            Perfect <span>Rental Car</span> for
                                            Your Next Trip
                                        </motion.div>
                                    </h1>
                                    <h4>
                                        <motion.div variants={textVars}>
                                            Hit the Road in Style with Our Fleet
                                            of High-Performance Rental Cars
                                        </motion.div>
                                    </h4>
                                </motion.div>
                                <div
                                    className="btns"
                                    
                                >
                                    <motion.div variants={textVars}>
                                        <Button
                                            isLink={true}
                                            pageLink="booking"
                                        >
                                            Book now
                                        </Button>
                                        <Button isLink={true} pageLink="cars">
                                            See all cars
                                        </Button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </section>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Home;
