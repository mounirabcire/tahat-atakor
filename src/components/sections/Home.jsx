// when I open the menu bar the transition effect doesnt fucntion becouse the compoent unmounts

import { useState } from 'react';
import logo from '../../../public/logo-white.svg';
import MenuBar from '../MenuBar';
import '../../styles/home.css';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <header className="home-section">
                <div className="bg-img">
                    <div className="bg-back">
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
                                            Book Your Adventure: Find the
                                            Perfect <span> Rental Car</span> for
                                            Your Next Trip
                                        </h1>
                                        <h4>
                                            Hit the Road in Style with Our Fleet
                                            of High-Performance Rental Cars
                                        </h4>
                                    </div>
                                    <div className="btns col-12">
                                        <button className="btn">
                                            Book now
                                        </button>
                                        <button className="btn">
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
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Home;
