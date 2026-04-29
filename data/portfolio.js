// ============================================================
// PORTFOLIO DATA — edit this file to update your site
// ============================================================

window.PORTFOLIO = {
  // ---------- PERSONAL ----------
  name: "Joaquin Alec P. Hao",
  shortName: "Joaquin Hao",
  tagline: "The engineer who does it all.",
  subtagline: "Code, circuits, clouds — and everything between.",
  bio: "Graduating Computer Engineering student at Jose Rizal University with a hands-on appetite for data, systems, and things that plug in. I move comfortably between a SQL console, an Android Studio project, and a breadboard — and I ship.",
  location: "Antipolo City, Philippines",
  email: "joaquinhao@gmail.com",
  phone: "+63 917 532 2255",
  portrait: "assets/portrait.jpg",
  resume: "assets/Hao_Joaquin_Resume.pdf",

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/joaquin-alec-hao-1a9861320/", handle: "linkedin.com/in/joaquin-alec-hao" },
    { label: "GitHub",   href: "https://github.com/MrWack20", handle: "github.com/MrWack20" },
    { label: "Email",    href: "mailto:joaquinhao@gmail.com", handle: "joaquinhao@gmail.com" },
  ],

  stats: [
    { value: 7000, suffix: "+", label: "Records cleaned & reconciled at IT Group" },
    { value: 10,   suffix: "K+", label: "Pokémon cards indexed in my TCG app" },
    { value: 90,   suffix: "%",  label: "API payload reduction, sub-1s search" },
    { value: 4,    suffix: "",   label: "Certifications earned to date" },
  ],

  education: [
    {
      school: "Jose Rizal University",
      location: "Mandaluyong City, Philippines",
      degree: "Bachelor of Science in Computer Engineering",
      period: "Graduating 2026",
      note: "Active in campus tech orgs and pitch competitions.",
    },
  ],

  // ---------- THESIS ----------
  thesis: {
    title: "Design and Development of an Intelligent Robotic Assistant for Campus Information Management",
    period: "2025 — 2026",
    advisors: "To be filled",
    status: "Completed",
    blurb: "Commissioned by the Dean of the Computer Studies and Engineering Department at Jose Rizal University, this thesis merged two groups into a single robotic system capable of answering campus inquiries through natural conversation and autonomous navigation. The robot accepts spoken queries and responds via a Retrieval-Augmented Generation (RAG) pipeline — drawing grounded answers from an uploaded knowledge base through a multi-LLM architecture. An emotion detection module analyzes the user's facial expression and tailors responses accordingly, while an expressive LCD avatar displays dynamic facial animations to make interactions feel lifelike. Navigation combines LiDAR, ultrasonic, and infrared IR sensors; movement logic runs on an ESP32 connected via USB to a Raspberry Pi 5. A web-based admin panel enables remote startup, knowledge-base management, and hardware health monitoring. Built with sustainable and recyclable materials in alignment with the UN SDGs, and powered by a 4-cell lead-acid battery for extended operation.",
    topics: ["Retrieval-Augmented Generation", "Multi-LLM Architecture", "Emotion Detection", "LiDAR-assisted Navigation"],
    members: {
      software: ["Rizelle B. Bautista", "Joaquin Alec P. Hao", "Juan Carlos N. Bertos", "Fiona Yvonne D.C. Canas"],
      hardware: ["Mhar Christian U. Bongolan", "Francis Andrew R. Seballos", "Christopher John A. Gravoso", "Johann Maier T. Cuisia", "Gary James A. Gambol"],
    },
    myContributions: [
      "Finance management — handled budget and component procurement for both teams",
      "Emotion detection model: dataset gathering, cleaning, and model training",
      "Cross-team coordination: system integration and end-to-end testing between software and hardware",
      "LiDAR-centered navigation research — tested SLAM on Raspberry Pi, pivoted to ESP32 hardcoded navigation due to component incompatibilities",
      "Software paper documentation management and documents oversight across both teams",
    ],
    videos: [
      { label: "Thesis Defense Presentation", id: "hE_q9dPcMeE" },
    ],
  },

  experience: [
    {
      org: "IT Group Inc.",
      role: "Student Intern",
      period: "Feb 2026 — Apr 2026",
      location: "On-site",
      summary: "NetSuite administration, data governance, and system onboarding.",
      bullets: [
        "Administered NetSuite ERP user roles, permissions, and sandbox environments.",
        "Built and executed SuiteQL queries and saved searches to extract and validate datasets.",
        "Cleaned, merged, and reconciled 3,000+ customer records and 4,000+ item records for migration.",
        "Imported employee records: job titles, name formatting, supervisor IDs.",
        "Authored an ISMS Data Governance Handbook covering 7 systems (NetSuite, Celigo, Zoho CRM, Zoho Projects, Analytics Plus, Service Desk Plus, BigQuery).",
        "Produced ISMS docs across Governance, Access & Administration, Operations, and Evidence.",
        "Prepared a formal user-license proposal for business-development role changes.",
        "Built a NetSuite training plan: syllabus, slide decks, and onboarding user guide.",
      ],
      tags: ["NetSuite", "SuiteQL", "Data Governance", "ISMS", "ERP"],
    },
    {
      org: "PLDT-Smart InnoGen Pitch Competition",
      role: "Participant — Giga 25 Finalist",
      period: "Nov 2024 — Sep 2025",
      location: "Philippines",
      summary: "Lead backend dev on a mobile + web platform for PWD employment.",
      bullets: [
        "Proposed a job-application platform improving accessibility and employment for persons with disabilities.",
        "Authored concept paper and wireframes.",
        "Lead developer for backend and database.",
        "Built and connected Firebase to the Android Studio app.",
        "Main compiler — integrated frontend and backend.",
      ],
      tags: ["Firebase", "Android Studio", "Leadership", "Accessibility"],
    },
    {
      org: "Byte Forward Hackathon 2025",
      role: "Participant",
      period: "Aug 2025",
      location: "Philippines",
      summary: "Backend + AI chatbot for a 24-hour digital-services onboarding app.",
      bullets: [
        "Proposed an app helping non-tech-savvy users get set up with digital services in 24 hours.",
        "Designed and developed the backend.",
        "Implemented an AI chatbot feature.",
      ],
      tags: ["Backend", "AI Chatbot", "Hackathon"],
    },
    {
      org: "AWS Learning Clubs — JRU Chapter",
      role: "The Secretariat (Co-founding Executive)",
      period: "Mar 2025 — Present",
      location: "Jose Rizal University",
      summary: "Co-founded a cloud-focused student org; run docs and finances.",
      bullets: [
        "Co-founding executive for the JRU chapter.",
        "Hosted and attended seminars, workshops, and events on AWS cloud topics.",
        "Managed the organization's documents and finances.",
      ],
      tags: ["AWS", "Leadership", "Community"],
    },
    {
      org: "Analytics & AI Association of the Philippines",
      role: "Data Engineer Intern",
      period: "Feb 2025 — Jan 2026",
      location: "Philippines",
      summary: "File management, CRM migration, and continuous learning in analytics and AI.",
      bullets: [
        "Managed and backed up organizational files.",
        "Cleaned CRM data for migration to a new database.",
        "Attended conventions, deepening knowledge in analytics and AI.",
      ],
      tags: ["Data Engineering", "CRM", "Analytics"],
    },
  ],

  projects: [
    {
      slug: "pokemon-binder",
      title: "Pokémon TCG Online Binder Manager",
      period: "December 2025",
      blurb: "A full-stack card collection manager with real-time sync, drag-and-drop binders, and a ruthlessly optimized API.",
      highlight: "API payload cut 90%, search from 3–5s → sub-1s.",
      role: "Full-stack developer",
      stack: ["React", "Firebase Firestore", "Firebase Storage", "Pokémon TCG API"],
      bullets: [
        "Organized and managed collections with 1000+ card capacity per digital binder.",
        "Integrated Pokémon TCG REST API with filtering (set, type, rarity, language) and pagination across 10,000+ cards.",
        "Real-time cloud sync via Firestore; image hosting via Firebase Storage.",
        "Drag-and-drop card management and customizable UI themes with image upload.",
        "Optimized API queries: 90% payload reduction; sub-1s search response.",
      ],
    },
    {
      slug: "thrive",
      title: "THRIVE — Mobile Job Platform for PWDs",
      period: "June 2025",
      blurb: "An inclusive Android job application platform designed with and for persons with disabilities.",
      highlight: "Giga 25 Finalist at PLDT-Smart InnoGen.",
      role: "Lead backend developer",
      stack: ["Android Studio", "Firebase Realtime DB", "Java"],
      bullets: [
        "Designed Firebase Realtime Database schema for profiles, job listings, and application flows.",
        "Built core backend: auth, data storage, and application pipeline.",
        "Contributed to frontend and UI/UX decisions.",
      ],
      video: "nJzlzAAUDlA",
    },
    {
      slug: "inventory-system",
      title: "Company Inventory & Sales Management",
      period: "December 2024",
      blurb: "A Java + MySQL desktop system that digitized a real company's inventory, sales, and order flow.",
      highlight: "Replaced paper + spreadsheets with a role-based app.",
      role: "Sole developer",
      stack: ["Java", "MySQL", "Swing"],
      bullets: [
        "Custom desktop app for inventory tracking, sales analytics, and order management.",
        "Database-driven reporting with real-time updates.",
        "Role-based access control for secure handling of business data.",
      ],
    },
    {
      slug: "thesis-library",
      title: "JRU Thesis Library",
      period: "March 2024",
      blurb: "A web-based thesis library for Jose Rizal University — browse, search, upload, and download academic research.",
      highlight: "Published under the university after faculty collaboration.",
      role: "Lead designer & backend",
      stack: ["HTML", "PHP", "MySQL", "phpMyAdmin"],
      bullets: [
        "Web app to help students and faculty browse, search, and access research.",
        "Designed and implemented the database structure.",
        "PDF upload and download of documents.",
        "Led planning, architecture, and faculty collaboration for publication.",
      ],
    },
  ],

  // ---------- HARDWARE / ROBOTICS PROJECTS (fill in later) ----------
  hardwareProjects: [
    {
      slug: "hw-placeholder-1",
      title: "Hardware project — coming soon",
      period: "TBD",
      blurb: "Details of a circuit-design or robotics project will go here. Board diagrams, BOM, code, and photos will be added.",
      stack: ["Arduino", "C++", "Sensors"],
      status: "Placeholder",
    },
    {
      slug: "hw-placeholder-2",
      title: "IoT / Embedded project — coming soon",
      period: "TBD",
      blurb: "An embedded systems / IoT build will be documented here — use-case, design, and outcomes.",
      stack: ["ESP32", "MQTT", "Firmware"],
      status: "Placeholder",
    },
  ],

  skillGroups: [
    {
      name: "Data & Cloud",
      items: [
        { label: "SQL (MySQL, Oracle, PostgreSQL)", level: 90 },
        { label: "Firebase (Firestore, Realtime DB, Storage)", level: 88 },
        { label: "Data Engineering", level: 82 },
        { label: "AWS Cloud Practitioner", level: 75 },
      ],
    },
    {
      name: "Frontend",
      items: [
        { label: "HTML", level: 92 },
        { label: "CSS", level: 85 },
        { label: "ReactJS", level: 78 },
      ],
    },
    {
      name: "Backend & Systems",
      items: [
        { label: "Java", level: 85 },
        { label: "Python", level: 72 },
        { label: "PHP", level: 78 },
        { label: "NetSuite / SuiteQL", level: 70 },
      ],
    },
    {
      name: "Hardware & Other",
      items: [
        { label: "Embedded Systems & IoT", level: 72 },
        { label: "Circuit Design & Robotics", level: 75 },
        { label: "Technical Troubleshooting", level: 88 },
      ],
    },
  ],

  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2025" },
    { name: "AWS Cloud Quest: Cloud Practitioner", issuer: "Amazon Web Services", year: "2025" },
    { name: "DataCamp Certified Data Engineer Associate", issuer: "DataCamp", year: "2025" },
    { name: "CompTIA ITF+", issuer: "CompTIA", year: "2024" },
  ],

  // ---------- INTERESTS (expanded, personal) ----------
  interests: [
    "Emerging tech & innovation",
    "Gadget tinkering",
    "Circuit design",
    "Robotics development",
  ],

  personalFacts: [
    { label: "Favorite games",    value: "JRPGs, Pokémon, story-driven adventures" },
    { label: "Currently playing", value: "Add your current game here" },
    { label: "Anime",             value: "Always open to recommendations" },
    { label: "YouTube rabbit hole", value: "Tech deep-dives, engineering breakdowns, retrospectives" },
    { label: "Coffee or tea",     value: "Coffee — iced, strong" },
    { label: "Dream project",     value: "Something that mixes hardware and cloud in the real world" },
  ],

  // ---------- MUSIC (OST PLAYER) ----------
  // Add tracks here! To use your own files, drop them in assets/music/ and point `src` to them.
  // Any public, direct-URL MP3 works. If `src` is null, the track shows as locked (placeholder).
  music: [
    {
      title: "You Say Run",
      game: "My Hero Academia OST",
      src: "assets/music/My_Hero_Academia_OST-You_Say_Run.mp3",
    },
    {
      title: "Azalea Town Theme",
      game: "Pokémon HeartGold & SoulSilver",
      src: "assets/music/Azalea_Town_Pokémon_HGSS.mp3",
    },
    {
      title: "Route 10 Theme",
      game: "Pokémon Black & White",
      src: "assets/music/Pokemon_BlackWhite_Route_10.mp3",
    },
  ],
};
