import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data';
import ProficiencyTest from '../../components/ProficiencyTest/ProficiencyTest';
import './Blog.css';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isTestOpen, setIsTestOpen] = useState(false);
  const blogRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedPost]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const BlogCTA = () => (
    <section className="blog-post-cta animate">
      <div className="cta-container">
        <h3>Ready to take the next step?</h3>
        <p>Book a Free Demo Class with Pro2Deutsch and receive a personalized German learning roadmap tailored to your goal.</p>
        <div className="cta-actions">
          <Link to="/enroll" className="btn btn-primary">Book Free Demo Class</Link>
          <button className="btn btn-secondary-outline" onClick={() => setIsTestOpen(true)}>Check My Level Now</button>
        </div>
      </div>
    </section>
  );

  const renderBlogList = () => (
    <>
      <header className="blog-hero animate">
        <div className="container">
          <span className="blog-tag">Mastering German</span>
          <h1>Practical Guidance for <span className="text-highlight">Learning German with Confidence</span></h1>
          <p className="blog-subtitle">At Pro2Deutsch, we believe learning German becomes easier when you understand the right strategy. Our blog provides structured advice, exam preparation tips, grammar clarity, vocabulary guidance, and career-focused insights.</p>
        </div>
      </header>

      <div className="container main-content">
        <section className="blog-grid-section">
          <h2 className="section-title animate">Recent Articles</h2>
          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card animate" onClick={() => { setSelectedPost(post); scrollToTop(); }}>
                <div className="blog-card-img">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-card-date">{post.date}</span>
                </div>
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="read-more">Read Full Article &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="quiz-banner animate">
          <div className="quiz-content">
            <h2>Not sure where to start?</h2>
            <p>Take our 5-minute proficiency test to find the right course for you.</p>
            <button className="btn btn-secondary" onClick={() => setIsTestOpen(true)}>
              Check My Level Now
            </button>
          </div>
        </section>

        <section className="cefr-info animate">
          <h2 className="title-center">Understanding German Proficiency Levels</h2>
          <p className="description-center">
            The Common European Framework of Reference for Languages (CEFR) is the international standard
            for describing language ability.
          </p>
          <div className="bento-grid">
            <div className="bento-item level-a1 animate">
              <span className="level-tag">Foundation</span>
              <h3>A1 Level</h3>
              <p>Sentence formation & basic structure. The starting point of your ambition.</p>
              <div className="career-hit">Career: Gateway to Germany</div>
            </div>
            <div className="bento-item level-a2 animate">
              <span className="level-tag">Functional</span>
              <h3>A2 Level</h3>
              <p>Handle workplace routine and everyday interactions with ease.</p>
              <div className="career-hit">Career: Entry-level Roles</div>
            </div>
            <div className="bento-item level-b1 animate">
              <span className="level-tag">Independent</span>
              <h3>B1 Level</h3>
              <p>Explain ideas and participate in professional meetings fluently.</p>
              <div className="career-hit">Career: Strong Milestone</div>
            </div>
            <div className="bento-item level-b2 animate">
              <span className="level-tag">Proficiency</span>
              <h3>B2 Level</h3>
              <p>Master complex texts and express professional opinions clearly.</p>
              <div className="career-hit">Career: Global Opportunities</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );

  const renderBlogPost = () => (
    <div className="blog-post-detail animate-fade-in">
      <div className="container">
        <button className="back-btn" onClick={() => setSelectedPost(null)}>
          &larr; Back to Blog
        </button>

        <header className="post-header">
          <span className="post-date">{selectedPost.date}</span>
          <h1>{selectedPost.title}</h1>
          <img src={selectedPost.image} alt={selectedPost.title} className="post-hero-img" />
        </header>

        <article className="post-body">
          {selectedPost.content.map((block, idx) => {
            if (block.type === 'paragraph') return <p key={idx}>{block.text}</p>;
            if (block.type === 'heading') return <h2 key={idx}>{block.text}</h2>;
            if (block.type === 'list') return (
              <ul key={idx}>
                {block.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            );
            return null;
          })}
        </article>

        <BlogCTA />

        <div className="post-navigation">
          <button className="btn btn-secondary" onClick={() => { setSelectedPost(null); scrollToTop(); }}>
            View All Articles
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="blog-wrapper" ref={blogRef}>
      {selectedPost ? renderBlogPost() : renderBlogList()}

      {isTestOpen && <ProficiencyTest onClose={() => setIsTestOpen(false)} />}

      <section className="blog-footer animate">
        <div className="container">
          <div className="footer-box">
            <h2>Ready to find your level?</h2>
            <p>Join Pro2Deutsch for structured guidance and honest support.</p>
            <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
