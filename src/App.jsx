import Home from './components/sections/Home';
import Aboutus from './components/sections/Aboutus';
import BookNow from './components/sections/BookNow';
import Contact from './components/sections/Contact';

function App() {
    return (
        <>
            <Home />
            <main>
                <Aboutus />
                <BookNow />
                <Contact />
            </main>
        </>
    );
}
export default App;
