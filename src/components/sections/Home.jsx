import { useEffect, useState } from 'react';

import MenuBar from '../MenuBar';
import PagesLinks from '../PagesLinks';
import Button from '../Button';
import logo from '../../assets/logo-white.svg';
import bgImg1 from '../../assets/bg1.webp';
import bgImg2 from '../../assets/bg2.webp';
import bgImg3 from '../../assets/bg3.webp';
import '../../styles/home.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const bgImg = [bgImg1, bgImg2, bgImg3];

function Home({
    activeLink,
    handleActiveLink,
    currentLanguage,
    setCurrentLanguage,
}) {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [currentBg, setCurrentBg] = useState(0);

    const style = {
        background: `url(${bgImg[currentBg]}) no-repeat fixed center`,
        backgroundSize: 'cover',
        position: 'relative',
    };

    const imgVars = {
        initial: {
            scale: 1,
        },
        animate: {
            scale: 1.25,
            transition: {
                duration: 10,
            },
        },
    };

    function handleVisibility() {
        setIsVisible(pre => !pre);
    }

    useEffect(() => {
        let set = setInterval(() => {
            if (currentBg < 2) {
                setCurrentBg(pre => pre + 1);
            } else {
                setCurrentBg(0);
            }
        }, 10000);

        return () => {
            clearInterval(set);
        };
    }, [currentBg]);

    return (
        <header className="home-section" id="home">
            <AnimatePresence>
                {currentBg === 0 && (
                    <motion.div
                        className="bg-img"
                        style={style}
                        variants={imgVars}
                        initial="initial"
                        animate="animate"
                    ></motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {currentBg === 1 && (
                    <motion.div
                        className="bg-img"
                        style={style}
                        variants={imgVars}
                        initial="initial"
                        animate="animate"
                    ></motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {currentBg === 2 && (
                    <motion.div
                        className="bg-img"
                        style={style}
                        variants={imgVars}
                        initial="initial"
                        animate="animate"
                    ></motion.div>
                )}
            </AnimatePresence>
            <div className="bg-back"></div>
            <div className="container">
                <AnimatePresence>
                    {isVisible && (
                        <MenuBar
                            handleVisibility={handleVisibility}
                            isVisible={isVisible}
                            activeLink={activeLink}
                            handleActiveLink={handleActiveLink}
                            currentLanguage={currentLanguage}
                            setCurrentLanguage={setCurrentLanguage}
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
                            <PagesLinks
                                parentClassName="links-nav"
                                handleVisibility={handleVisibility}
                                isVisible={isVisible}
                                activeLink={activeLink}
                                handleActiveLink={handleActiveLink}
                                currentLanguage={currentLanguage}
                                setCurrentLanguage={setCurrentLanguage}
                            />
                        </div>
                    </div>
                </nav>
                <section>
                    <div className="row">
                        <div className="headings col-12">
                            <h1>
                                {t('home_h1_1')}{' '}
                                <span>{t('home_h1_span')}</span>
                                {t('home_h1_2')}
                            </h1>
                            <h4>{t('home_h4')}</h4>
                        </div>
                        <div className="btns">
                            <Button
                                isLink={true}
                                pageLink="booking"
                                onClick={() =>
                                    handleActiveLink(t('booknow_link'))
                                }
                            >
                                {t('home_left_btn')}
                            </Button>
                            <Button
                                isLink={true}
                                pageLink="cars"
                                onClick={() => handleActiveLink(t('cars_link'))}
                            >
                                {t('home_right_btn')}
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    );
}

export default Home;
