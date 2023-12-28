import Home from './components/sections/Home';
import Aboutus from './components/sections/Aboutus';
import BookNow from './components/sections/BookNow';
import Contact from './components/sections/Contact';
import OurCars from './components/sections/OurCars';

function App() {
    return (
        <>
            <Home />
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
