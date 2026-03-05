import React from 'react';
import { Link } from 'react-router-dom';
import { coursesDetailData, specializedPrograms } from '../../data';
import './Courses.css';

function Courses() {
  return (
    <div className="courses-page-container">
      <div className="container">
        <header className="page-header">
          <h1>Detailed Course Overview</h1>
          <p>Click on any course to see complete details and curriculum.</p>
        </header>

        <div className="detailed-grid">
          {coursesDetailData.map((course) => (
            <Link to={`/course/${course.id}`} className="detailed-card" key={course.id}>
              <div className="card-image-container">
                <img src={course.image} alt={course.name} className="card-cover-image" />
              </div>
              <div className="card-top">
                <span className="level-tag">{course.level}</span>
                <h2>{course.name}</h2>
              </div>
              <div className="card-info">
                <p>{course.description}</p>
                <div className="outcome-section">
                  <strong>Expected Outcome:</strong>
                  <p>{course.outcome}</p>
                </div>
                <span className="view-more">View Full Syllabus →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="specialized-section-wrapper">
          <h2 className="section-title">Specialized Programs</h2>
          <div className="detailed-grid">
            {specializedPrograms.map((prog) => (
              <Link to={`/course/${prog.id}`} className="detailed-card specialized-highlight" key={prog.id}>
                <div className="card-image-container">
                  <img src={prog.image} alt={prog.name} className="card-cover-image" />
                </div>
                <div className="card-top">
                  <span className="level-tag">{prog.level}</span>
                  <h2>{prog.name}</h2>
                </div>
                <div className="card-info">
                  <p>{prog.description}</p>
                  <div className="outcome-section">
                    <strong>Outcome:</strong>
                    <p>{prog.outcome}</p>
                  </div>
                  <span className="view-more">View Program Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;