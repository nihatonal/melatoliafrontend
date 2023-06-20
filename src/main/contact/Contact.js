import React, { useState, useEffect } from 'react';

import line from '../../assets/images/line.png';
import contact_image from '../../assets/images/faq.png'
import Accordion from '../../shared/UI/Accordion';
import ContactForm from './ContactForm';
import './Contact.css';
function Contact(props) {

    const [selectedItem, setSelectedItem] = useState()

    const handleClick = id => {
        if (selectedItem === id) {
            return setSelectedItem();
        }
        setSelectedItem(id)
    }

    return (
        <section className="contact_container p-30" id='contact'>
            <div className="section_wrapper contact_wrapper">
                <div className="section_header">
                    <h3 className="section_title">
                        Контакты
                    </h3>
                    <img className='section_line' src={line} alt='line' />
                </div>
                <img className='contact_image' src={contact_image} alt='contact_image' />

                <ul className="contact_accordion_wrapper">
                    <Accordion
                        title="Адрес"
                        id='contact_address'
                        handleToggle={(e) => handleClick(e.target.parentNode.id)}
                        active={'contact_address' === selectedItem}
                    >
                        <p>MELATEX LLC <br></br> 30 N Gould St Ste R Sheridan, WY 82801, US</p>
                    </Accordion>
                    <Accordion
                        title="Телефон"
                        id='contact_phone'
                        handleToggle={(e) => handleClick(e.target.parentNode.id)}
                        active={'contact_phone' === selectedItem}
                    >
                        <p>+7 909 931 54 56</p>
                    </Accordion>
                    <Accordion
                        title="Электронные Почты"
                        id='contact_email'
                        handleToggle={(e) => handleClick(e.target.parentNode.id)}
                        active={'contact_email' === selectedItem}
                    >
                        <a href="mailto:sales@melatoliasoftlinen.com">sales@melatoliasoftlinen.com</a>
                        <a href="mailto:info@melatoliasoftlinen.com">info@melatoliasoftlinen.com</a>

                    </Accordion>
                </ul>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;