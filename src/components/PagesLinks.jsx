import { useState } from 'react';

function PagesLinks({ onClick = null, parentClassName }) {
    const [language, setLanguage] = useState('');

    return (
        <div className={`links ${parentClassName}`}>
            <ul>
                <li>
                    <a href="#home" className="active-link" onClick={onClick}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={onClick}>
                        About us
                    </a>
                </li>
                <li>
                    <a href="#cars" onClick={onClick}>
                        Cars
                    </a>
                </li>
                <li>
                    <a href="#booking" onClick={onClick}>
                        Book now
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={onClick}>
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
    );
}

export default PagesLinks;
