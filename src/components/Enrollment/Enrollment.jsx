import React, { useState, useEffect } from 'react';
import './Enrollment.css';

const Enrollment = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.animate-enroll').forEach(el => observer.observe(el));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("Saving your details...");

        const scriptURL = "https://script.google.com/macros/s/AKfycbz-2cKBB2A-2R29B6sT0wRAUBiq63c_Pb0zkBO8sh1Yo0-VgPj8ob_a1f6vnYz8br-fjA/exec";
        const formData = new FormData(e.target);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(() => {
                setStatus("Success! We will contact you shortly.");
                setLoading(false);
                e.target.reset('/');
            })
            .catch((err) => {
                console.error("Submission error:", err);
                setStatus("Something went wrong. Please try again.");
                setLoading(false);
            });

    };

    return (
        <section id="enroll-now" className="enroll-section">
            <div className="container">
                <div className="enroll-card animate-enroll">
                    <div className="enroll-content">
                        <span className="enroll-tag">Join Pro2Deutsch</span>
                        <h2 className="enroll-title">Enroll for a Free Demo</h2>
                        <p className="enroll-desc">Your details will be securely saved, and our team will reach out to you within 24 hours.</p>
                        <ul className="enroll-benefits">
                            <li>✔ Guaranteed Response</li>
                            <li>✔ Direct Teacher Consultation</li>
                            <li>✔ Custom Learning Path</li>
                        </ul>
                    </div>

                    <div className="enroll-action">
                        <form className="enroll-form" onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Full Name" required />
                            <input type="email" name="email" placeholder="Email Address" required />
                            <input type="tel" name="phone" placeholder="Phone Number" required />

                            <div className="form-flex-row" style={{ display: 'flex', gap: '15px' }}>
                                <select name="currentLevel" required style={{ flex: 1 }}>
                                    <option value="">Current German Level</option>
                                    <option value="none">Absolute Beginner</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="B1">B1</option>
                                    <option value="B2">B2</option>
                                </select>
                                <select name="targetLevel" required style={{ flex: 1 }}>
                                    <option value="">Target Level</option>
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="B1">B1</option>
                                    <option value="B2">B2</option>
                                    <option value="Fluency">General Fluency</option>
                                </select>
                            </div>

                            <select name="learningGoal" required>
                                <option value="">Learning Goal</option>
                                <option value="study">Study in Germany</option>
                                <option value="work">Work Visa / Career</option>
                                <option value="exam">Goethe / TELC Exam</option>
                                <option value="other">Other</option>
                            </select>
                            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                                {loading ? "Processing..." : "Book My Free Demo"}
                            </button>
                            {status && <p className={`submission-status ${status.includes("Error") ? "error" : ""}`}>{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enrollment;