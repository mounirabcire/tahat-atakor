import { useState } from 'react';

function PagesLinks({ onClick = null, parentClassName }) {
    const [activeLink, setActiveLink] = useState('Home');
    const [language, setLanguage] = useState('En');

    function handleActiveLink(link) {
        setActiveLink(link);
    }

    return (
        <div className={`links ${parentClassName}`}>
            <ul>
                <li>
                    <a
                        href="#home"
                        className={`${
                            activeLink === 'Home' ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className={`${
                            activeLink === 'About us' ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                    >
                        About us
                    </a>
                </li>
                <li>
                    <a
                        href="#cars"
                        className={`${
                            activeLink === 'Cars' ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                    >
                        Cars
                    </a>
                </li>
                <li>
                    <a
                        href="#booking"
                        className={`${
                            activeLink === 'Book now' ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                    >
                        Book now
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className={`${
                            activeLink === 'Contact' ? 'active-link' : ''
                        }`}
                        onClick={e => handleActiveLink(e.target.innerHTML)}
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <select
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                    >
                        <option value="En">English</option>
                        <option value="Ar">Arabic</option>
                        <option value="Fr">French</option>
                    </select>
                </li>
            </ul>
        </div>
    );
}

export default PagesLinks;
