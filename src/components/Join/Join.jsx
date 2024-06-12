import React, { useRef, useState } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();
    const [emailError, setEmailError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleJoin = (e) => {
        e.preventDefault();
        setSuccessMessage('');
        const email = form.current.user_email.value;

        if (!email) {
            setEmailError('Enter email below');
            return;
        } else if (!validateEmail(email)) {
            setEmailError('Enter a valid email address');
            return;
        }

        setEmailError('');
        setIsSubmitting(true);

        emailjs.sendForm(
            'service_8napd0a',
            'template_p6wnclb',
            form.current,
            'vpfBOy_tag37yg77E'
        )
        .then((result) => {
            console.log('done');
            setSuccessMessage('Email sent successfully!');
            setIsSubmitting(false);
            form.current.reset();
        }, (error) => {
            console.log(error);
            setEmailError('Failed to send email, please try again.');
            setIsSubmitting(false);
        });
    };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div><span className="stroke-text">Ready to</span><span>Level up</span></div>
                <div><span>your body</span><span className="stroke-text">with us?</span></div>
            </div>
            <div className="right-j">
                <form className="email-container" ref={form} onSubmit={handleJoin}>
                    <input type="email" name="user_email" placeholder="Enter your Email Address here..." />
                    {emailError && <span className="error-message">{emailError}</span>}
                    {successMessage && <span className="success-message">{successMessage}</span>}
                    <button type="submit" className={`btn btn-j ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Join now'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Join;
