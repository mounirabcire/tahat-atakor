import '../../styles/aboutus.css';
import CardItem from '../CardItem';

import cars from '../../assets/cars.jpg';
import customers from '../../assets/customer-service.jpg';
import comforCar from '../../assets/comfor-car.jpg';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function Aboutus({handleActiveLink}) {
    const { t } = useTranslation();
    // const aboutus = useRef();
    // const isInview = useInView(aboutus);

    // useEffect(() => {
    //     if (isInview) handleActiveLink(t('aboutus_link'));
    // }, [isInview, t, handleActiveLink]);

    const cardInfo = [
        {
            title: t('whyus_card1_h3'),
            body: t('whyus_card1_p'),
            imgSrc: cars,
        },
        {
            title: t('whyus_card2_h3'),
            body: t('whyus_card2_p'),
            imgSrc: customers,
        },
        {
            title: t('whyus_card3_h3'),
            body: t('whyus_card3_p'),
            imgSrc: comforCar,
        },
    ];

    return (
        <section className="aboutus-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 texts">
                        <h2>
                            <span>{t('about_h1_span')}</span> {t('about_h1')}
                        </h2>
                        <p>
                            {t('about_p_1')}
                            <br />
                            {t('about_p_2')}
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
