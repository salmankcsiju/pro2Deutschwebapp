import React, { useEffect } from 'react';
import './Spotligth.css';
import { Link } from 'react-router-dom';
import teacher from '../../img/1.avif';
import university from '../../img/2.avif';
import clean from  '../../img/3.webp';
import spotligth_img from '../../img/spotlight.png';

function Spotlight({ coursesData }) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-anim');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.info-block, .course-card, .container-header, .section-title');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [coursesData]);

    if (!coursesData) return <h1>No courses available</h1>;

    return (
        <>
        <section className="spotlight-section">
            <div className="container-header">
                <h1>Learn German the Smart Way From Beginner to <br/> B2 & Beyond</h1>
                <h2>Flexible, result-driven online German language coaching designed for working professionals, students, and exam-focused learners.</h2>
                <p>Whether you are starting from zero or preparing for B2 exams, job interviews, or career opportunities in Germany, we provide structured, practical, and exam-oriented German training—completely online.</p>
                <div className="hero-btns">
                    <button className="btn btn-primary" onClick={() => window.open('https://wa.me/917892793468?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20German%20classes.', '_blank')}>Book a Free Demo</button>
                    <button className="btn btn-primary"> <Link to="/Courses"> Explore Courses </Link></button>
                </div>
            </div>
            <div className="img-container">
                <div className="img-wrapper">
                    <img src={spotligth_img} alt="Spotlight" />
                </div>
            </div>
        </section>

        <section className="german-info">
            <div className="info-row dark-bg">
                <div className="container flex-row">
                    <div className="text-side">
                        <h2 className="section-title">WHY LEARN GERMAN WITH US?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-item"><span>✔</span> Certified trainers</div>
                            <div className="benefit-item"><span>✔</span> Live online classes</div>
                            <div className="benefit-item"><span>✔</span> Flexible schedules</div>
                            <div className="benefit-item"><span>✔</span> Exam-oriented prep</div>
                            <div className="benefit-item"><span>✔</span> Speaking-focused</div>
                            <div className="benefit-item"><span>✔</span> Small batch options</div>
                        </div>
                    </div>
                    <div className="image-side">
                        <img src={teacher} alt="Training" className="section-img" />
                    </div>
                </div>
            </div>

            <div className="info-row light-bg reverse">
                <div className="container flex-row">
                    <div className="text-side">
                        <h2 className="section-title">WHO IS THIS FOR?</h2>
                        <ul className="target-list">
                            <li><span className="emoji">👨‍💼</span> Professionals for Germany</li>
                            <li><span className="emoji">🎓</span> Students for studies abroad</li>
                            <li><span className="emoji">🗣</span> B2 interview preparation</li>
                            <li><span className="emoji">🌱</span> Absolute beginners</li>
                        </ul>
                    </div>
                    <div className="image-side">
                        <img src={university} alt="Target Audience" className="section-img" />
                    </div>
                </div>
            </div>

            <div className="info-row dark-bg">
                <div className="container flex-row">
                    <div className="text-side">
                        <h2 className="section-title">OUR TEACHING APPROACH</h2>
                        <p className="approach-intro">Structured and practical learning model:</p>
                        <ul className="approach-list">
                            <li>Grammar mastery</li>
                            <li>Professional vocabulary</li>
                            <li>Regular speaking practice</li>
                            <li>Continuous feedback</li>
                        </ul>
                    </div>
                    <div className="image-side">
                        <img src={clean} alt="Methodology" className="section-img" />
                    </div>
                </div>
            </div>
        </section>
            
        <section className="courses">
            <div className="container">
                <h2 className="title-head">Our Courses</h2>
                <div className="course-grid">
                    {coursesData.map((course, index) => (
                        <div className="course-card" key={index}>
                            <div className="course-image">
                                <img src={course.image || 'path-to-default-course-img.jpg'} alt={course.name} />
                                <span className="badge">{course.level}</span>
                            </div>
                            <div className="course-content">
                                <h3>{course.name}</h3>
                                <p className="desc">{course.description}</p>
                                <ul className="topic-list">
                                    {course.topics.map((item, i) => <li key={i}>✔ {item}</li>)}
                                </ul>
                                <div className="outcome-box">
                                    <strong>Outcome:</strong> {course.outcome}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default Spotlight;