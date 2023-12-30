import { useState } from 'react';
import car1 from '../../assets/car1.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import car4 from '../../assets/car4.png';

import '../../styles/ourcars.css';
import { motion } from 'framer-motion';

const cars = [car1, car2, car3, car4, car1, car2, car3, car4];

function OurCars() {
    const [currentCarIndex, setCurrentCarIndex] = useState(0);

    const style = {
        display: 'none',
    };

    function handleNextCar() {
        const condition = currentCarIndex === cars.length - 1;
        setCurrentCarIndex(i => (condition ? cars.length - 1 : (i = i + 1)));
    }

    function handlePreviousCar() {
        const condition = currentCarIndex === 0;
        setCurrentCarIndex(i => (condition ? 0 : (i = i - 1)));
    }

    return (
        <section className="cars-section" id="cars">
            <h2>
                Our <span>Cars</span>
            </h2>
            <div className="slider-wrapper">
                <div className="cars-holder">
                    {cars.map((car, index) => (
                        <div
                            key={index}
                            className={
                                currentCarIndex === index ? 'active-car' : ''
                            }
                        >
                            <img src={car} alt="A car" />
                        </div>
                    ))}
                </div>
                <div className="cars-btns">
                    {cars.map((car, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentCarIndex(index)}
                        >
                            <img
                                className={`${
                                    index === currentCarIndex
                                        ? 'active-car-btn'
                                        : ''
                                }`}
                                src={car}
                                alt="A car"
                            />
                        </div>
                    ))}
                </div>
                <div className="shape"></div>
            </div>
        </section>
    );
}

export default OurCars;
