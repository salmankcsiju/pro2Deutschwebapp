import React, { useState, useEffect } from 'react';
import { spotlightSlides, coursesData } from '../../data';
import ProficiencyTest from '../ProficiencyTest/ProficiencyTest';
import './Spotligth.css';
import { Link } from 'react-router-dom';
import teacher from '../../img/1.avif';
import university from '../../img/2.avif';
import clean from '../../img/3.webp';
import studentsImg from '../../img/A1-b2-1.jpeg';
import teachingImg from '../../img/speaking1.jpeg';
import promiseImg from '../../img/struggle1.jpeg';


function Spotlight() {
    // FIXED: Removed duplicate useState declarations
    const [viewMode, setViewMode] = useState('scroll');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [themeColor, setThemeColor] = useState('#0f0f0f');
    const [isTestOpen, setIsTestOpen] = useState(false);

    // German Flag Colors: Black, Red, Gold
    const flagColors = ['#0f0f0f', '#C00000', '#a4882aa3'];

    // 1. Automatic Slider & Theme Change
    useEffect(() => {
        if (!spotlightSlides || spotlightSlides.length === 0) return;

        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % spotlightSlides.length;
            setCurrentIndex(nextIndex);

            // Pick a random flag color for the theme
            const randomColor = flagColors[Math.floor(Math.random() * flagColors.length)];
            setThemeColor(randomColor);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    // 2. Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-anim');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.container-header, .section-title, .course-node');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [currentIndex, viewMode]);

    if (!coursesData || !spotlightSlides) return <h1 className="loading">Loading Pro2Deutsch...</h1>;

    const slide = spotlightSlides[currentIndex];
    const currentBgImage = slide?.img?.[0];

    const handleInitialClick = () => {
        setViewMode('cluster');
        setTimeout(() => setViewMode('grid'), 2000);
    };

    return (
        <div className="page-wrapper">
            {/* --- SPOTLIGHT SECTION --- */}
            <section className="spotlight-section">
                <div className="container spotlight-flex">
                    {/* Left Side: Content */}
                    <div className="container-header slide-fade" key={`content-${currentIndex}`}>
                        <span className="tagline">
                            {slide.tagline}
                        </span>
                        <h1 className="slide-title">{slide.title}</h1>
                        <h2 className="slide-subtitle">{slide.subtitle}</h2>

                        <ul className="slide-points">
                            {slide.points.map((point, i) => (
                                <li key={i}><span>✔</span> {point}</li>
                            ))}
                        </ul>

                        {slide.footer && <p className="slide-footer">{slide.footer}</p>}

                        <div className="hero-btns">
                            <button className="btn btn-primary main-cta">
                                {slide.buttonText} &rarr;
                            </button>
                            <button className="btn btn-secondary-outline test-btn" onClick={() => setIsTestOpen(true)}>
                                Check My Level Now
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Clean Image Stack */}
                    <div className="image-side">
                        <div className="image-stack" key={`img-${currentIndex}`}>
                            {slide.img && slide.img.map((imageSource, idx) => (
                                <div key={idx} className={`stack-img img-${idx}`}>
                                    <img src={imageSource} alt="German Coaching" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="slide-dots">
                    {spotlightSlides.map((_, i) => (
                        <div
                            key={i}
                            className={`dot ${i === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            </section>

            <section className="german-info">
                <div className="info-row dark-bg">
                    <div className="container flex-row">
                        <div className="text-side">
                            <h2 className="section-title">Who We Help</h2>
                            <ul className="target-list">
                                <li>
                                    <strong><span className="emoji">👨‍🎓</span> Students Planning to Study in Germany</strong>
                                    <p>From beginner to B2 certification with structured preparation.</p>
                                </li>
                                <li>
                                    <strong><span className="emoji">💼</span> Working Professionals</strong>
                                    <p>Flexible batches designed for busy schedules.</p>
                                </li>
                                <li>
                                    <strong><span className="emoji">⚕️</span> Healthcare & Technical Professionals</strong>
                                    <p>Focused language training aligned with professional communication needs.</p>
                                </li>
                                <li>
                                    <strong><span className="emoji">🎯</span> Dedicated Learners</strong>
                                    <p>Anyone who wants serious, guided German training in a friendly environment.</p>
                                </li>
                            </ul>
                            <p className="approach-intro mt-4"><em>No matter your background, we meet you at your current level and help you move forward confidently.</em></p>
                        </div>
                        <div className="image-side">
                            <img src={studentsImg} alt="Students learning" className="section-img" />
                        </div>
                    </div>
                </div>

                <div className="info-row light-bg reverse">
                    <div className="container flex-row">
                        <div className="text-side">
                            <h2 className="section-title">Our Teaching Approach</h2>
                            <p className="approach-intro">We believe language learning should be:</p>
                            <div className="benefits-grid">
                                <div className="benefit-item">
                                    <strong>Clear:</strong> Grammar concepts are explained in a logical, easy-to-understand way.
                                </div>
                                <div className="benefit-item">
                                    <strong>Practical:</strong> Speaking exercises simulate real-life conversations and exam situations.
                                </div>
                                <div className="benefit-item">
                                    <strong>Encouraging:</strong> Mistakes are part of learning — we correct with guidance, not pressure.
                                </div>
                                <div className="benefit-item">
                                    <strong>Goal-Oriented:</strong> Each level prepares you properly for the next, including exam readiness.
                                </div>
                            </div>
                        </div>
                        <div className="image-side">
                            <img src={teachingImg} alt="Teaching approach" className="section-img" />
                        </div>
                    </div>
                </div>

                <div className="info-row dark-bg">
                    <div className="container flex-row">
                        <div className="text-side">
                            <h2 className="section-title">Our Promise</h2>
                            <ul className="approach-list">
                                <li>Honest guidance</li>
                                <li>Clear communication</li>
                                <li>Consistent support</li>
                                <li>Structured progression</li>
                                <li>A respectful and motivating classroom environment</li>
                            </ul>
                            <p className="approach-intro mt-4"><em>We are not just teaching a language — we are helping you prepare for an important life step.</em></p>
                        </div>
                        <div className="image-side">
                            <img src={promiseImg} alt="Our promise" className="section-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ... inside your return ... */}
            <section className={`courses-interactive ${viewMode}`}>
                <div className="container">
                    <h2 className="title-head">Our Courses</h2>

                    <div
                        className={`course-track ${viewMode}`}
                        style={{ '--total': coursesData.length }}
                    >
                        {/* Duplicated data for marquee */}
                        {(viewMode === 'scroll' ? [...coursesData, ...coursesData] : coursesData).map((course, index) => (
                            <Link to={`/course/${course.id}`} className="course-node" key={index} style={{ '--index': index, textDecoration: 'none', color: 'inherit' }}>
                                <div className="node-media">
                                    <img src={course.image} alt={course.level} />
                                    {viewMode === 'grid' && <span className="node-badge">{course.level}</span>}
                                </div>
                                <div className="node-info">
                                    <h3>{course.name}</h3>
                                    {viewMode === 'grid' && (
                                        <div className="node-details">
                                            <p>{course.description}</p>
                                            <div className="node-outcome">
                                                <strong>Outcome:</strong> {course.outcome}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* MOVE THIS BELOW THE TRACK */}
                    {viewMode === 'scroll' && (
                        <div className="click-overlay">
                            <button className="click-here-btn" onClick={handleInitialClick}>
                                CLICK HERE
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {isTestOpen && <ProficiencyTest onClose={() => setIsTestOpen(false)} />}
        </div>
    );
}

export default Spotlight;