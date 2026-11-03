// Portfolio Data for Manish Adhikari

export const profile = {
  name: "Manish Adhikari",
  role: "QA / Software Testing Intern & BCA Student",
  status: "Available for QA & Software Roles",
  tagline: "Finding bugs before users do, ensuring software quality, reliability, and robust performance.",
  bio: "I'm a 7th semester Bachelor of Computer Applications (BCA) student at La Grandee International College (affiliated with Pokhara University) and currently interning as a QA / Software Testing Intern at Pravidhi Digital Innovation. With a strong foundation in software engineering, database management, and programming (Python, Java, SQL), I specialize in manual testing, test case design, defect tracking, and backend validation.",
  location: "Pokhara, Gandaki, Nepal",
  email: "adhikarimanish2006@gmail.com",
  phone: "+977 9764806842",
  github: "https://github.com/Manishadh10",
  githubUsername: "Manishadh10",
  stats: [
    { label: "Academic Standing", value: "7th Sem BCA", note: "Pokhara University" },
    { label: "Hands-on QA Experience", value: "2+ Months", note: "Pravidhi Digital" },
    { label: "Core Projects Built", value: "4+ Projects", note: "Desktop, Backend, Python" },
    { label: "Testing Focus", value: "Manual & Automated", note: "STLC & Regression" }
  ]
};

export const GITHUB_URL = profile.github;

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/education", label: "Education" },
  { path: "/contact", label: "Contact" }
];

export const specializations = [
  {
    id: "qa",
    title: "Software Quality Assurance",
    description: "Designing structured test cases, executing manual, functional, regression, smoke, and sanity tests to catch defects early in the SDLC.",
    icon: "ShieldCheck",
    badge: "Core Focus"
  },
  {
    id: "backend",
    title: "Backend & Database Integrity",
    description: "Validating complex database workflows, writing optimized SQL queries, verifying CRUD operations, and ensuring relational schema integrity.",
    icon: "Database",
    badge: "Technical"
  },
  {
    id: "programming",
    title: "Programming & Problem Solving",
    description: "Leveraging Python, Java, and C to write clean code, build desktop and backend applications, and analyze algorithmic edge cases.",
    icon: "Code",
    badge: "Development"
  },
  {
    id: "defect",
    title: "Defect Management & Reporting",
    description: "Isolating root causes, drafting comprehensive bug reports with reproduction steps, and verifying patches across regression cycles.",
    icon: "Bug",
    badge: "Workflow"
  }
];

export const experience = [
  {
    id: "pravidhi",
    role: "QA / Software Testing Intern",
    company: "Pravidhi Digital Innovation",
    location: "Pokhara, Nepal",
    period: "2-month internship (Current)",
    type: "Internship",
    description:
      "Working collaboratively within an agile software engineering team on real-world web and software workflows, focusing on thorough software quality validation, defect tracking, and regression cycles.",
    responsibilities: [
      "Analyzing project requirements, user stories, and acceptance criteria to formulate detailed test scenarios.",
      "Designing and executing comprehensive test cases for manual, functional, boundary, smoke, and regression testing.",
      "Identifying, logging, and tracking software defects with explicit reproduction steps, expected vs. actual outcomes, and severity ratings.",
      "Validating database integrity and API data persistence using direct SQL queries and test payloads.",
      "Collaborating closely with software developers to verify bug fixes and ensure zero regression issues.",
      "Performing usability and GUI testing across different viewport resolutions to enhance end-user experience."
    ],
    skillsUsed: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke & Sanity",
      "Test Case Design",
      "Bug Reporting",
      "Defect Lifecycle",
      "SQL Verification",
      "Agile Workflows"
    ]
  }
];

export const qaWorkflow = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "Reviewing specifications and user stories to identify testable conditions, potential edge cases, and ambiguity."
  },
  {
    step: "02",
    title: "Test Case Design",
    description: "Applying Boundary Value Analysis (BVA) and Equivalence Partitioning (EP) to construct positive and negative test cases."
  },
  {
    step: "03",
    title: "Execution & Verification",
    description: "Executing smoke, functional, and sanity passes across application modules and backend services."
  },
  {
    step: "04",
    title: "Defect Reporting",
    description: "Documenting bugs with clear steps to reproduce, expected vs. actual behavior, logs, screenshots, and severity priority."
  },
  {
    step: "05",
    title: "Regression & Sign-off",
    description: "Re-testing resolved issues, verifying adjacent modules for zero unintended side effects, and preparing test summaries."
  }
];

export const projects = [
  {
    id: "quiz-game-app",
    title: "Quiz Game Application",
    category: "Academic & Desktop",
    categoryKey: "desktop",
    tech: ["Java", "JavaFX", "JDBC", "MySQL"],
    badge: "Academic Project",
    summary:
      "A feature-complete desktop quiz application featuring user and admin authentication, question bank management, dynamic quiz execution, and real-time score analytics.",
    description:
      "Built as an academic project demonstrating Object-Oriented Programming (OOP) and database connectivity. It separates administrator workflows (CRUD operations on questions, user accounts, answer keys) from student examination portals. I led the validation, testing, and debugging of critical features including input sanitization, database transactions via JDBC, and accurate score calculations.",
    testingHighlights: [
      "Designed and executed 40+ test cases covering login authentication, role-based permissions, and boundary timer limits.",
      "Conducted boundary and negative testing for invalid characters, blank inputs, and abnormal quiz terminations.",
      "Debugged JDBC database connections, connection pooling, and SQL injection prevention via PreparedStatements.",
      "Validated score computation algorithms and instant result summary rendering."
    ],
    features: [
      "Dual-role authentication (Admin and Student portals)",
      "Full CRUD question bank management",
      "Timed examination mode with randomized questions",
      "Real-time score calculation and historical result log"
    ],
    github: "https://github.com/Manishadh10"
  },
  {
    id: "maraz-backend",
    title: "MARAZ Data Management System",
    category: "Backend & Database",
    categoryKey: "backend",
    tech: ["PostgreSQL", "Relational DB", "SQL", "Backend Development"],
    badge: "Group Project",
    summary:
      "Backend architecture and relational database implementation for project data storage, integrity constraints, and query optimization.",
    description:
      "Collaborated as a backend developer on a group software system. Focused primarily on database design, relational modeling, data normalization, and writing robust SQL queries for transaction operations. Ensured all application workflows adhered strictly to ACID principles and business validation logic.",
    testingHighlights: [
      "Executed database validation testing to verify foreign key constraints, triggers, and cascading actions.",
      "Tested CRUD operations under concurrent user simulations to ensure data consistency.",
      "Analyzed query execution plans to optimize indexing and reduce response latencies for complex joins.",
      "Formulated edge-case test queries to verify null handling, unique constraints, and transaction rollbacks."
    ],
    features: [
      "Normalized PostgreSQL relational database schema (3NF)",
      "Optimized multi-table join queries and indexing",
      "Data integrity guarantees with strict constraint checks",
      "Modular transaction scripts for business logic workflows"
    ],
    github: "https://github.com/Manishadh10"
  },
  {
    id: "python-projects-collection",
    title: "Python Projects Collection",
    category: "Python Applications",
    categoryKey: "python",
    tech: ["Python", "Tkinter", "Algorithms", "OOP", "File I/O"],
    badge: "Personal Collection",
    summary:
      "A versatile collection of 4 desktop and utility applications demonstrating core Python programming, GUI development, and algorithmic logic.",
    description:
      "A curated suite of four standalone Python applications: 1) Personal Finance Expense Tracker with category analytics; 2) Rule-Based AI Chatbot with pattern matching; 3) Photo Slideshow Album with automated transitions; and 4) Simple Notepad with full text manipulation and file I/O operations.",
    testingHighlights: [
      "Performed unit testing on financial calculation algorithms to prevent rounding and negative balance anomalies.",
      "Tested file handling routines for corrupted file formats, write permission limits, and encoding exceptions.",
      "Conducted UI responsiveness and state verification on Tkinter event loops.",
      "Verified natural language rule matching under varied user prompt phrasings."
    ],
    features: [
      "Personal Expense Tracker: Budget monitoring and categorization",
      "Rule-Based Chatbot: Pattern matching responses and fallback handling",
      "Photo Slideshow Album: Automated transitions and image indexing",
      "Simple Notepad: Text editing, saving, opening, and custom word search"
    ],
    github: "https://github.com/Manishadh10"
  },
  {
    id: "qa-test-suites",
    title: "QA Test Documentation & Artifacts",
    category: "Software Testing",
    categoryKey: "qa",
    tech: ["Test Scenarios", "Bug Tracking", "BVA / EP", "STLC"],
    badge: "QA Artifacts",
    summary:
      "Structured test plans, test case repositories, defect reports, and boundary testing matrix developed during internships and practical projects.",
    description:
      "A comprehensive showcase of professional QA documentation artifacts. Illustrates standardized test case specifications with preconditions, test steps, expected vs. actual results, defect severity ratings, and root cause analysis templates used in industry workflows.",
    testingHighlights: [
      "Formulated reusable test case templates adhering to standard IEEE / ISO test documentation guidelines.",
      "Documented clear reproduction steps for complex UI race conditions and validation errors.",
      "Maintained traceability matrix mapping functional requirements to specific test verification IDs."
    ],
    features: [
      "Detailed Test Case Sheets with pass/fail criteria",
      "Structured Defect Reports with environment details",
      "Boundary Value & Equivalence Partitioning matrices",
      "Sprint-based Test Execution summaries"
    ],
    github: "https://github.com/Manishadh10"
  }
];

export const skillCategories = [
  {
    id: "qa-testing",
    title: "Software Testing & QA",
    icon: "ShieldCheck",
    description: "Core methodologies, testing levels, and test design techniques applied to ensure high software reliability.",
    skills: [
      { name: "Manual Testing", level: "Advanced", desc: "End-to-end verification of user flows and requirements" },
      { name: "Functional Testing", level: "Advanced", desc: "Validating features against functional specs" },
      { name: "Regression Testing", level: "Advanced", desc: "Ensuring new updates preserve existing stability" },
      { name: "Smoke & Sanity Testing", level: "Advanced", desc: "Quick health checks and build acceptance" },
      { name: "Test Case Design", level: "Advanced", desc: "Comprehensive test scenarios with preconditions and steps" },
      { name: "Bug & Defect Reporting", level: "Advanced", desc: "Actionable reproduction steps and severity triage" },
      { name: "Boundary Value Analysis", level: "Intermediate", desc: "Testing upper, lower, and boundary limits" },
      { name: "Equivalence Partitioning", level: "Intermediate", desc: "Dividing test data into valid and invalid partitions" },
      { name: "GUI & Usability Testing", level: "Intermediate", desc: "Validating responsiveness, layout, and user UX" },
      { name: "STLC & SDLC", level: "Advanced", desc: "Deep understanding of lifecycle phases and quality gates" }
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code",
    description: "Languages used for application development, scripting, data validation, and logic implementation.",
    skills: [
      { name: "Python", level: "Proficient", desc: "Application scripting, GUI with Tkinter, algorithmic problem solving" },
      { name: "Java", level: "Proficient", desc: "Core Java, OOP principles, JavaFX desktop applications, JDBC" },
      { name: "C Programming", level: "Intermediate", desc: "Fundamental data structures, pointers, memory concepts" },
      { name: "SQL", level: "Proficient", desc: "Complex queries, joins, subqueries, grouping, aggregations" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced", desc: "Encapsulation, inheritance, polymorphism, abstraction" },
      { name: "Data Structures & Algorithms", level: "Intermediate", desc: "Arrays, linked lists, stacks, queues, trees, search & sort" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Backend",
    icon: "Database",
    description: "Relational database systems, data persistence, schema design, and backend verification.",
    skills: [
      { name: "PostgreSQL", level: "Proficient", desc: "Relational schema design, constraints, query optimization" },
      { name: "MS SQL Server", level: "Intermediate", desc: "Database configuration, tables, relational data handling" },
      { name: "JDBC (Java DB Connectivity)", level: "Proficient", desc: "Prepared statements, transactions, result sets" },
      { name: "CRUD Operations", level: "Advanced", desc: "Reliable create, read, update, delete workflows" },
      { name: "Schema Normalization", level: "Intermediate", desc: "Designing 1NF, 2NF, 3NF structures to eliminate redundancy" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Environments",
    icon: "Terminal",
    description: "Development environments, version control, and GUI building tools.",
    skills: [
      { name: "Git", level: "Proficient", desc: "Version control, branching, committing, merging, rebasing" },
      { name: "GitHub", level: "Proficient", desc: "Repository management, code review, documentation" },
      { name: "VS Code", level: "Proficient", desc: "Primary code editor, debugging, extension ecosystem" },
      { name: "IntelliJ IDEA", level: "Intermediate", desc: "Java development, project structuring, testing" },
      { name: "Scene Builder & JavaFX", level: "Intermediate", desc: "Designing desktop user interfaces and FXML layout" },
      { name: "Tkinter", level: "Intermediate", desc: "Python GUI layout, event handling, widget binding" }
    ]
  },
  {
    id: "soft-skills",
    title: "Professional & Soft Skills",
    icon: "CheckCircle",
    description: "Interpersonal and analytical strengths that contribute to effective engineering collaboration.",
    skills: [
      { name: "Meticulous Attention to Detail", level: "High", desc: "Spotting subtle inconsistencies and edge-case errors" },
      { name: "Analytical Problem Solving", level: "High", desc: "Breaking down complex systems to isolate root causes" },
      { name: "Clear Defect Communication", level: "High", desc: "Articulating bugs and technical issues clearly to developers" },
      { name: "Team Collaboration", level: "High", desc: "Active participant in agile discussions, standups, and reviews" },
      { name: "Continuous Learning", level: "High", desc: "Eagerly adopting automation tools (Selenium, Playwright)" }
    ]
  }
];

export const education = [
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "La Grandee International College",
    university: "Affiliated with Pokhara University",
    location: "Simalchaur, Pokhara, Nepal",
    period: "2021 – Present (7th Semester Ongoing)",
    status: "In Progress",
    description:
      "Comprehensive four-year degree program in computer applications and software engineering. Developing deep theoretical understanding and hands-on laboratory experience in software development, database design, system architecture, and quality testing.",
    courses: [
      "Software Engineering",
      "Database Management Systems (DBMS)",
      "Data Structures and Algorithms (DSA)",
      "Web Technology & Development",
      "Object-Oriented Programming (Java & C++)",
      "Computer Graphics",
      "Operating Systems",
      "Computer Networks"
    ],
    highlights: [
      "Developed academic software systems including JavaFX Quiz Game and PostgreSQL MARAZ backend.",
      "Completed practical laboratories in SQL query design, database normalization, and manual software testing.",
      "Consistently maintained strong academic and practical project performance."
    ]
  },
  {
    id: "plus-two",
    degree: "+2 Science (Higher Secondary Education)",
    institution: "Janapriya Multiple Campus",
    university: "National Examinations Board (NEB)",
    location: "Pokhara, Nepal",
    period: "Completed",
    status: "Graduated",
    gpa: "GPA 3.41",
    description:
      "Rigorous pre-university academic curriculum focusing on sciences, analytical mathematics, and logical reasoning.",
    courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "English",
      "Biology",
      "Nepali"
    ],
    highlights: [
      "Achieved an outstanding GPA of 3.41.",
      "Built a solid foundation in analytical thinking, problem-solving, and scientific methodologies."
    ]
  }
];

export const contactInfo = {
  email: profile.email,
  phone: profile.phone,
  displayPhone: "+977 9764806842",
  location: profile.location,
  github: profile.github,
  githubDisplay: "github.com/Manishadh10",
  availability: "Open to full-time, part-time, or contract QA & testing opportunities.",
  responseTime: "Typically replies within 24 hours"
};
