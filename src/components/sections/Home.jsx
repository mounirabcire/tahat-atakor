import { useState } from 'react';

import MenuBar from '../MenuBar';
import PagesLinks from '../PagesLinks';
import Button from '../Button';
import logo from '../../assets/logo-white.svg';
import bgImg from '../../assets/bg.jpg';
import '../../styles/home.css';
import { AnimatePresence, motion } from 'framer-motion';

const parentVariants = {
    hidden: {
        color: 'transparent',
    },
    visible: {
        color: 'white',
        transition: {
            delay: 1.3,
            type: 'tween',
        },
    },
};

const childrenVariants = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: '100vw',
        transition: {
            duration: 1,
            delay: 1,
            type: 'tween',
        },
    },
};

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

    return (
        <header className="home-section" id="home">
            <div className="bg-img" style={style}>
                <div className="bg-back">
                    <div className="container">
                        <MenuBar
                            handleVisibility={handleVisibility}
                            isVisible={isVisible}
                        />
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
                                    <motion.h1
                                        variants={parentVariants}
                                        initial={'hidden'}
                                        animate={'visible'}
                                    >
                                        Book Your Adventure: Find the Perfect{' '}
                                        <span>Rental Car</span> for Your Next
                                        Trip
                                        <motion.span
                                            className="box"
                                            variants={childrenVariants}
                                            initial={'hidden'}
                                            animate={'visible'}
                                            // transition={{delay: 12}
                                        ></motion.span>
                                    </motion.h1>
                                    <motion.h4
                                        variants={parentVariants}
                                        initial={'hidden'}
                                        animate={'visible'}
                                    >
                                        Hit the Road in Style with Our Fleet of
                                        High-Performance Rental Cars
                                        <motion.span
                                            className="box"
                                            variants={childrenVariants}
                                            initial={'hidden'}
                                            animate={'visible'}
                                            // transition={{delay: 22}
                                        ></motion.span>
                                    </motion.h4>
                                </div>
                                <motion.div
                                    variants={parentVariants}
                                    initial={'hidden'}
                                    animate={'visible'}
                                    className="btns col-12"
                                >
                                    <Button isLink={true} pageLink="booking">
                                        Book now
                                    </Button>
                                    <motion.span
                                        className="box"
                                        variants={childrenVariants}
                                        initial={'hidden'}
                                        animate={'visible'}
                                    ></motion.span>
                                    <Button isLink={true} pageLink="cars">
                                        See all cars
                                    </Button>
                                </motion.div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Home;
