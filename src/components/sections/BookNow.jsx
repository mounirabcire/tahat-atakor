import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import car1 from '../../assets/car1.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import car4 from '../../assets/car4.png';
import '../../styles/booknow.css';
import { useTranslation } from 'react-i18next';

function BookNow() {
    const { t } = useTranslation();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [cars, setCars] = useState('Mercedes Benz');
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const form = useRef(null);

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
                    setSuccessMessage(true);
                    setFullName('');
                    setEmail('');
                    setStartDate('');
                    setEndDate('');
                },
                err => setErrorMessage(true)
            );
    }

    return (
        <section className="book-section" id="booking">
            <div
                className={`message-container ${
                    successMessage ? '' : 'close-message'
                }`}
            >
                <div className="message alert alert-info">
                    Your message has been sent successfully!
                    <span onClick={() => setSuccessMessage(false)}>
                        <i className="ri-close-line"></i>
                    </span>
                </div>
            </div>
            <div
                className={`message-container ${
                    errorMessage ? '' : 'close-message'
                }`}
            >
                <div className="message alert alert-danger">
                    There was an error, try again later!
                    <span onClick={() => setErrorMessage(false)}>
                        <i className="ri-close-line"></i>
                    </span>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h2>
                        {t('booknow_h1')}
                        <span>{t('booknow_h1_span')}</span>
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
                            <h3>{t('booknow_form_h3')}</h3>
                            <div className="inputBox">
                                <input
                                    className="inputText"
                                    type="text"
                                    name="user_name"
                                    id="contact-name"
                                    placeholder={t('booknow_form_name')}
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
                                    placeholder={t('booknow_form_email')}
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
                                    placeholderText={t('booknow_form_start_date')}
                                    name="start_date"
                                    required
                                />
                            </div>
                            <div className="inputBox">
                                <DatePicker
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    dateFormat="dd-MM-yyyy"
                                    placeholderText={t('booknow_form_end_date')}
                                    name="end_date"
                                    required
                                />
                            </div>
                            <div className="inputBox">
                                <select
                                    value={cars}
                                    onChange={e => setCars(e.target.value)}
                                    name="user_car"
                                >
                                    <option value="Mercedes Benz">
                                        Mercedes-Benz
                                    </option>
                                    <option value="Mercedes ML250">
                                        Mercedes ML250
                                    </option>
                                    <option value="KIA">KIA</option>
                                    <option value="VW Golf 4">VW Golf 4</option>
                                </select>
                            </div>
                            <input
                                type="submit"
                                value={t('booknow_form_submit')}
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
