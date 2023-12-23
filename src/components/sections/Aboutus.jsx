import '../../styles/aboutus.css';
import arrow from '../../../public/arrow-right.svg';

function Aboutus() {
    return (
        <section className="aboutus-section">
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
                                Explore our cars
                                <img src={arrow} alt="A right arrow" />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <h2>
                        <span>Why</span> us
                    </h2>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="bg-back">
                                <div className="card-body">
                                    <h3 className="card-title">
                                        Versatile Fleet Selection
                                    </h3>
                                    <p className="card-text">
                                        Discover the perfect ride for any
                                        occasion from our diverse and
                                        well-maintained fleet, ranging from
                                        fuel-efficient compacts to spacious SUVs
                                        and luxurious sedans.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="bg-back">
                                <div className="card-body">
                                    <h3 className="card-title">
                                        Customer-Focused Service
                                    </h3>
                                    <p className="card-text">
                                        Experience hassle-free rentals with our
                                        dedicated team committed to transparent
                                        pricing, straightforward policies, and
                                        personalized assistance, ensuring your
                                        satisfaction from inquiry to vehicle
                                        return.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="bg-back">
                                <div className="card-body">
                                    <h3 className="card-title">
                                        Modern Comfort and Innovation
                                    </h3>
                                    <p className="card-text">
                                        Enjoy the future of travel with our
                                        vehicles equipped with cutting-edge
                                        in-car technologies, providing a
                                        seamless blend of comfort and innovation
                                        for a memorable and enjoyable journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutus;
