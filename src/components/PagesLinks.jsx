import { useEffect, useState } from 'react';

function PagesLinks({ onClick = null, parentClassName }) {
    const [language, setLanguage] = useState('');

    useEffect(() => {
        const aNoeads = document.querySelectorAll('.links a');
        const aEl = Array.from(aNoeads);

        aEl.forEach(currEl => {
            currEl.addEventListener('click', () => {
                for (let i = 0; i < aEl.length; i++) {
                    aEl[i].classList.remove('active-link');
                }
                currEl.classList.add('active-link');
            });
        });
        console.log(aEl);
    }, []);

    return (
        <div className={`links ${parentClassName}`}>
            <ul>
                <li>
                    <a href="#home" className="active-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about">About us</a>
                </li>
                <li>
                    <a href="#cars">Cars</a>
                </li>
                <li>
                    <a href="#booking">Book now</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
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
