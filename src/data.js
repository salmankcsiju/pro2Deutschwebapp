import img1 from "./img/bignner-german.jpg";
import img2 from "./img/Elementary-german.webp";
import img3 from './img/Intermediate-german.webp';
import img4 from './img/Upper-intermediate.jpg';

export const coursesData = [
  {
    id: "a1-course",
    level: "A1",
    name: "Beginner German",
    image: img1,
    description: "Beginners with no prior knowledge of German.",
    outcome: "You can understand and use simple German sentences confidently.",
    topics: ["Alphabet & pronunciation", "Basic grammar", "Introducing yourself", "Daily conversations"]
  },
  {
    id: "a2-course",
    level: "A2",
    name: "Elementary German",
    image: img2,
    description: "Focus on expanded grammar and workplace interactions.",
    outcome: "You can communicate independently in routine situations.",
    topics: ["Expanded grammar", "Social interactions", "Reading & writing", "Listening comprehension"]
  },
  {
    id: "b1-course",
    level: "B1",
    name: "Intermediate German",
    image: img3,
    description: "Advanced grammar and professional communication.",
    outcome: "You can communicate confidently in professional settings.",
    topics: ["Formal communication", "Email writing", "Exam-oriented speaking"]
  },
  {
    id: "b2-course",
    level: "B2",
    name: "Upper Intermediate",
    image: img4,
    description: "Professional-level fluency and exam readiness.",
    outcome: "You achieve professional-level fluency.",
    topics: ["Complex grammar", "Debates", "Professional writing", "Interview prep"]
  }
];

export const coursesDetailData = [
  {
    id: "a1-course",
    level: "A1",
    name: "German A1 Course",
    description: "Start your German journey with confidence for absolute beginners.",
    topics: ["Alphabet & Pronunciation", "Grammar Foundations", "Everyday Communication", "Vocabulary Building"],
    outcome: "Communicate in simple everyday situations and understand basic German.",
    fullDetails: {
      duration: "6–8 weeks",
      mode: "Online Live Classes",
      modules: [
        "Basics of German (Alphabet, Numbers)",
        "Grammar (Articles, Pronouns, Present Tense)",
        "Everyday Communication (Family, Hobbies)",
        "Speaking & Listening Drills"
      ],
      examPrep: "Goethe / TELC / ÖSD A1 support included."
    }
  },
  {
    id: "a2-course",
    level: "A2",
    name: "German A2 Course",
    description: "Build on your A1 foundation with more complex grammar and vocabulary.",
    topics: ["Expanded Grammar", "Social Interactions", "Reading & Writing", "Listening Comprehension"],
    outcome: "Communicate independently in routine situations.",
    fullDetails: {
      duration: "8–10 weeks",
      mode: "Online Live Classes",
      modules: [
        "Grammar (Past Tense, Prepositions)",
        "Social Interactions (Workplace, Travel)",
        "Reading & Writing (Emails, Descriptions)",
        "Listening Comprehension (News, Conversations)"
      ],
      examPrep: "Goethe / TELC / ÖSD A2 support included."
    }
  },
  {
    id: "b1-course",
    level: "B1",
    name: "German B1 Course",
    description: "Advanced grammar and professional communication skills.",
    topics: ["Formal Communication", "Email Writing", "Exam-Oriented Speaking"],
    outcome: "Communicate confidently in professional settings.",
    fullDetails: {
      duration: "10–12 weeks",
      mode: "Online Live Classes",
      modules: [
        "Grammar (Subjunctive Mood, Complex Sentences)",
        "Professional Communication (Meetings, Presentations)",
        "Email Writing & Formatting",
        "Speaking & Listening Practice"
      ],
      examPrep: "Goethe / TELC / ÖSD B1 support included."
    }
  },
  {
    id: "b2-course",
    level: "B2",
    name: "German B2 Course",
    description: "Professional-level fluency and exam readiness.",
    topics: ["Complex Grammar", "Debates", "Professional Writing", "Interview Prep"],
    outcome: "Achieve professional-level fluency and exam readiness.",
    fullDetails: {
      duration: "10–12 weeks",
      mode: "Online Live Classes",
      modules: [
        "Advanced Grammar (Konjunktiv II, Passive Voice)",
        "Professional Communication (Negotiations, Presentations)",
        "Complex Sentence Structures & Connectors",
        "Nuance & Register Control"
      ],
      examPrep: "Goethe / TELC / ÖSD B2 support included."
    }
  }
];

export const specializedPrograms = [
  {
    id: "exam-prep",
    name: "EXAM PREPARATION COURSES",
    level: "Goethe | Telc",
    description: "Comprehensive training for international German certifications.",
    topics: ["Complete exam pattern explanation", "Mock tests & evaluations", "Time management strategies", "Speaking & writing correction"],
    outcome: "Individual performance feedback and exam readiness."
  },
  {
    id: "speaking-fluency",
    name: "SPEAKING & FLUENCY COURSE",
    level: "All Levels",
    description: "Focus on natural communication and reducing speaking anxiety.",
    topics: ["Pronunciation correction", "Confidence building", "Real-life role plays", "Office & daily-life conversations"],
    outcome: "Fluid and confident verbal communication."
  },
  {
    id: "vocab-training",
    name: "VOCABULARY TRAINING",
    level: "Essential",
    description: "Expand your word bank using advanced memory techniques.",
    topics: ["Topic-based vocabulary", "Memory techniques", "Daily-use + professional words", "Exam-specific vocabulary"],
    outcome: "Stronger grasp of professional and daily German terms."
  },
  {
    id: "writing-course",
    name: "WRITING COURSE",
    level: "Formal",
    description: "Master the art of writing emails, letters, and academic essays.",
    topics: ["Letters, emails & essays", "Exam writing formats", "Error correction & improvement", "Personalized feedback"],
    outcome: "Flawless written communication for exams and work."
  },
  {
    id: "interview-prep",
    name: "INTERVIEW PREPARATION",
    level: "B2 Students",
    description: "Simulation and coaching for German job interviews.",
    topics: ["Job interview simulations", "Professional answers & vocabulary", "CV & motivation letter guidance", "Confidence training"],
    outcome: "Success in German professional recruitment processes."
  },
  {
    id: "personal-training",
    name: "PERSONAL TRAINING (1:1)",
    level: "Custom",
    description: "Bespoke coaching tailored to your individual pace and goals.",
    topics: ["Customized study plan", "Flexible timing", "Faster results", "Individual attention"],
    outcome: "Maximum efficiency and personalized learning path."
  }
];