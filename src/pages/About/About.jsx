import React, { useEffect } from 'react';
import './About.css';

// Local Images
import A1CourseImg from '../../img/A1-b2-1.jpeg';
import VocabImg from '../../img/Vocab1.jpeg';
import SpeakingImg from '../../img/speaking1.jpeg';

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
          <span className="about-tag">About Pro2Deutsch</span>
          <h1>Structured Learning. Complete Training. Confident Communication.</h1>
          <p className="subtitle">At Pro2Deutsch, we believe learning German should be structured, practical, and confidence-building.</p>
        </div>
      </section>

      <section className="about-description">
        <div className="container">
          <div className="about-content">
            <h2>Why We Teach</h2>
            <p>For many students and working professionals, German is connected to important goals — studying in Germany, career growth, relocation, or professional licensing. We understand how important this journey is, and we take that responsibility seriously.</p>
            <p style={{ marginTop: "20px" }}>That is why we provide complete A1 to B2 level training with academic structure, consistent assessments, and supportive guidance — along with specialized programs that strengthen vocabulary and speaking skills.</p>
            <h3 style={{ marginTop: "30px", fontSize: "1.5rem", color: "var(--dark)" }}>We focus on complete language development.</h3>
          </div>
        </div>
      </section>

      <section className="about-offerings">
        <div className="container">

          <div className="offering-row">
            <div className="offering-content">
              <h3>Complete Level-Based German Training (A1–B2)</h3>
              <p>Our foundation is structured level training aligned with CEFR standards:</p>
              <ul className="about-list">
                <li><strong>A1</strong> – Beginner Foundation</li>
                <li><strong>A2</strong> – Everyday Communication</li>
                <li><strong>B1</strong> – Independent Language Use</li>
                <li><strong>B2</strong> – Advanced Academic & Professional Communication</li>
              </ul>
              <p style={{ marginTop: "15px" }}>Each level includes:</p>
              <ul className="about-list">
                <li>Clear grammar explanation</li>
                <li>Listening practice</li>
                <li>Writing correction with feedback</li>
                <li>Structured speaking sessions</li>
                <li>Regular assessments</li>
                <li>Exam-focused preparation</li>
              </ul>
              <p style={{ marginTop: "15px", fontStyle: "italic" }}>We ensure learners build strong fundamentals before progressing.</p>
            </div>
            <div className="offering-image-wrapper">
              <img src={A1CourseImg} alt="German Level Based Learning" className="offering-image" />
            </div>
          </div>

          <div className="offering-row reverse">
            <div className="offering-content">
              <h3>📘 One-Month Vocabulary Booster Program</h3>
              <p>In addition to our regular classes, we offer a dedicated 1-month Vocabulary Booster Program. This is a separate, intensive course designed to strengthen word power and improve expression quickly.</p>
              <p style={{ marginTop: "15px" }}>This Program Includes:</p>
              <ul className="about-list">
                <li>Topic-wise structured vocabulary</li>
                <li>Practical sentence-building exercises</li>
                <li>Daily usage training</li>
                <li>Memory and retention techniques</li>
                <li>Weekly assessments</li>
                <li>Profession-specific word training (if required)</li>
              </ul>
              <p style={{ marginTop: "15px" }}>This course is ideal for students preparing for exams, professionals needing stronger skills, or anyone wanting to expand their vocabulary systematically.</p>
            </div>
            <div className="offering-image-wrapper">
              <img src={VocabImg} alt="Vocabulary Booster" className="offering-image" />
            </div>
          </div>

          <div className="offering-row">
            <div className="offering-content">
              <h3>🗣 Dedicated Speaking Mastery Course</h3>
              <p>Many learners complete A2 or B1 but still hesitate to speak confidently. We go further by offering a separate Speaking Mastery Course alongside regular classes.</p>
              <ul className="about-list" style={{ marginTop: "15px" }}>
                <li>Guided conversation practice</li>
                <li>Real-life role plays & Presentations</li>
                <li>Pronunciation correction</li>
                <li>Interview preparation & Confidence building</li>
              </ul>
              <p style={{ marginTop: "15px", fontStyle: "italic" }}>Because fluency requires focused speaking practice in a comfortable and respectful environment.</p>
            </div>
            <div className="offering-image-wrapper">
              <img src={SpeakingImg} alt="Speaking Mastery" className="offering-image" />
            </div>
          </div>

        </div>
      </section>

      <section className="leadership-section" style={{ backgroundColor: "var(--light)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 className="section-title">🌟 Why We Are Different</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <h3>1️⃣ Complete Language Development</h3>
              <p>We train grammar, listening, writing, speaking, vocabulary, and exam strategy — not just textbook completion.</p>
            </div>
            <div className="leader-card">
              <h3>2️⃣ Specialized Programs</h3>
              <p>Alongside regular classes, we offer Dedicated Speaking and Vocabulary courses for structured fluency.</p>
            </div>
            <div className="leader-card">
              <h3>3️⃣ Structured Roadmap</h3>
              <p>We guide students based on their specific goal — study, work, licensing, or Ausbildung.</p>
            </div>
            <div className="leader-card">
              <h3>4️⃣ Small Batch Sizes</h3>
              <p>Personal attention and regular, constructive feedback are part of our core system.</p>
            </div>
            <div className="leader-card">
              <h3>5️⃣ Honest Exam Guidance</h3>
              <p>We recommend exams only when students are fully and confidently ready.</p>
            </div>
            <div className="leader-card">
              <h3>6️⃣ Supportive Environment</h3>
              <p>We correct with patience, encourage participation, and maintain academic discipline.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <div className="container">
          <h2 className="section-title" style={{ color: "var(--white)" }}>Our Leadership</h2>
          <div className="leadership-grid">

            <div className="leader-card">
              <div className="leader-icon">👩‍⚕️</div>
              <h3>Dr. Saranya</h3>
              <span className="role">Founder & CEO</span>
              <p>Visionary leader focusing on high-quality education and long-term proficiency.</p>
            </div>

            <div className="leader-card">
              <div className="leader-icon">👨‍💼</div>
              <h3>Muhammad Younus</h3>
              <span className="role">Manager</span>
              <p>Central to maintaining organizational efficiency and high quality standards.</p>
            </div>

            <div className="leader-card">
              <div className="leader-icon">👩‍💼</div>
              <h3>Naveena</h3>
              <span className="role">Program Coordinator</span>
              <p>Ensures structured scheduling and continuous support for every learner.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="about-description" style={{ paddingBottom: "40px" }}>
        <div className="container">
          <div className="about-content">
            <h2>Our Teaching Philosophy</h2>
            <ul className="about-list" style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left", fontSize: "1.1rem" }}>
              <li>Structure builds clarity.</li>
              <li>Vocabulary builds expression.</li>
              <li>Speaking builds confidence.</li>
              <li>Practice builds fluency.</li>
              <li>Feedback builds improvement.</li>
            </ul>
            <p style={{ marginTop: "20px", fontWeight: "600" }}>German becomes manageable when taught step by step in a supportive environment.</p>
          </div>
        </div>
      </section>

      <section className="about-description" style={{ paddingTop: "40px", backgroundColor: "var(--surface)" }}>
        <div className="container">
          <div className="about-content">
            <h2>Our Commitment</h2>
            <p>When you join Pro2Deutsch, you receive clear timelines, defined learning outcomes, continuous tracking, and respectful, honest guidance.</p>
            <p style={{ marginTop: "15px" }}><strong>Pro2Deutsch is not just about finishing levels. It is about preparing you for real academic and professional opportunities.</strong></p>
            <p style={{ marginTop: "20px", fontStyle: "italic", color: "var(--primary)" }}>We would be happy to guide you on your German journey.</p>
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
                style={{ border: 0, borderRadius: '4px' }}
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