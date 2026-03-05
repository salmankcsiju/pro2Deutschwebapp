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
    },
    image: img1
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
    },
    image: img2
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
    },
    image: img3
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
    },
    image: img4
  }
];

export const specializedPrograms = [
  {
    id: "exam-prep",
    name: "EXAM PREPARATION COURSES",
    level: "Goethe | Telc",
    description: "Comprehensive training for international German certifications.",
    topics: ["Complete exam pattern explanation", "Mock tests & evaluations", "Time management strategies", "Speaking & writing correction"],
    outcome: "Individual performance feedback and exam readiness.",
    image: Exam,
    fullDetails: {
      duration: "4–8 weeks",
      mode: "Online Live & Mock Test Labs",
      modules: [
        "Exam Pattern Deep-Dive",
        "Speaking & Writing Strategies",
        "Reading Comprehension Hacks"
      ],
      examPrep: "Intensive focus on Goethe and TELC requirements."
    }
  },
  {
    id: "speaking-fluency",
    name: "SPEAKING & FLUENCY COURSE",
    level: "All Levels",
    description: "Focus on natural communication and reducing speaking anxiety.",
    topics: ["Pronunciation correction", "Confidence building", "Real-life role plays", "Office & daily-life conversations"],
    outcome: "Fluid and confident verbal communication.",
    image: Speking,
    fullDetails: {
      duration: "6 weeks",
      mode: "Interactive Speaking Groups",
      modules: [
        "Pronunciation Polish",
        "Debate & Discussion",
        "Real-life Simulations"
      ],
      examPrep: "Indirectly helps with the speaking section of major exams."
    }
  },
  {
    id: "vocab-training",
    name: "VOCABULARY TRAINING",
    level: "Essential",
    description: "Expand your word bank using advanced memory techniques.",
    topics: ["Topic-based vocabulary", "Memory techniques", "Daily-use + professional words", "Exam-specific vocabulary"],
    outcome: "Stronger grasp of professional and daily German terms.",
    image: Vocab,
    fullDetails: {
      duration: "4 weeks",
      mode: "Methodical Study App & Class",
      modules: [
        "Memory Palace Techniques",
        "Thematic Sets (Health, Business, Travel)",
        "Spaced Repetition Systems"
      ],
      examPrep: "Crucial foundation for B1+ Reading exams."
    }
  },
  {
    id: "writing-course",
    name: "WRITING COURSE",
    level: "Formal",
    description: "Master the art of writing emails, letters, and academic essays.",
    topics: ["Letters, emails & essays", "Exam writing formats", "Error correction & improvement", "Personalized feedback"],
    outcome: "Flawless written communication for exams and work.",
    image: struggle,
    fullDetails: {
      duration: "5 weeks",
      mode: "Assignment Driven with Feedback",
      modules: [
        "Formal Letter Writing (Beschwerdebrief)",
        "Business Emails",
        "Structuring Arguments"
      ],
      examPrep: "Directly targets TELC/Goethe writing modules."
    }
  },
  {
    id: "interview-prep",
    name: "INTERVIEW PREPARATION",
    level: "B2 Students",
    description: "Simulation and coaching for German job interviews.",
    topics: ["Job interview simulations", "Professional answers & vocabulary", "CV & motivation letter guidance", "Confidence training"],
    outcome: "Success in German professional recruitment processes.",
    image: struggle2,
    fullDetails: {
      duration: "3 weeks",
      mode: "1:1 Coaching & Mock Interviews",
      modules: [
        "CV Translation & Optimization",
        "Common Interview Questions",
        "Salary Negotiation in German"
      ],
      examPrep: "Not exam focused; career focused."
    }
  },
  {
    id: "personal-training",
    name: "PERSONAL TRAINING (1:1)",
    level: "Custom",
    description: "Bespoke coaching tailored to your individual pace and goals.",
    topics: ["Customized study plan", "Flexible timing", "Faster results", "Individual attention"],
    outcome: "Maximum efficiency and personalized learning path.",
    image: Courses,
    fullDetails: {
      duration: "Flexible",
      mode: "1:1 Online Video Calls",
      modules: [
        "Fully Custom Curriculum",
        "Paced to Student Progress",
        "Direct Goal Alignment"
      ],
      examPrep: "Tailored to whichever exam the student aims for."
    }
  }
];


export const spotlightSlides = [
  {
    tagline: "Pro2Deutsch",
    title: "Your Structured & Supportive Path to German Fluency",
    img: [Courses, Courses2],
    subtitle: "Learn German with Clarity, Confidence, and the Right Guidance",
    points: [
      "Live Online Classes",
      "Small Batches",
      "Flexible Timings",
      "Personalized Guidance"
    ],
    footer: "At Pro2Deutsch, we believe learning German should feel structured, achievable, and encouraging — not overwhelming.",
    buttonText: "Book Your Free Demo Class",
    type: "hero"
  },
  {
    tagline: "Pro2Deutsch",
    title: "A Supportive Learning Environment with Clear Structure",
    img: [struggle, struggle2, Courses3],
    subtitle: "Many learners struggle because they lack a clear plan and consistent support.",
    description: "At Pro2Deutsch, we provide:",
    points: [
      "A well-organized curriculum aligned with CEFR standards",
      "Step-by-step grammar explanation",
      "Guided speaking practice in every level",
      "Vocabulary development with practical usage",
      "Regular assessments to track progress",
      "Constructive feedback to help you improve confidently"
    ],
    footer: "We focus on steady, meaningful progress — not rushing through levels.",
    buttonText: "Learn More",
    type: "support"
  },
  {
    tagline: "Pro2Deutsch",
    title: "Exam Preparation with Confidence",
    img: [Exam, Exam2],
    subtitle: "Structured preparation for Goethe, TELC, and ÖSD certifications.",
    points: [
      "Mock tests",
      "Writing correction and feedback",
      "Speaking practice sessions",
      "Time management techniques",
      "Personalized readiness evaluation"
    ],
    footer: "We guide you carefully before recommending exam attempts.",
    buttonText: "Start Exam Preparation",
    type: "exam"
  },
  {
    tagline: "Pro2Deutsch",
    title: "Your Personalized German Roadmap",
    img: [Vocab, Speking, Specking2],
    subtitle: "We help you create a clear, realistic roadmap based on your goals:",
    points: [
      "Study pathway",
      "Work visa pathway",
      "Professional licensing pathway",
      "Ausbildung preparation"
    ],
    footer: "With the right plan, learning becomes manageable and motivating.",
    buttonText: "Start Your Journey",
    type: "roadmap"
  }
];

export const blogPosts = [
  {
    id: 1,
    slug: "clear-goethe-a1-first-attempt",
    title: "How to Clear Goethe A1 in Your First Attempt",
    excerpt: "The Goethe A1 exam is the foundation of your German journey. Learn how to pass confidently on your first attempt.",
    image: Exam,
    date: "March 5, 2024",
    content: [
      { type: "paragraph", text: "The Goethe A1 exam is the foundation of your German journey. Many learners underestimate it, but structured preparation is essential to pass confidently on your first attempt." },
      { type: "heading", text: "Understand the Exam Structure" },
      {
        type: "list", items: [
          "Lesen (Reading)",
          "Hören (Listening)",
          "Schreiben (Writing)",
          "Sprechen (Speaking)"
        ]
      },
      { type: "paragraph", text: "Each section tests basic communication ability, not advanced grammar." },
      { type: "heading", text: "Focus on Core Grammar" },
      { type: "paragraph", text: "You must be comfortable with Articles (der, die, das), Present tense verbs, Basic sentence formation, Question forms, and Numbers, dates, time. Avoid memorizing blindly. Understand patterns." },
      { type: "heading", text: "Listening Strategy" },
      {
        type: "list", items: [
          "Practice short daily listening exercises.",
          "Focus on keywords instead of understanding every word.",
          "Train your ear with repeated exposure."
        ]
      },
      { type: "heading", text: "Writing Strategy" },
      { type: "paragraph", text: "The writing section often includes filling forms and writing short messages (30–40 words). Practice structured templates: Greeting → Information → Closing" },
      { type: "heading", text: "Speaking Strategy" },
      { type: "paragraph", text: "The speaking section is where many students lose confidence. Practice self-introduction, spelling your name, talking about family, hobbies, work, and asking/answering simple questions. Confidence and clarity matter more than speed." },
      { type: "heading", text: "Common Mistakes" },
      {
        type: "list", items: [
          "Ignoring articles",
          "Not practicing listening",
          "Overcomplicating sentences",
          "Lack of timed mock tests"
        ]
      },
      { type: "paragraph", text: "Final Advice: Consistent structured preparation for 6–8 weeks is usually sufficient for A1 success. If you want guided preparation with mock tests and correction cycles, Pro2Deutsch offers focused A1 exam training." }
    ]
  },
  {
    id: 2,
    slug: "common-german-grammar-mistakes",
    title: "Common German Grammar Mistakes and How to Avoid Them",
    excerpt: "Grammar mistakes slow fluency and reduce exam scores. Here are the most common errors learners make from A1 to B1.",
    image: Vocab,
    date: "March 4, 2024",
    content: [
      { type: "paragraph", text: "Grammar mistakes slow fluency and reduce exam scores. Here are the most common errors learners make from A1 to B1." },
      { type: "heading", text: "1. Article Confusion (der, die, das)" },
      { type: "paragraph", text: "German nouns always have gender. Memorize nouns with articles from day one. Incorrect: Tisch. Correct: der Tisch." },
      { type: "heading", text: "2. Verb Position in Sentences" },
      { type: "paragraph", text: "German sentence structure follows strict word order rules. Main clause: Subject + Verb + Object. After conjunction: Verb goes to the end. Example: Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte." },
      { type: "heading", text: "3. Case Errors (Nominativ, Akkusativ, Dativ)" },
      { type: "paragraph", text: "Case usage affects articles and pronouns. Many learners mix Akkusativ and Dativ. Practice with structured exercises and repetition." },
      { type: "heading", text: "4. Literal Translation from English" },
      { type: "paragraph", text: "German structure differs significantly from English. Avoid direct translation. Think in German patterns." },
      { type: "heading", text: "5. Ignoring Speaking Practice" },
      { type: "paragraph", text: "Grammar knowledge without speaking application leads to hesitation. Practice daily short conversations." },
      { type: "paragraph", text: "Consistency and structured correction are key to long-term improvement." }
    ]
  },
  {
    id: 3,
    slug: "how-to-prepare-for-b1-exam",
    title: "How to Prepare for B1 Exam Successfully",
    excerpt: "The B1 level is a turning point. It demonstrates independent communication ability.",
    image: Exam2,
    date: "March 3, 2024",
    content: [
      { type: "paragraph", text: "The B1 level is a turning point. It demonstrates independent communication ability." },
      { type: "heading", text: "What Changes at B1?" },
      {
        type: "list", items: [
          "Longer listening texts",
          "Opinion-based writing",
          "Complex grammar usage",
          "Structured speaking tasks"
        ]
      },
      { type: "heading", text: "Writing Preparation" },
      { type: "paragraph", text: "Practice formal/informal emails and opinion essays. Use this format: Introduction → Main Points → Conclusion." },
      { type: "heading", text: "Speaking Preparation" },
      { type: "paragraph", text: "You will be required to present a topic, express opinions, and respond to partner questions. Structure: Opening → 2–3 Points → Conclusion." },
      { type: "heading", text: "Time Management" },
      { type: "paragraph", text: "Simulate exam conditions weekly. Time discipline is critical at B1." },
      { type: "paragraph", text: "Final Strategy: Prepare for at least 10–12 weeks with weekly mock tests, speaking correction, and writing feedback." }
    ]
  },
  {
    id: 4,
    slug: "german-vocabulary-for-healthcare-professionals",
    title: "German Vocabulary for Healthcare Professionals",
    excerpt: "Healthcare professionals require profession-specific vocabulary beyond general B1.",
    image: Courses3,
    date: "March 2, 2024",
    content: [
      { type: "paragraph", text: "Healthcare professionals require profession-specific vocabulary beyond general B1." },
      { type: "heading", text: "Essential Areas to Focus On" },
      {
        type: "list", items: [
          "Patient interaction",
          "Symptoms & diagnosis",
          "Body parts terminology",
          "Medical history communication",
          "Instructions & explanations"
        ]
      },
      { type: "heading", text: "Communication Skills Matter" },
      { type: "paragraph", text: "It is not enough to know medical words. You must be able to ask clear questions, explain procedures, reassure patients, and maintain professional tone." },
      { type: "heading", text: "Practical Training Tips" },
      {
        type: "list", items: [
          "Practice role plays",
          "Record yourself speaking",
          "Learn common medical sentence structures",
          "Focus on pronunciation clarity"
        ]
      },
      { type: "paragraph", text: "Professional vocabulary training should begin at B1 level for best results." }
    ]
  },
  {
    id: 5,
    slug: "improve-german-speaking-confidence",
    title: "How to Improve German Speaking Confidence",
    excerpt: "Many learners complete A2 or B1 but hesitate to speak. Confidence comes from structured repetition.",
    image: Speking,
    date: "March 1, 2024",
    content: [
      { type: "paragraph", text: "Many learners complete A2 or B1 but hesitate to speak. Confidence comes from structured repetition, not random practice." },
      { type: "heading", text: "Step 1: Speak Daily (Even Alone)" },
      { type: "paragraph", text: "Describe your day in German for 5 minutes daily." },
      { type: "heading", text: "Step 2: Practice Structured Topics" },
      { type: "paragraph", text: "Prepare short presentations on your profession, hobbies, goals, and current topics." },
      { type: "heading", text: "Step 3: Stop Translating" },
      { type: "paragraph", text: "Train yourself to think in short German sentences." },
      { type: "heading", text: "Step 4: Accept Mistakes" },
      { type: "paragraph", text: "Fluency improves when you focus on communication rather than perfection." },
      { type: "paragraph", text: "Final Advice: Regular guided speaking sessions dramatically improve fluency within 6–8 weeks." }
    ]
  },
  {
    id: 6,
    slug: "study-vs-work-in-germany",
    title: "Study in Germany vs Work in Germany: Which Path Is Right for You?",
    excerpt: "Choosing the right pathway determines your required language level.",
    image: Courses2,
    date: "Feb 28, 2024",
    content: [
      { type: "paragraph", text: "Choosing the right pathway determines your required language level." },
      { type: "heading", text: "Study Pathway" },
      { type: "paragraph", text: "Usually requires B2 level. Pros: Academic qualification, long-term career growth, broader opportunities." },
      { type: "heading", text: "Work Pathway" },
      { type: "paragraph", text: "Often requires B1 or B2 depending on profession. Pros: Immediate income, practical exposure, faster relocation." },
      { type: "heading", text: "Ausbildung Pathway" },
      { type: "paragraph", text: "Requires B1 level. Combines practical training, salary during training, and long-term employment prospects." },
      { type: "paragraph", text: "Conclusion: Your language strategy depends on your long-term goal. A structured roadmap prevents delays and unnecessary exams." }
    ]
  }
];

export const proficiencyTestData = {
  questions: [
    {
      id: 1,
      level: "A1",
      question: "Ich ____ Maria.",
      options: ["bin", "bist", "ist", "sind"],
      answer: "bin"
    },
    {
      id: 2,
      level: "A1",
      question: "Das ist ____ Auto.",
      options: ["ein", "eine", "einen", "einem"],
      answer: "ein"
    },
    {
      id: 3,
      level: "A1",
      question: "Wie alt ____ du?",
      options: ["bist", "bin", "ist", "seid"],
      answer: "bist"
    },
    {
      id: 4,
      level: "A1",
      question: "Ich komme ____ Indien.",
      options: ["aus", "in", "zu", "nach"],
      answer: "aus"
    },
    {
      id: 5,
      level: "A1",
      question: "Wir ____ Deutsch.",
      options: ["lernt", "lernen", "lerne", "lernst"],
      answer: "lernen"
    },
    {
      id: 6,
      level: "A2",
      question: "Ich habe gestern einen Film _____.",
      options: ["sehe", "gesehen", "sieht", "sah"],
      answer: "gesehen"
    },
    {
      id: 7,
      level: "A2",
      question: "Er kann sehr gut Deutsch _____.",
      options: ["spricht", "sprechen", "sprach", "gesprochen"],
      answer: "sprechen"
    },
    {
      id: 8,
      level: "A2",
      question: "Ich gehe nach Hause, ____ ich müde bin.",
      options: ["und", "aber", "weil", "denn"],
      answer: "weil"
    },
    {
      id: 9,
      level: "A2",
      question: "Wir treffen uns ____ Montag.",
      options: ["in", "am", "um", "nach"],
      answer: "am"
    },
    {
      id: 10,
      level: "A2",
      question: "Ich habe keine Zeit, ____ ich viel arbeiten muss.",
      options: ["weil", "oder", "denn", "sondern"],
      answer: "denn"
    },
    {
      id: 11,
      level: "B1",
      question: "Wenn ich Zeit habe, ____ ich dich besuchen.",
      options: ["werde", "würde", "bin", "habe"],
      answer: "werde"
    },
    {
      id: 12,
      level: "B1",
      question: "Er interessiert sich ____ Politik.",
      options: ["für", "an", "mit", "über"],
      answer: "für"
    },
    {
      id: 13,
      level: "B1",
      question: "Obwohl es regnet, ____ wir spazieren.",
      options: ["gehen", "gingen", "gegangen", "geht"],
      answer: "gehen"
    },
    {
      id: 14,
      level: "B1",
      question: "Ich freue mich ____ das Wochenende.",
      options: ["auf", "an", "über", "für"],
      answer: "auf"
    },
    {
      id: 15,
      level: "B1",
      question: "Das ist der Mann, ____ Auto kaputt ist.",
      options: ["der", "dessen", "dem", "den"],
      answer: "dessen"
    },
    {
      id: 16,
      level: "B2",
      question: "Hätte ich mehr Zeit, ____ ich Deutsch intensiver lernen.",
      options: ["würde", "werde", "bin", "habe"],
      answer: "würde"
    },
    {
      id: 17,
      level: "B2",
      question: "Das Projekt wurde erfolgreich _____.",
      options: ["abschließen", "abgeschlossen", "abschließt", "abschloss"],
      answer: "abgeschlossen"
    },
    {
      id: 18,
      level: "B2",
      question: "Er behauptet, er ____ keine Fehler gemacht.",
      options: ["hat", "habe", "hatte", "hätte"],
      answer: "habe"
    },
    {
      id: 19,
      level: "B2",
      question: "Die Prüfung ist schwieriger, ____ ich erwartet hatte.",
      options: ["als", "wie", "denn", "dass"],
      answer: "als"
    },
    {
      id: 20,
      level: "B2",
      question: "Sie arbeitet, ____ sie krank ist.",
      options: ["obwohl", "weil", "wenn", "damit"],
      answer: "obwohl"
    }
  ],
  selfEvaluation: [
    {
      id: 21,
      question: "Write 5–6 sentences introducing yourself in German.",
      type: "textarea"
    },
    {
      id: 22,
      question: "Describe your daily routine in 4–5 sentences.",
      type: "textarea"
    },
    {
      id: 23,
      question: "Why do you want to learn German?",
      type: "textarea"
    }
  ],
  scoringSystem: [
    { range: [0, 5], level: "Beginner (Below A1)" },
    { range: [6, 10], level: "A1 Level" },
    { range: [11, 15], level: "A2 Level" },
    { range: [16, 18], level: "B1 Level" },
    { range: [19, 20], level: "B2 Level" }
  ]
};
