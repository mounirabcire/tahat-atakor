import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import car1 from '../../../public/car1.png';
import car2 from '../../../public/car2.png';
import car3 from '../../../public/car3.png';
import car4 from '../../../public/car4.png';
import '../../styles/booknow.css';

function BookNow() {
    const [fullName, setFullName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [cars, setCars] = useState('car1');

    return (
        <section className="book-section" id="booking">
            <div className="container">
                <div className="row">
                    <h2>
                        Book <span>Now</span>
                    </h2>
                    <div className="img-holder col-12 col-lg-6">
                        {cars === 'car1' && (
                            <img src={car1} alt="A car" className="" />
                        )}
                        {cars === 'car2' && (
                            <img src={car2} alt="A car" className="" />
                        )}
                        {cars === 'car3' && (
                            <img src={car3} alt="A car" className="" />
                        )}
                        {cars === 'car4' && (
                            <img src={car4} alt="A car" className="" />
                        )}
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
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    dateFormat="dd-MM-yyyy"
                                    placeholderText="Select the start date..."
                                />
                            </div>
                            <div className="inputBox">
                                <DatePicker
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    dateFormat="dd-MM-yyyy"
                                    placeholderText="Select the end date..."
                                />
                            </div>
                            <div className="inputBox">
                                <select
                                    value={cars}
                                    onChange={e => setCars(e.target.value)}
                                >
                                    <option value="car1">Mercedes-Benz</option>
                                    <option value="car2">Mercedes ML250</option>
                                    <option value="car3">KIA</option>
                                    <option value="car4">VW Golf 4</option>
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
