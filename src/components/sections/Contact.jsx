import '../../styles/contact.css';
import logo from '../../../public/logo-white.svg';

function Contact() {
    return (
        <footer className="contact-section" id="contact">
            <div className="container">
                <h2>
                    <span>Contact</span> us
                </h2>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div>
                            <ul>
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#about">About us</a>
                                </li>
                                <li>
                                    <a href="#cars">Cars</a>
                                </li>
                                <li>
                                    <a href="#booking">Book Now</a>
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
                            <p>0551928807</p>
                            <p>
                                10, Rue El chahid chakeur chikh, logement 592
                                CNL, Oran, Algerie
                            </p>
                            <a href="#location">See our loaction</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <h4>Social Media</h4>
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
