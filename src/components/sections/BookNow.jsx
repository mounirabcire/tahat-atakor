import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import car1 from '../../assets/car1.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import car4 from '../../assets/car4.png';
import '../../styles/booknow.css';

function BookNow() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [cars, setCars] = useState('Mercedes Benz');
    const form = useRef(null);

    const templateParams = {
        user_name: fullName,
        user_email: email,
        user_car: cars,
        start_date: startDate,
        end_date: endDate,
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_8gnogcm',
                'template_nt5ayqk',
                form.current,
                'CXO_7BtFH0n7tAUzR'
            )
            .then(
                result => {
                    alert('Your message has been sent seccessfuly!');
                },
                err => alert('There was an error, try again later!')
            );
    }

    return (
        <section className="book-section" id="booking">
            <div className="container">
                <div className="row">
                    <h2>
                        Book <span>Now</span>
                    </h2>
                    <div className="img-holder col-12 col-lg-6">
                        {cars === 'Mercedes Benz' && (
                            <img src={car1} alt="A car" className="" />
                        )}
                        {cars === 'Mercedes ML250' && (
                            <img src={car2} alt="A car" className="" />
                        )}
                        {cars === 'KIA' && (
                            <img src={car3} alt="A car" className="" />
                        )}
                        {cars === 'VW Golf 4' && (
                            <img src={car4} alt="A car" className="" />
                        )}
                    </div>
                    <div className="col-12 col-lg-6">
                        <form className="form" ref={form} onSubmit={sendEmail}>
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
                                    type="email"
                                    name="user_email"
                                    id="contact-name"
                                    placeholder="Email..."
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="inputBox">
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    dateFormat="dd-MM-yyyy"
                                    placeholderText="Select the start date..."
                                    name="start_date"
                                />
                            </div>
                            <div className="inputBox">
                                <DatePicker
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    dateFormat="dd-MM-yyyy"
                                    placeholderText="Select the end date..."
                                    name="end_date"
                                />
                            </div>
                            <div className="inputBox">
                                <select
                                    value={cars}
                                    onChange={e => setCars(e.target.value)}
                                    name="user_car"
                                >
                                    <option value="Mercedes Benz">Mercedes-Benz</option>
                                    <option value="Mercedes ML250">Mercedes ML250</option>
                                    <option value="KIA">KIA</option>
                                    <option value="VW Golf 4">VW Golf 4</option>
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
