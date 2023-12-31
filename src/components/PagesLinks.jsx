import { useEffect } from 'react';
import { motion } from 'framer-motion';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const languages = [
    {
        languageName: 'English',
        languageCode: 'en',
        countryFlagCode: 'gb',
    },
    {
        languageName: 'Français',
        languageCode: 'fr',
        countryFlagCode: 'fr',
    },
    {
        languageName: 'العربية',
        languageCode: 'ar',
        countryFlagCode: 'sa',
    },
];

function PagesLinks({
    onClick = null,
    parentClassName,
    activeLink,
    handleActiveLink,
    currentLanguage,
    setCurrentLanguage,
}) {
    const { t } = useTranslation();
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
                            activeLink === t('home_link') ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                        variants={linksVars}
                    >
                        {t('home_link')}
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#about"
                        className={`${
                            activeLink === t('aboutus_link')
                                ? 'active-link'
                                : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                        variants={linksVars}
                    >
                        {t('aboutus_link')}
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#cars"
                        className={`${
                            activeLink === t('cars_link') ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                        variants={linksVars}
                    >
                        {t('cars_link')}
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#booking"
                        className={`${
                            activeLink === t('booknow_link')
                                ? 'active-link'
                                : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                        variants={linksVars}
                    >
                        {t('booknow_link')}
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#contact"
                        className={`${
                            activeLink === t('contact_link')
                                ? 'active-link'
                                : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                        variants={linksVars}
                    >
                        {t('contact_link')}
                    </motion.a>
                </li>
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
