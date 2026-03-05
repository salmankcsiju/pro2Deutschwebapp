import React, { useState } from 'react';
import { proficiencyTestData } from '../../data';
import './ProficiencyTest.css';

const ProficiencyTest = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState('welcome'); // welcome, quiz, self-eval, result
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [selfEvalAnswers, setSelfEvalAnswers] = useState({});
    const [score, setScore] = useState(0);

    const { questions, selfEvaluation, scoringSystem } = proficiencyTestData;

    const handleOptionSelect = (option) => {
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = option === currentQuestion.answer;

        setAnswers({ ...answers, [currentQuestion.id]: option });

        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }, 300);
        } else {
            setTimeout(() => {
                setCurrentStep('self-eval');
            }, 300);
        }
    };

    const handleSelfEvalChange = (id, value) => {
        setSelfEvalAnswers({ ...selfEvalAnswers, [id]: value });
    };

    const getResult = () => {
        const result = scoringSystem.find(s => score >= s.range[0] && score <= s.range[1]);
        return result ? result.level : "Beginner";
    };

    const renderWelcome = () => (
        <div className="test-welcome animate-fade">
            <div className="test-badge">German Proficiency</div>
            <h2>Not sure where to start?</h2>
            <p>Take our 5-minute proficiency test to find the right course for you.</p>
            <div className="test-features">
                <div className="feature"><span className="dot a1"></span> A1 Basic</div>
                <div className="feature"><span className="dot a2"></span> A2 Elementary</div>
                <div className="feature"><span className="dot b1"></span> B1 Intermediate</div>
                <div className="feature"><span className="dot b2"></span> B2 Upper</div>
            </div>
            <button className="btn btn-primary start-btn" onClick={() => setCurrentStep('quiz')}>
                Start Test Now
            </button>
        </div>
    );

    const renderQuiz = () => {
        const q = questions[currentQuestionIndex];
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

        return (
            <div className="test-quiz animate-fade">
                <div className="test-header">
                    <span className="step-info">Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span className={`level-indicator ${q.level.toLowerCase()}`}>{q.level}</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <h3 className="question-text">{q.question}</h3>
                <div className="options-grid">
                    {q.options.map((opt, i) => (
                        <button
                            key={i}
                            className={`option-btn ${answers[q.id] === opt ? 'selected' : ''}`}
                            onClick={() => handleOptionSelect(opt)}
                        >
                            <span className="option-label">{String.fromCharCode(97 + i)})</span> {opt}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderSelfEval = () => (
        <div className="test-self-eval animate-fade">
            <h3>Self-Evaluation</h3>
            <p>Please provide brief answers to help us understand your learning goals.</p>
            {selfEvaluation.map(q => (
                <div key={q.id} className="eval-item">
                    <label>{q.id - 20}. {q.question}</label>
                    <textarea
                        placeholder="Type your response here..."
                        value={selfEvalAnswers[q.id] || ''}
                        onChange={(e) => handleSelfEvalChange(q.id, e.target.value)}
                    ></textarea>
                </div>
            ))}
            <button className="btn btn-primary submit-btn" onClick={() => setCurrentStep('result')}>
                See My Results
            </button>
        </div>
    );

    const renderResult = () => {
        const level = getResult();
        return (
            <div className="test-result animate-fade">
                <div className="result-card">
                    <div className="confetti-icon">🎉</div>
                    <h3>Your Estimated Level:</h3>
                    <div className={`level-badge-large ${level.split(' ')[0].toLowerCase().replace('(', '').replace(')', '')}`}>
                        {level}
                    </div>
                    <div className="score-circles">
                        <div className="score-circle">
                            <span className="score-val">{score}</span>
                            <span className="score-label">Correct</span>
                        </div>
                        <div className="score-circle">
                            <span className="score-val">{questions.length - score}</span>
                            <span className="score-label">Incorrect</span>
                        </div>
                    </div>
                    <p className="result-desc">
                        Based on your responses, you are at the <strong>{level}</strong>.
                        We recommend starting with our {level.split(' ')[0]} curriculum for the best results.
                    </p>
                    <div className="result-actions">
                        <button className="btn btn-secondary" onClick={onClose}>Close</button>
                        <a href="/enroll" className="btn btn-primary">Book Free Demo</a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="proficiency-test-container">
            <div className="test-modal-overlay" onClick={onClose}></div>
            <div className="test-modal-content">
                <button className="close-test" onClick={onClose}>&times;</button>
                {currentStep === 'welcome' && renderWelcome()}
                {currentStep === 'quiz' && renderQuiz()}
                {currentStep === 'self-eval' && renderSelfEval()}
                {currentStep === 'result' && renderResult()}
            </div>
        </div>
    );
};

export default ProficiencyTest;
