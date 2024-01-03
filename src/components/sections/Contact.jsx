import '../../styles/contact.css';
import logo from '../../assets/logo-white.svg';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <footer className="contact-section" id="contact">
            <div className="container">
                <h2>
                    <span>{t('contact_h1_span')}</span>
                    {t('contact_h1')}
                </h2>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div>
                            <ul>
                                <li>
                                    <a href="#home">{t('home_link')}</a>
                                </li>
                                <li>
                                    <a href="#about">{t('aboutus_link')}</a>
                                </li>
                                <li>
                                    <a href="#cars">{t('cars_link')}</a>
                                </li>
                                <li>
                                    <a href="#booking">{t('booknow_link')}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={logo} alt="A logo" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <h4>Information</h4>
                        <div>
                            <p>0668065962</p>
                            <p>
                                10, Rue El chahid chakeur chikh, logement 592
                                CNL, Oran, Algerie
                            </p>
                            <a href="#location">See our loaction</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <h4>Social Media</h4>
                        <div>
                            <ul className="social-list">
                                <li>
                                    <a
                                        href="https://www.instagram.com/tahat.atakor31"
                                        title="Instagram"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="ri-instagram-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61553652307306"
                                        title="Facebook"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="ri-facebook-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:tahatatakor31@gamil.com"
                                        title="Mail"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="ri-mail-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://wa.me/0551928807"
                                        title="Whatsapp"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="ri-whatsapp-line"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="copyRight">
                    © 2023 logo, Inc. All rights reserved
                </p>
            </div>
        </footer>
    );
}

export default Contact;
