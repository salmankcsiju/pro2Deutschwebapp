import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How long does it take to complete B1?",
            answer: "Typically 6–8 months depending on consistency and batch intensity."
        },
        {
            question: "Are classes live?",
            answer: "Yes, all sessions are live interactive classes. Recordings may be provided for revision."
        },
        {
            question: "Do you provide exam registration support?",
            answer: "Yes, we guide students regarding exam structure and preparation strategy."
        },
        {
            question: "Do working professionals get flexible timings?",
            answer: "Yes, we offer weekend and evening batches."
        }
    ];

    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="faq-section">
            <div className="container">
                <h2 className="section-title text-center">FAQ SECTION</h2>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
