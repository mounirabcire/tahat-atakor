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

    const textVars = {
        hidden: {
            y: '100vh',
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        visible: {
            y: 0,
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
                            <div className="row">
                                <div className="headings col-12">
                                    <h1>
                                        <motion.div
                                            variants={textVars}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            Book Your Adventure: Find the
                                            Perfect <span>Rental Car</span> for
                                            Your Next Trip
                                        </motion.div>
                                    </h1>
                                    <h4>
                                        <div>
                                            Hit the Road in Style with Our Fleet
                                            of High-Performance Rental Cars
                                        </div>
                                    </h4>
                                </div>
                                <div className="btns">
                                    <Button isLink={true} pageLink="booking">
                                        Book now
                                    </Button>
                                    <Button isLink={true} pageLink="cars">
                                        See all cars
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Home;
