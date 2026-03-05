import React, { useState, useEffect } from 'react';
import './LeadPopup.css';

const LeadPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasClosed, setHasClosed] = useState(false);

    useEffect(() => {
        // Only show the popup if the user hasn't closed it in this session
        if (!hasClosed) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000); // 3 seconds delay

            return () => clearTimeout(timer);
        }
    }, [hasClosed]);

    const handleClose = () => {
        setIsVisible(false);
        setHasClosed(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const currentLevel = formData.get('currentLevel');
        const targetLevel = formData.get('targetLevel');
        const goal = formData.get('learningGoal');

        const message = `Hi Pro2Deutsch,%0A%0AI'd like to book a free demo class.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Current Level:* ${currentLevel}%0A*Target Level:* ${targetLevel}%0A*Learning Goal:* ${goal}`;

        // 917892793468 is the number configured in the Footer
        const whatsappNumber = "917892793468";
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(whatsappLink, '_blank');

        handleClose();
    };

    if (!isVisible) return null;

    return (
        <div className="lead-popup-overlay">
            <div className="lead-popup-content">
                <button className="close-btn" onClick={handleClose} aria-label="Close modal">
                    &times;
                </button>

                <div className="popup-header">
                    <h2>Start Your German Journey!</h2>
                    <p>Book a free demo class today and get your personalized roadmap.</p>
                </div>

                <form onSubmit={handleSubmit} className="popup-form">
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Full Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" name="phone" placeholder="Phone Number" required />
                    </div>

                    <div className="form-row">
                        <div className="form-group half">
                            <select name="currentLevel" required defaultValue="">
                                <option value="" disabled>Current German Level</option>
                                <option value="Absolute Beginner">Absolute Beginner</option>
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="B1">B1</option>
                                <option value="B2">B2</option>
                            </select>
                        </div>

                        <div className="form-group half">
                            <select name="targetLevel" required defaultValue="">
                                <option value="" disabled>Target Level</option>
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="B1">B1</option>
                                <option value="B2">B2</option>
                                <option value="General Fluency">General Fluency</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <select name="learningGoal" required defaultValue="">
                            <option value="" disabled>Learning Goal</option>
                            <option value="Study in Germany">Study in Germany</option>
                            <option value="Work Visa / Career">Work Visa / Career</option>
                            <option value="Goethe / TELC Exam">Goethe / TELC Exam</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                        Book My Free Demo
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LeadPopup;
