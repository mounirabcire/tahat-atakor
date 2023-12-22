import { useState } from 'react';
import logo from '../../../public/logo-white.svg';
import video from '../../../public/pexels-rodnae-productions-7895948 (Original).mp4';
import MenuBar from '../MenuBar';

function Home() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <header className="home-section">
                <div className="container">
                    <nav>
                        <div className="row">
                            <div className="logo col-6">
                                <img src={logo} alt="A logo" />
                            </div>
                            <div className="col-6">
                                <div
                                    className="menu"
                                    onClick={() => {
                                        setIsVisible(pre => !pre);
                                    }}
                                >
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <section>
                        <div className="row">
                            <div className="headings col-12">
                                <h1>
                                    Book Your Adventure: Find the Perfect Rental
                                    Car for Your Next Trip
                                </h1>
                                <h4>
                                    Hit the Road in Style with Our Fleet of
                                    High-Performance Rental Cars
                                </h4>
                            </div>
                            <div className="btns col-12">
                                <button className="btn btn-primary">
                                    Book now
                                </button>
                                <button className="btn btn-secondary">
                                    See all cars
                                </button>
                            </div>
                        </div>
                    </section>
                    {isVisible && (
                        <MenuBar
                            setIsVisible={setIsVisible}
                            isVisible={isVisible}
                        />
                    )}
                    <video autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="bg-back"></div>
                </div>
            </header>
        </>
    );
}

export default Home;
