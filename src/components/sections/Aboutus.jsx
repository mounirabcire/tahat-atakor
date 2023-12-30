import '../../styles/aboutus.css';
import CardItem from '../CardItem';

import cars from '../../assets/cars.jpg';
import customers from '../../assets/customer-service.jpg';
import comforCar from '../../assets/comfor-car.jpg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useEffect } from 'react';

const cardInfo = [
    {
        title: 'Versatile Fleet Selection',
        body: 'Discover the perfect ride for anyoccasion from our diverse andwell-maintained fleet, ranging fromfuel-efficient compacts to spacious SUVsand luxurious sedans.',
        imgSrc: cars,
    },
    {
        title: 'Customer-Focused Service',
        body: ' Experience hassle-free rentals with ourdedicated team committed to transparentpricing, straightforward policies, andpersonalized assistance, ensuring yoursatisfaction from inquiry to vehiclereturn.',
        imgSrc: customers,
    },
    {
        title: 'Modern Comfort and Innovation',
        body: ' Enjoy the future of travel with ourvehicles equipped with cutting-edgein-car technologies, providing aseamless blend of comfort and innovationfor a memorable and enjoyable journey.',
        imgSrc: comforCar,
    },
];

function Aboutus() {
    const h2Box = useRef(null);
    const isInView = useInView(h2Box, { once: true, amount: 'all' });

    const pBox = useRef(null);
    const isInViewP = useInView(pBox, { once: true, amount: .7 });

    // useEffect(() => {
    //     console.log(`is in view ---> ${isInView}`);
    // }, [isInView]);

    return (
        <section className="aboutus-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 texts">
                        <motion.h2
                            ref={h2Box}
                            initial={{ color: 'transparent' }}
                            animate={{ color: isInView ? 'black' : '' }}
                            transition={{ delay: 1 }}
                        >
                            <span>Who</span> Are we
                            <motion.span
                                initial={{ x: '0' }}
                                animate={{ x: isInView ? '100vw' : '' }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.4,
                                }}
                                className="box"
                            ></motion.span>
                        </motion.h2>
                        <motion.p
                            ref={pBox}
                            initial={{ color: 'transparent' }}
                            animate={{ color: isInViewP ? 'black' : '' }}
                            transition={{ delay: 1 }}
                        >
                            Welcome to <span>Tahat Atakor</span> Your Trusted
                            Partner in Adventure! At <span>Tahat Atakor</span>{' '}
                            we believe in the power of exploration and the
                            freedom that comes with the open road. Established
                            in 2023, we set out on a mission to redefine the way
                            you experience travel. What started as a passion for
                            exceptional journeys has grown into a premier
                            destination for top-notch rental car services.
                            <br /> we aim to empower your travels, enabling you
                            to explore new horizons with confidence and style.
                            We are more than just a rental car service we're
                            your partner in creating lasting memories and
                            facilitating the adventures that shape your story.
                            <br />
                            <span className="explore-link">
                                <a href="#cars">Explore our cars</a>
                                <i className="ri-arrow-right-line"></i>
                            </span>
                            <motion.span
                                initial={{ x: '0' }}
                                animate={{ x: isInViewP ? '100vw' : '' }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.4,
                                }}
                                className="box"
                            ></motion.span>
                        </motion.p>
                    </div>
                </div>
                <div className="row">
                    <h2>
                        <span>Why</span> us
                    </h2>
                    {cardInfo.map(currObj => (
                        <CardItem cardContent={currObj} key={currObj.title} />
                    ))}
                    {/* {cardInfo.map(card => (
                        <div className="col-12 col-lg-4">
                            <div className="card">
                                <img src={card.imgSrc} alt="A background" />
                                <div className="bg-back">
                                    <div className="card-body">
                                        <h3 className="card-title">{card.title}</h3>
                                        <p className="card-text">{card.body}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
        </section>
    );
}

export default Aboutus;
