import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-anim');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.about-content, .leader-card, .about-header');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <main className="about-page">
      <section className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p className="subtitle">Your Gateway to Professional German Language Proficiency</p>
        </div>
      </section>

      <section className="about-description">
        <div className="container">
          <div className="about-content">
            <h2>Pro2Deutsch</h2>
            <p>Pro2Deutsch is an online German language learning platform created for working professionals and students who want to learn German in a structured, practical, and flexible way.</p>
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <div className="container">
          <h2 className="section-title">Our Leadership</h2>
          <div className="leadership-grid">
            
            <div className="leader-card">
              <div className="leader-icon">👩‍⚕️</div>
              <h3>Dr. Saranya</h3>
              <span className="role">Founder & CEO</span>
              <p>Visionary leader focusing on high-quality education and long-term proficiency.</p>
              <div className="leader-socials">
                <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="#" target="_blank" rel="noreferrer">Instagram</a>
              </div>
            </div>

            <div className="leader-card">
              <div className="leader-icon">👨‍💼</div>
              <h3>Muhammad Younus</h3>
              <span className="role">Manager</span>
              <p>Central to maintaining organizational efficiency and high quality standards.</p>
              <div className="leader-socials">
                <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <div className="leader-card">
              <div className="leader-icon">👩‍💼</div>
              <h3>Naveena</h3>
              <span className="role">Program Coordinator</span>
              <p>Ensures structured scheduling and continuous support for every learner.</p>
              <div className="leader-socials">
                <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="#" target="_blank" rel="noreferrer">Email</a>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="contact-section">
    <div className="container">
        <h2 className="section-title">Visit Us</h2>
        <div className="contact-grid">
            <div className="contact-details">
                <div className="info-box">
                    <h3>Pro2Deutsch Academy</h3>
                    <p>High-Quality German Language Coaching</p>
                    <p>Kerala, India (Online Worldwide)</p>
                </div>
                <div className="info-box">
                    <a href="https://wa.me/917892793468" className="contact-link">📞 +91 7892793468</a>
                    <a href="mailto:pro2deutsch@gmail.com" className="contact-link">📧 pro2deutsch@gmail.com</a>
                </div>
            </div>

            <div className="map-wrapper">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.41112836262!2d75.72023594834882!3d11.25881079313898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x321557147a375a2!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="350" 
                    style={{ border: 0, borderRadius: '15px' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    </div>
</section>
    </main>
  );
};

export default About;