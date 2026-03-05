import img1 from "./img/bignner-german.jpg";
import img2 from "./img/Elementary-german.webp";
import img3 from './img/Intermediate German b-1.webp';
import img4 from './img/Upper-intermediate.jpg';
import struggle from './img/struggle1.jpeg';
import struggle2 from './img/struggle2.jpeg';
import Speking from './img/speaking1.jpeg';
import Specking2 from './img/speaking2.jpeg';
import Vocab from './img/Vocab1.jpeg';
import Exam from './img/Exam.jpeg';
import Exam2 from './img/Exam2.jpeg';
import Courses from './img/A1-b2-1.jpeg';
import Courses2 from './img/A1-b2-2.jpeg';
import Courses3 from './img/A1-b2-3.jpeg';




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


export const spotlightSlides = [
    {
        tagline: "Pro2Deutsch – Where Structured Learning Builds Confident Communicators.",
        title: "WHY STUDENTS STRUGGLE",
        img:[struggle, struggle2],
        subtitle: "Why Most Students Don’t Improve Even After Completing Levels",
        points: [
            "They learn grammar but don’t practice speaking",
            "Vocabulary is not structured",
            "No personal feedback on writing",
            "No exam strategy training",
            "No clear roadmap from A1 to B2"
        ],
        footer: "German becomes overwhelming. At Pro2Deutsch, we fix this with structure, clarity, and guided progression.",
        buttonText: "Learn More",
        type: "struggle"
    },
    {
        tagline: "Pro2Deutsch – Your Path to Fluency.",
        title: "1-Month Speaking & Vocabulary",
        img:[Speking, Specking2, Vocab],
        subtitle: "Speak Clearly. Build Word Power.",
        description: "Focused programs to improve real communication and strengthen your language foundation.",
        points: [
            "Daily speaking practice & role plays",
            "Pronunciation & personal feedback",
            "Topic-based vocabulary & sentence usage",
            "Memory techniques for retention"
        ],
        buttonText: "View Mini-Courses",
        type: "mini-course"
    },
    {
        tagline: "Pro2Deutsch – Prepare Smart. Perform Confidently.",
        title: "Intensive Exam Preparation",
        img:[Exam, Exam2],
        subtitle: "For Goethe / TELC / ÖSD exams",
        points: [
            "Exam pattern strategy",
            "Timed mock tests",
            "Writing correction",
            "Speaking simulations",
            "Time management training"
        ],
        footer: "We guide you honestly and prepare you thoroughly.",
        buttonText: "Start Exam Preparation",
        type: "exam"
    },
    {
        tagline: "Pro2Deutsch – Beginner to Advanced.",
        title: "Complete A1–B2 Program",
        img:[Courses, Courses2, Courses3],
        subtitle: "7-Month Structured Pathway",
        points: [
            "Clear grammar foundation",
            "Integrated speaking practice",
            "Listening & writing training",
            "Regular assessments",
            "Continuous academic support"
        ],
        footer: "Strong foundations. Real fluency.",
        buttonText: "Start Your German Journey",
        type: "full-program"
    }
];