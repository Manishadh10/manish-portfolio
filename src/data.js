// Portfolio Data for Manish Adhikari

export const profile = {
  name: "Manish Adhikari",
  role: "QA & Software Testing Engineer",
  status: "Available for QA & Software Roles",
  tagline: "Software Testing Engineer specializing in manual testing, REST API verification with Postman, and relational database validation.",
  avatar: "/profile.jpg",
  bio: "I'm a 7th semester Bachelor of Computer Applications (BCA) student at La Grandee International College (affiliated with Pokhara University) and currently interning as a QA / Software Testing Intern at Pravidhi Digital Innovation in Pokhara. I focus on systematic manual testing, REST API validation with Postman, SQL database verification, and structured defect lifecycles.",
  location: "Pokhara, Gandaki, Nepal",
  email: "adhikarimanish2006@gmail.com",
  github: "https://github.com/Manishadh10",
  githubUsername: "Manishadh10",
  stats: [
    { label: "Current Role", value: "QA Intern", note: "Pravidhi Digital Innovation" },
    { label: "Education", value: "BCA (7th Sem)", note: "Pokhara University" },
    { label: "Core Focus", value: "Manual & API", note: "Postman, SQL & STLC" },
    { label: "Location", value: "Pokhara, Nepal", note: "Open to Remote & Onsite" }
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
    id: "manual-testing",
    title: "Manual Testing & QA Fundamentals",
    description: "Writing clear test cases, executing functional, smoke, sanity, and regression passes, and applying boundary value analysis to catch defects.",
    icon: "ShieldCheck",
    badge: "Core Discipline"
  },
  {
    id: "api-testing",
    title: "API Testing with Postman",
    description: "Testing RESTful endpoints using Postman, verifying HTTP methods, status codes, query parameters, headers, and JSON response bodies.",
    icon: "Network",
    badge: "API Testing"
  },
  {
    id: "backend-db",
    title: "SQL & Database Verification",
    description: "Validating backend data records in PostgreSQL and MySQL, writing SQL queries to ensure data persistence matches application state.",
    icon: "Database",
    badge: "Database"
  },
  {
    id: "defect-mgmt",
    title: "Defect Logging & Tracking",
    description: "Isolating bugs, drafting clear reproduction steps with logs and screenshots, and retesting fixed defects across the bug lifecycle.",
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
  title: "MARAZ",
  category: "Full Stack E-Commerce",
  categoryKey: "backend",
  tech: [
    "React",
    "PostgreSQL",
    "SQL",
    "Backend Development",
    "Relational Database"
  ],
  badge: "Group Project",

  summary:
    "A full-stack e-commerce platform built with React and PostgreSQL, featuring product management, customer accounts, shopping cart, and order processing.",

  description:
    "Collaborated as a backend-focused developer in a group project to develop MARAZ, an e-commerce website. Contributed to database design, relational modeling, and backend data management using PostgreSQL. Worked on managing product information, customer records, shopping cart data, and order processing. Implemented SQL queries and database operations while focusing on data normalization, relational integrity, and efficient data retrieval. Also collaborated with the frontend team to integrate backend functionality with the React-based user interface.",

  testingHighlights: [
    "Performed database validation testing to ensure proper relationships between users, products, categories, carts, and orders.",
    "Tested CRUD operations for product management, customer records, and order processing.",
    "Verified primary keys, foreign keys, unique constraints, and cascading actions to maintain data integrity.",
    "Tested shopping cart and order operations to ensure accurate and consistent data handling.",
    "Optimized SQL queries and multi-table joins for efficient product and order data retrieval.",
    "Validated edge cases involving null values, duplicate records, and invalid data."
  ],

  features: [
    "Responsive e-commerce user interface using React",
    "Product listing and category management",
    "Customer registration and account management",
    "Shopping cart management",
    "Order placement and order management",
    "PostgreSQL relational database design",
    "Database normalization and integrity constraints",
    "Efficient SQL queries and relational data retrieval"
  ],
  github: "https://github.com/Bachelor-Of-Computer-Application/project-coderguyzz.git"
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
    id: "manual-testing",
    title: "Manual Testing & QA Fundamentals",
    icon: "ShieldCheck",
    description: "Core manual testing principles, scenario design, and structured defect detection.",
    skills: [
      { name: "Manual Testing", desc: "Executing end-to-end user flows, functional checks, and GUI validation" },
      { name: "Test Case Authoring", desc: "Writing clear test scenarios with preconditions, input data, and expected outcomes" },
      { name: "Smoke & Sanity Testing", desc: "Verifying basic application stability on fresh builds and isolated modules" },
      { name: "Functional & Regression Testing", desc: "Validating feature acceptance and ensuring bug fixes do not break existing features" },
      { name: "Boundary Value Analysis (BVA)", desc: "Applying boundary limits (minimum, maximum, edge values) to detect edge-case defects" },
      { name: "Equivalence Partitioning (EP)", desc: "Dividing test data into valid and invalid partitions to optimize test coverage" },
      { name: "Bug Reporting & Lifecycle", desc: "Documenting actionable steps to reproduce, actual vs. expected results, and logs" },
      { name: "STLC & Agile Basics", desc: "Understanding testing phases, user stories, acceptance criteria, and sprint cycles" }
    ]
  },
  {
    id: "api-testing",
    title: "API Testing with Postman",
    icon: "Network",
    description: "Hands-on REST API validation using Postman for request and response verification.",
    skills: [
      { name: "REST API Basics", desc: "Understanding endpoints, HTTP request/response lifecycles, and client-server flow" },
      { name: "HTTP Request Methods", desc: "Sending and validating GET, POST, PUT, and DELETE requests in Postman" },
      { name: "HTTP Status Code Verification", desc: "Checking status codes (200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Error)" },
      { name: "Request Parameters & Headers", desc: "Configuring query parameters, path variables, authorization headers, and content types" },
      { name: "JSON Response Validation", desc: "Inspecting response bodies, verifying key-value data types, and checking payload structure" },
      { name: "Postman Collections", desc: "Organizing endpoints into organized folders, requests, and environment variables" },
      { name: "API Error & Negative Testing", desc: "Verifying error messages, missing parameter handling, and invalid inputs" },
      { name: "Chrome DevTools Network Tab", desc: "Inspecting XHR/fetch network calls, status codes, request payloads, and response headers" }
    ]
  },
  {
    id: "databases",
    title: "Database & SQL Verification",
    icon: "Database",
    description: "Verifying data persistence and querying relational databases to ensure data consistency.",
    skills: [
      { name: "SQL Queries", desc: "Writing SELECT, WHERE, ORDER BY, GROUP BY, and multi-table JOIN queries" },
      { name: "CRUD Validation", desc: "Verifying that create, read, update, and delete actions reflect accurately in the database" },
      { name: "PostgreSQL & MySQL", desc: "Working with relational database tables, primary/foreign keys, and data types" },
      { name: "Data Integrity Checks", desc: "Checking null constraints, unique fields, and relational relationships" },
      { name: "JDBC Connectivity (Java)", desc: "Prepared statements, connection handling, and executing database queries from Java" }
    ]
  },
  {
    id: "programming",
    title: "Programming & Academic Foundations",
    icon: "Code",
    description: "Core programming languages and computer science concepts learned during BCA coursework.",
    skills: [
      { name: "Python", desc: "Basic scripting, problem solving, file operations, and desktop GUI using Tkinter" },
      { name: "Java", desc: "Core OOP principles (Inheritance, Polymorphism, Encapsulation), JavaFX desktop apps" },
      { name: "C Programming", desc: "Fundamental programming logic, data structures, pointers, and memory basics" },
      { name: "OOP Concepts", desc: "Designing structured, modular code using classes, objects, and interfaces" },
      { name: "Data Structures Basics", desc: "Understanding arrays, linked lists, stacks, queues, and searching/sorting algorithms" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Testing Environment",
    icon: "Terminal",
    description: "Practical developer and QA tools used for testing, documentation, and version control.",
    skills: [
      { name: "Postman", desc: "Primary API testing tool for sending requests, inspecting responses, and organizing collections" },
      { name: "Chrome DevTools", desc: "Inspecting elements, console errors, network requests, and viewport responsiveness" },
      { name: "Git & GitHub", desc: "Version control, cloning repositories, branches, and pushing project code" },
      { name: "VS Code", desc: "Primary text and code editor for scripting, notes, and documentation" },
      { name: "Test Documentation Sheets", desc: "Drafting test scenarios, test case execution sheets, and defect matrices in Excel/Sheets" }
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
    period: "2023 – Present (7th Semester Ongoing)",
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
  location: profile.location,
  github: profile.github,
  githubDisplay: "github.com/Manishadh10",
  availability: "Open to full-time, part-time, or contract QA & testing opportunities.",
  responseTime: "Typically replies within 24 hours"
};
