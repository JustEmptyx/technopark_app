import React, { useState } from 'react';
import "../../styles/components/common/contactsForm.css"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        messanger:'',
        message: '',
        privacy: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить логику отправки данных
        console.log('Отправка данных:', formData);
    };

    return (
        <div className="contact-module">
            <div className="inner-container">
                <div className="contact-text-info">
                    <h1>Связаться с нами</h1>
                    <p>Хотите обсудить сотрудничество или остались вопросы?</p>
                    <p>Оставьте заявку, мы свяжемся с Вами и ответим</p>
                    <p>в ближайшее время.</p>
                </div>
            </div>
             <form onSubmit={handleSubmit} className="content-grid-contacts">
                <div className="form-group"></div>
                <div className="form-group">
                    <input type="text" id="name" name="name" placeholder="Ваше Имя" value={formData.name} onChange={handleChange} required />
                </div>
                
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group"></div>

                <div className="form-group"></div>
                <div className="form-group">
                    <input type="tel" id="phone" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} required />
                </div>
                
                <div className="form-group">
                    <input type="text" id="messanger" name="messanger" placeholder="Мессенджер" value={formData.messanger} onChange={handleChange} required />
                </div>
                <div className="form-group"></div>

                <div className="form-group"></div>
                <div className="form-group">
                    <textarea id="message" name="message" placeholder="Как мы можем Вам помочь?" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <div className="form-group"></div>
                <div className="form-group right-column-contact-form"></div>

                <div className="form-group lower-row-contact-form"></div>
                <div className="form-group lower-row-contact-form">
                    <label className="custom-checkbox">
                        <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} required />
                        <span className="checkbox"></span>
                        Я даю согласие на обработку персональных данных
                    </label>
                </div>
                <div className="form-group lower-row-contact-form">
                    <div className="button-container">
                        <button type="submit">Отправить заявку</button>
                    </div>
                </div>
                <div className="form-group lower-row-contact-form"></div>
            </form>
        </div>
    );
};

export default ContactForm;
