import { useState } from 'react';
import car from '../../../public/car1.png';
import '../../styles/booknow.css';

function BookNow() {
    const [fullName, setFullName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [cars, setCars] = useState('');

    return (
        <section className="book-section" id="booking">
            <div className="container">
                <div className="row">
                    <h2>
                        Book <span>Now</span>
                    </h2>
                    <div className="img-holder col-12 col-lg-6">
                        <img src={car} alt="A car" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <form className="form">
                            <h3>Choose your next car!</h3>
                            <div className="inputBox">
                                <input
                                    className="inputText"
                                    type="text"
                                    name="user_name"
                                    id="contact-name"
                                    placeholder="Full name..."
                                    value={fullName}
                                    onChange={e => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="inputBox">
                                <input
                                    className="inputText"
                                    type="date"
                                    name="user-start-date"
                                    id="contact-email"
                                    placeholder="Start date..."
                                    value={startDate}
                                    onChange={e => setStartDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="inputBox">
                                <input
                                    className="inputText"
                                    type="date"
                                    name="user-end-date"
                                    id="contact-email"
                                    placeholder="End date..."
                                    value={endDate}
                                    onChange={e => setEndDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="inputBox">
                                <select value={cars} onChange={(e)=>setCars(e.target.value)}>
                                    <option value="1">car 1</option>
                                    <option value="2">car 2</option>
                                    <option value="3">car 3</option>
                                </select>
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
