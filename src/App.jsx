import Home from './components/sections/Home';
import Aboutus from './components/sections/Aboutus';
import BookNow from './components/sections/BookNow';
import Contact from './components/sections/Contact';
import OurCars from './components/sections/OurCars';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();
    const [activeLink, setActiveLink] = useState(t('home_link'));
    const [currentLanguage, setCurrentLanguage] = useState('en');

    function handleActiveLink(link) {
        setActiveLink(link);
    }

    return (
        <>
            <Home
                activeLink={activeLink}
                handleActiveLink={handleActiveLink}
                currentLanguage={currentLanguage}
                setCurrentLanguage={setCurrentLanguage}
            />
            <main>
                <Aboutus />
                <OurCars />
                <BookNow />
                <Contact />
            </main>
        </>
    );
}
export default App;
