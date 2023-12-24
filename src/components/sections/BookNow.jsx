import car from '../../../public/car1.png';
import '../../styles/booknow.css';

function BookNow() {
    return (
        <section className="book-section" id="booking">
            <div className="container">
                <div className="row">
                    <h2>
                        Book <span>Now</span>
                    </h2>
                    <div className="img-holder col-12 col-md-6">
                        <img
                            src={car}
                            alt="A car"
                            className='img-fluid'
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <form className="form">
                            <h3>Select A Car!</h3>
                            <div className="inputBox">
                                <input
                                    className="inputText"
                                    type="text"
                                    name="user_name"
                                    id="contact-name"
                                    required
                                />
                                <span>USERNAME</span>
                            </div>
                            <div className="inputBox">
                                <input
                                    className="inputText"
                                    type="email"
                                    name="user_email"
                                    id="contact-email"
                                    required
                                />
                                <span>EMAIL</span>
                            </div>
                            <div className="inputBox">
                                <textarea
                                    className="inputText msgArea"
                                    name="user_message"
                                    id="contact-message"
                                    required
                                />
                                <span>MESSAGE</span>
                            </div>
                            <input
                                type="submit"
                                value="SUBMIT"
                                className="submitBox"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookNow;
