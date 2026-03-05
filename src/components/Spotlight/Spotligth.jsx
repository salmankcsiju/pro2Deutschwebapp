import React, { useState, useEffect } from 'react';
import { spotlightSlides, coursesData  } from '../../data';
import './Spotligth.css';
import { Link } from 'react-router-dom';
import teacher from '../../img/1.avif';
import university from '../../img/2.avif';
import clean from '../../img/3.webp';


function Spotlight() {
    // FIXED: Removed duplicate useState declarations
    const [viewMode, setViewMode] = useState('scroll');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [themeColor, setThemeColor] = useState('#0f0f0f');

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
            <section 
                className="spotlight-section split-layout"
                            style={{ backgroundColor: themeColor }}
                        >
                            {/* Dynamic Background Layer */}
                            <div 
                                className="dynamic-bg" 
                                style={{ 
                                    backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.75), rgba(15, 15, 15, 0.75)), url(${currentBgImage})` 
                                }}
                            ></div>
                            
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
                            {slide.buttonText}
                        </button>
                    </div>
                </div>

                    {/* Right Side: Fixed Image Stack */}
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
                            <div className="course-node" key={index} style={{ '--index': index }}>
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
                            </div>
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
        </div>
    );
}

export default Spotlight;