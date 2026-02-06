import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [counts, setCounts] = useState({ students: 0, passRate: 0, batches: 0 });
  const hasStarted = useRef(false);

  const startCounting = () => {
    const duration = 2000;
    const targets = { students: 500, passRate: 98, batches: 40 };
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        students: Math.floor(easedProgress * targets.students),
        passRate: Math.floor(easedProgress * targets.passRate),
        batches: Math.floor(easedProgress * targets.batches)
      });

      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          if (entry.target.classList.contains('stats-grid') && !hasStarted.current) {
            hasStarted.current = true;
            startCounting();
          }
        }
      });
    }, { threshold: 0.2 });

    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="blog-wrapper">
      <header className="blog-hero animate">
        <div className="container">
          <div className="badge-ui">Mastering German</div>
          <h1>A1 to B2 German: <span className="text-gradient">Career & Confidence</span></h1>
          <p>More than just an exam. Build a skill that transforms your global professional journey.</p>
        </div>
      </header>

      <div className="container main-content">
        <section className="stats-grid animate">
          <div className="stat-item">
            <h2>{counts.students}+</h2>
            <p>Happy Students</p>
          </div>
          <div className="stat-item">
            <h2>{counts.passRate}%</h2>
            <p>Exam Pass Rate</p>
          </div>
          <div className="stat-item">
            <h2>{counts.batches}+</h2>
            <p>Batches Completed</p>
          </div>
        </section>

        <section className="cefr-info animate">
          <h2 className="title-center">Understanding German Proficiency Levels</h2>
          
          <p className="description-center">
            The Common European Framework of Reference for Languages (CEFR) is the international standard 
            for describing language ability.
          </p>
        </section>

        <h2 className="section-label animate">Career Milestone Map</h2>
        <div className="bento-grid">
          <div className="bento-item level-a1 animate">
            <div className="level-tag">Foundation</div>
            <h3>A1 Level</h3>
            <p>Sentence formation & basic structure. The starting point of your ambition.</p>
            <div className="career-hit">Career: Gateway to Germany</div>
          </div>
          <div className="bento-item level-a2 animate">
            <div className="level-tag">Functional</div>
            <h3>A2 Level</h3>
            <p>Handle workplace routine and everyday interactions with ease.</p>
            <div className="career-hit">Career: Entry-level Roles</div>
          </div>
          <div className="bento-item level-b1 animate">
            <div className="level-tag">Independent</div>
            <h3>B1 Level</h3>
            <p>Explain ideas and participate in professional meetings fluently.</p>
            <div className="career-hit">Career: Strong Milestone</div>
          </div>
          <div className="bento-item level-b2 animate">
            <div className="level-tag">Proficiency</div>
            <h3>B2 Level</h3>
            <p>Master complex texts and express professional opinions clearly.</p>
            <div className="career-hit">Career: Global Opportunities</div>
          </div>
        </div>

        <section className="quiz-banner animate">
          <div className="quiz-content">
            <h2>Not sure where to start?</h2>
            <p>Take our 5-minute proficiency test to find the right course for you.</p>
            <button className="btn-quiz" onClick={() => alert("Coming Soon!")}>
              Check My Level Now
            </button>
          </div>
        </section>

        <section className="blog-footer animate">
          <div className="footer-glass">
            <h2>Ready to find your level?</h2>
            <p>Join Pro2Deutsch for structured guidance and honest support.</p>
            <Link to="/courses" className="btn-glow">Explore Courses</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;