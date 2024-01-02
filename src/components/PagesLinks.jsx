import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import i18next from 'i18next';

const languages = [
    {
        languageName: 'English',
        languageCode: 'en',
        countryFlagCode: 'gb',
    },
    {
        languageName: 'French',
        languageCode: 'fr',
        countryFlagCode: 'fr',
    },
    {
        languageName: 'Arabic',
        languageCode: 'ar',
        countryFlagCode: 'sa',
    },
];

function PagesLinks({ onClick = null, parentClassName }) {
    const [activeLink, setActiveLink] = useState('Home');
    const [currentLanguage, setCurrentLanguage] = useState('en');

    function handleActiveLink(link) {
        setActiveLink(link);
    }

    useEffect(() => {
        currentLanguage === 'ar'
            ? (document.body.dir = 'rtl')
            : (document.body.dir = 'ltr');
    }, [currentLanguage]);

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
                {/* <li>
                    <select
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                        onClick={e => {
                            i18next.changeLanguage(e.target.value);
                        }}
                    >
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                        <option value="fr">French</option>
                    </select>
                </li> */}
                <li className="dropdown">
                    <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        <i className="ri-global-line"></i>
                    </button>
                    <ul className="dropdown-menu">
                        {languages.map(
                            (
                                { languageName, languageCode, countryFlagCode },
                                i
                            ) => (
                                <li
                                    key={i}
                                    className={`dropdown-item ${
                                        currentLanguage !== languageCode
                                            ? 'hiddenItem'
                                            : ''
                                    }`}
                                    onClick={e => {
                                        setCurrentLanguage(languageCode);
                                        i18next.changeLanguage(languageCode);
                                    }}
                                >
                                    {languageName}
                                    <span
                                        className={`flag-icon flag-icon-${countryFlagCode}`}
                                    ></span>
                                </li>
                            )
                        )}
                    </ul>
                </li>
            </motion.ul>
        </div>
    );
}

export default PagesLinks;
