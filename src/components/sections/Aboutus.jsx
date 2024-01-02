import '../../styles/aboutus.css';
import CardItem from '../CardItem';

import cars from '../../assets/cars.jpg';
import customers from '../../assets/customer-service.jpg';
import comforCar from '../../assets/comfor-car.jpg';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    return (
        <section className="aboutus-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 texts">
                        <h2>
                            <span>{t('about_h1_span')}</span> {t('about_h1')}
                        </h2>
                        <p>
                            {/* Welcome to Tahat Atakor Your Trusted Partner in
                            Adventure! At Tahat Atakor we believe in the power
                            of exploration and the freedom that comes with the
                            open road. Established in 2023, we set out on a
                            mission to redefine the way you experience travel.
                            What started as a passion for exceptional journeys
                            has grown into a premier destination for top-notch
                            rental car services. */}
                            {t('about_p_1')}
                            <br /> 
                            {t('about_p_2')}
                            {/* we aim to empower your travels, enabling you
                            to explore new horizons with confidence and style.
                            We are more than just a rental car service we're
                            your partner in creating lasting memories and
                            facilitating the adventures that shape your story. */}
                            <br />
                            <span className="explore-link">
                                <a href="#cars">{t('about_link')}</a>
                                <i className="ri-arrow-right-line"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <h2>
                        <span>{t('about_h1_span_2')}</span> 
                        {t('about_h1_2')}
                    </h2>
                    {cardInfo.map(currObj => (
                        <CardItem cardContent={currObj} key={currObj.title} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Aboutus;
