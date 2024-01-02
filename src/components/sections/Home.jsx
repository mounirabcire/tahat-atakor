import { useState } from 'react';

import MenuBar from '../MenuBar';
import PagesLinks from '../PagesLinks';
import Button from '../Button';
import logo from '../../assets/logo-white.svg';
import bgImg from '../../assets/bg.jpg';
import '../../styles/home.css';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Home({ activeLink, handleActiveLink, currentLanguage, setCurrentLanguage }) {
    const { t } = useTranslation();
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
                                    <PagesLinks parentClassName="links-nav" />
                                </div>
                            </div>
                        </nav>
                        <section>
                            <div className="row">
                                <div className="headings col-12">
                                    <h1>
                                        {/* Book Your Adventure: Find the Perfect{' '}
                                        <span>Rental Car</span> for Your Next
                                        Trip */}
                                        {t('home_h1_1')}{' '}
                                        <span>{t('home_h1_span')}</span>
                                        {t('home_h1_2')}
                                    </h1>
                                    <h4>
                                        {/* Hit the Road in Style with Our Fleet of
                                        High-Performance Rental Cars */}
                                        {t('home_h4')}
                                    </h4>
                                </div>
                                <div className="btns">
                                    <Button isLink={true} pageLink="booking">
                                        {t('home_left_btn')}
                                    </Button>
                                    <Button isLink={true} pageLink="cars">
                                        {t('home_right_btn')}
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
