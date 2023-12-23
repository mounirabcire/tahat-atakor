import { useState } from 'react';
import close from '../../public/close.svg';

function MenuBar({ setIsVisible, isVisible }) {
    const [language, setLanguage] = useState('En');

    return (
        <div
            className={`menu-bar ${
                isVisible ? 'open-menu-bar' : 'close-menu-bar'
            }`}
        >
            <div className="close-icon">
                <img
                    src={close}
                    alt="A close icon"
                    onClick={() => setIsVisible(pre => !pre)}
                />
            </div>
            <div className="links">
                <ul>
                    <li>
                        <a
                            href="#home"
                            className="active-link"
                            onClick={() => setIsVisible(pre => !pre)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={() => setIsVisible(pre => !pre)}
                        >
                            About us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#cars"
                            onClick={() => setIsVisible(pre => !pre)}
                        >
                            Cars
                        </a>
                    </li>
                    <li>
                        <a
                            href="#book"
                            onClick={() => setIsVisible(pre => !pre)}
                        >
                            Book now
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => setIsVisible(pre => !pre)}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <select
                            value={language}
                            onChange={e => setLanguage(e.target.value)}
                        >
                            <option value="En">En</option>
                            <option value="Ar">Ar</option>
                            <option value="Fr">Fr</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuBar;
