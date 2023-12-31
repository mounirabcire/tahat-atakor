import { useState } from 'react';
import { motion } from 'framer-motion';

function PagesLinks({ onClick = null, parentClassName }) {
    const [activeLink, setActiveLink] = useState('Home');
    const [language, setLanguage] = useState('En');

    function handleActiveLink(link) {
        setActiveLink(link);
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
                staggerChildren: .06,
                staggerDirection: 1,
            },
        },
    };

    const linksVars = {
        hidden: {
            y: '30vh',
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        visible: {
            y: 0,
            transition: {
                duration: 0.7,
            },
        },
    };

    return (
        <div className={`links ${parentClassName}`}>
            <motion.ul
                variants={parentVars}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <li>
                    <motion.a
                        href="#home"
                        className={`${
                            activeLink === 'Home' ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                        variants={linksVars}
                    >
                        Home
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#about"
                        className={`${
                            activeLink === 'About us' ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                        variants={linksVars}
                    >
                        About us
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#cars"
                        className={`${
                            activeLink === 'Cars' ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                        variants={linksVars}
                    >
                        Cars
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#booking"
                        className={`${
                            activeLink === 'Book now' ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                        variants={linksVars}
                    >
                        Book now
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#contact"
                        className={`${
                            activeLink === 'Contact' ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                        variants={linksVars}
                    >
                        Contact
                    </motion.a>
                </li>
                <li>
                    <motion.select
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                        variants={linksVars}
                    >
                        <option value="En">English</option>
                        <option value="Ar">Arabic</option>
                        <option value="Fr">French</option>
                    </motion.select>
                </li>
            </motion.ul>
        </div>
    );
}

export default PagesLinks;
