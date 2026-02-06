import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    { title: "Personal Mentoring", desc: "Expert guidance for fluency", icon: "👨‍🏫" },
    { title: "Flexible Training", desc: "Learn on your own schedule", icon: "⏳" },
    { title: "Targeted Training", desc: "Focused exam success approach", icon: "🎯" },
    { title: "Optimised Learning", desc: "Modern fast-track methods", icon: "📈" }
  ];

  return (
    <section className="features-navy">
      <div className="features-container">
        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-item" key={index}>
              <div className="icon-wrapper">
                <div className="icon-circle">
                  <span className="icon-inner">{item.icon}</span>
                </div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;