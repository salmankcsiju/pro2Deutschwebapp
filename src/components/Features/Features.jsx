import React from 'react';
import './Features.css';

import exam1 from "../../img/Exam.jpeg";
import exam2 from "../../img/Exam2.jpeg";
import exam3 from "../../img/CR.jpg";

const Features = () => {
  const features = [
    { title: "Goethe Exams", desc: "Structured preparation and mock tests for all levels", img: exam1 },
    { title: "TELC Exams", desc: "Targeted strategies to pass the TELC language certification", img: exam2 },
    { title: "ÖSD Exams", desc: "Austrian German Diploma certification support", img: exam3 }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <span className="features-tag">Exam Preparation</span>
          <h2 className="features-title">Exam Preparation with Confidence</h2>
          <p className="features-subtitle">We guide you carefully before recommending exam attempts. Our support includes:</p>
          <ul className="exam-features-list">
            <li><span>✔️</span> Mock tests</li>
            <li><span>✔️</span> Writing correction and feedback</li>
            <li><span>✔️</span> Speaking practice sessions</li>
            <li><span>✔️</span> Time management techniques</li>
            <li><span>✔️</span> Personalized readiness evaluation</li>
          </ul>
        </div>
        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-img-wrapper">
                <img src={item.img} alt={item.title} className="feature-image" />
              </div>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;