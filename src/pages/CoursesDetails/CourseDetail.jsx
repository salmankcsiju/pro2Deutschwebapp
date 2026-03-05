import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesDetailData, specializedPrograms } from '../../data';
import './CourseDetail.css';

function CourseDetail() {
  const { id } = useParams();
  const course = coursesDetailData.find(c => c.id === id) || specializedPrograms.find(p => p.id === id);

  if (!course) {
    return (
      <div className="not-found-container">
        <h2>Course not found!</h2>
        <Link to="/courses" className="btn btn-primary">Return to Courses</Link>
      </div>
    );
  }

  const handleWhatsApp = (type) => {
    const phoneNumber = "917892793468";
    const message = type === 'enroll'
      ? `Hello Pro2Deutsch, I would like to enroll for the ${course.name}.`
      : `Hello Pro2Deutsch, I am interested in a free demo class for ${course.name}.`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="course-detail-page">
      <div className="course-hero-banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${course.image})` }}>
        <div className="container hero-content">
          <Link to="/courses" className="breadcrumb">← Back to All Courses</Link>
          <span className="course-badge">{course.level} LEVEL</span>
          <h1>{course.name}</h1>
          <p>{course.description}</p>
        </div>
      </div>
      <div className="container content-container">

        <div className="detail-grid">
          <div className="main-content">
            <section className="learning-section">
              <h3>What You Will Learn</h3>
              <ul className="module-list">
                {course.fullDetails.modules.map((m, i) => (
                  <li key={i}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="exam-prep-box">
              <h4>Exam Preparation</h4>
              <p>{course.fullDetails.examPrep}</p>
            </section>
          </div>

          <aside className="sidebar">
            <div className="info-card">
              <h3>Course Quick Info</h3>

              <div className="info-item">
                <small>Duration</small>
                <p>{course.fullDetails.duration}</p>
              </div>

              <div className="info-item">
                <small>Learning Mode</small>
                <p>{course.fullDetails.mode}</p>
              </div>

              <div className="action-buttons">
                <Link to="/enroll" className="btn btn-primary" style={{ textAlign: "center" }}>
                  ENROLL NOW
                </Link>

                <button
                  className="btn btn-secondary"
                  onClick={() => handleWhatsApp('demo')}
                >
                  BOOK A FREE DEMO
                </button>
              </div>

              <p className="urgency-text">
                Limited seats available for the next batch!
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;