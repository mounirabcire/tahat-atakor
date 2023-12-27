import '../../styles/aboutus.css';
import arrow from '../../../public/arrow-right.svg';
import img1 from '../../../public/cars.jpg';
import img2 from '../../../public/customer-service.jpg';
import img3 from '../../../public/comfor-car.jpg';
import CardItem from '../CardItem';

const cardInfo = [
    {
        title: 'Versatile Fleet Selection',
        body: 'Discover the perfect ride for anyoccasion from our diverse andwell-maintained fleet, ranging fromfuel-efficient compacts to spacious SUVsand luxurious sedans.',
        imgSrc: img1,
    },
    {
        title: 'Customer-Focused Service',
        body: ' Experience hassle-free rentals with ourdedicated team committed to transparentpricing, straightforward policies, andpersonalized assistance, ensuring yoursatisfaction from inquiry to vehiclereturn.',
        imgSrc: img2,
    },
    {
        title: 'Modern Comfort and Innovation',
        body: ' Enjoy the future of travel with ourvehicles equipped with cutting-edgein-car technologies, providing aseamless blend of comfort and innovationfor a memorable and enjoyable journey.',
        imgSrc: img3,
    },
];

function Aboutus() {
    return (
        <section className="aboutus-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 texts">
                        <h2>
                            <span>Who</span> Are we
                        </h2>
                        <p>
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
                                <img src={arrow} alt="A right arrow" />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <h2>
                        <span>Why</span> us
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
