export const portfolioData = {
  personal: {
    name: 'Rameez Akhtar',
    nickname: 'RA',
    tagline: 'Crafting intelligent software that bridges AI innovation with elegant user experiences.',
    bio: [
      "I'm Rameez Akhtar, a passionate Computer Science student at the University of Layyah, Pakistan. I thrive at the intersection of Artificial Intelligence and Full Stack Development, constantly pushing the boundaries of what's possible with modern technology.",
      'I build end-to-end applications — from AI-powered chatbots and recommendation engines to polished React frontends and scalable FastAPI backends. My toolkit spans Python, JavaScript, TensorFlow, LangChain, and the modern web ecosystem.',
      'My goal is to leverage AI to solve real-world problems while delivering pixel-perfect user experiences. I believe great software is equal parts intelligent engineering and thoughtful design.',
    ],
    location: 'Layyah, Punjab, Pakistan',
    email: 'ramizakhtarr@gmail.com',
    phone: '+92-304-3914410',
    university: 'University of Layyah',
    year: '3rd Year (2023–2027)',
    degree: 'BS Computer Science',
    cgpa: '3.32 / 4.00',
    resumeUrl: '/assets/resume.pdf',
    profileImage: '/assets/profile.jpeg',
    availability: true,
  },

  social: {
    github: 'https://github.com/Rameez-ai',
    linkedin: 'https://www.linkedin.com/in/rameez-akhtar-ba163a336',
    twitter: 'https://x.com/RameezAkhtar786',
    email: 'mailto:ramizakhtarr@gmail.com',
  },

  roles: [
    'AI/ML Engineer',
    'Full Stack Developer',
    'Python Developer',
  ],

  stats: {
    projects: 10,
    technologies: 20,
    certifications: 5,
    contributions: 50,
  },

  skills: [
    { name: 'Python', icon: 'SiPython', category: 'Backend', level: 85 },
    { name: 'NumPy', icon: 'SiNumpy', category: 'AI/ML', level: 80 },
    { name: 'Pandas', icon: 'SiPandas', category: 'AI/ML', level: 80 },
    { name: 'FastAPI', icon: 'SiFastapi', category: 'Backend', level: 75 },
    { name: 'Flask', icon: 'SiFlask', category: 'Backend', level: 70 },
    { name: 'Scikit-Learn', icon: 'SiScikitlearn', category: 'AI/ML', level: 75 },
    { name: 'TensorFlow', icon: 'SiTensorflow', category: 'AI/ML', level: 70 },
    { name: 'LangChain', icon: 'SiLangchain', category: 'AI/ML', level: 65 },
    { name: 'ChromaDB', icon: 'SiGoogle', category: 'AI/ML', level: 70 },
    { name: 'Node.js', icon: 'SiNodedotjs', category: 'Backend', level: 65 },
    { name: 'Firebase', icon: 'SiFirebase', category: 'Backend', level: 70 },
    { name: 'React.js', icon: 'SiReact', category: 'Frontend', level: 85 },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'Frontend', level: 80 },
    { name: 'JavaScript', icon: 'SiJavascript', category: 'Frontend', level: 80 },
    { name: 'HTML5', icon: 'SiHtml5', category: 'Frontend', level: 90 },
    { name: 'CSS3', icon: 'SiCss3', category: 'Frontend', level: 85 },
    { name: 'Git', icon: 'SiGit', category: 'Tools', level: 80 },
    { name: 'VS Code', icon: 'SiVisualstudiocode', category: 'Tools', level: 90 },

  ],

  projects: [
    {
      id: 1,
      title: 'UL ChatBot — University AI Assistant',
      description: 'An AI-powered chatbot for the University of Layyah that answers student queries using RAG and Gemini AI.',
      longDescription:
        'A retrieval-augmented generation chatbot built to serve University of Layyah students. It ingests university documents, policies, and FAQs into a ChromaDB vector store and uses Google Gemini AI to generate accurate, context-aware responses. The React frontend provides a sleek chat interface with conversation history.',
      category: 'AI/ML',
      status: 'Completed',
      featured: true,
      tech: ['React', 'FastAPI', 'Python', 'ChromaDB', 'Gemini AI'],
      highlights: [
        'RAG pipeline with 95%+ answer accuracy on university FAQs',
        'Sub-2-second response time with streaming output',
        'Handles 500+ concurrent users with FastAPI async endpoints',
      ],
      github: 'https://github.com/Rameez-ai/UL-ChatBot',
      demo: 'https://UL-ChatBot.vercel.app',
      image: '/assets/projects/UL-ChatBot.png',
    },
    {
      id: 2,
      title: 'SmartLoan AI — Loan Prediction System',
      description: 'An AI-powered loan prediction system that predicts loan eligibility using machine learning.',
      longDescription:
        'SmartLoan AI processes loan applications using machine learning models to predict loan eligibility. Built with React for the frontend and FastAPI for the backend.',
      category: 'AI/ML',
      status: 'Completed',
      featured: false,
      tech: ['Scikit-learn', 'FastAPI', 'Python'],
      highlights: [
        'Loan prediction system with 95%+ accuracy',
        'Generates loan eligibility predictions with adjustable difficulty',
      ],
      github: 'https://github.com/Rameez-ai/Artificial-Intelligence',
      demo: 'https://artificial-intelligence-flame.vercel.app/',
      image: '/assets/projects/project2.png',
    },

  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Layyah',
      location: 'Layyah, Punjab, Pakistan',
      duration: '2023 – 2027',
      cgpa: '3.32 / 4.00',
      status: 'Ongoing',
      coursework: [
        'Data Structures & Algorithms',
        'Machine Learning',
        'Mobile App Development',
        'Database Systems',
        'Software Engineering',
        'Computer Networks',
        'Artificial Intelligence',
      ],
      achievements: [
        'Developed UL ChatBot — AI chatbot adopted by the university',
        'Presented AI projects to faculty panel judges',
        'Active member of the CS Society and coding club',
      ],
    },
    {
      degree: 'Intermediate (ICS)',
      institution: 'Government Degree College Layyah',
      location: 'Layyah, Punjab, Pakistan',
      duration: '2021 – 2023',
      grade: '83% / A Grade',
      status: 'Completed',
      coursework: [],
      achievements: [],
    },
  ],

  experience: [],

  certifications: [
    {
      name: 'Regression Analysis: Simplify Complex Data Relationships',
      issuer: 'Google',
      date: 'Novemeber 2025',
      credentialId: 'JBDGGCXKHKUT',
      verifyUrl: 'https://www.coursera.org/verify/JBDGGCXKHKUT',
      category: 'AI/ML',
    },
    {
      name: 'Foundations of Data Science',
      issuer: 'Google',
      date: 'October 2025',
      credentialId: '56MOF3FHWV5A',
      verifyUrl: 'https://www.coursera.org/verify/56MOF3FHWV5A',
      category: 'AI/ML',
    },
    {
      name: 'Get Started with Python',
      issuer: 'Google',
      date: 'October 2025',
      credentialId: 'CPHF3HV9NVMY',
      verifyUrl: 'https://www.coursera.org/verify/CPHF3HV9NVMY',
      category: 'AI/ML',
    },

  ],

  funFacts: [
    { icon: 'FaCode', label: 'Lines of Code', value: '50K+' },
    { icon: 'FaProjectDiagram', label: 'Projects Built', value: '10+' },
    { icon: 'FaCoffee', label: 'Cups of Coffee', value: '∞' },
    { icon: 'FaGraduationCap', label: 'Learning', value: '24/7' },
  ],
};
