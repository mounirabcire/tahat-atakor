import { useState } from 'react';
import car1 from '../../assets/car1.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import car4 from '../../assets/car4.png';

import '../../styles/ourcars.css';
import { useTranslation } from 'react-i18next';

const cars = [car1, car2, car3, car4, car1, car2, car3, car4];

function OurCars() {
    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const { t } = useTranslation();

    return (
        <section className="cars-section" id="cars">
            <h2>
                {t('cars_h1')}
                <span>{t('cars_h1_span')}</span>
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
