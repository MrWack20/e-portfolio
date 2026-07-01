// ============================================================
// PORTFOLIO DATA — edit this file to update your site
// ============================================================

window.PORTFOLIO = {
  // ---------- PERSONAL ----------
  name: "Joaquin Alec P. Hao",
  shortName: "Joaquin Hao",
  tagline: "The engineer who does it all.",
  subtagline: "Code, circuits, clouds — and everything between.",
  bio: "Computer Engineering graduate from Jose Rizal University, Cum Laude, with a hands-on appetite for data, systems, and things that plug in. I move comfortably between a SQL console, an Android Studio project, and a breadboard — and I ship. I work with AI tools like Claude Code as part of my daily workflow, using them as a force multiplier while staying sharp on the fundamentals.",
  location: "Antipolo City, Philippines",
  email: "joaquinhao@gmail.com",
  phone: "+63 917 532 2255",
  portrait: "assets/portrait.jpg",
  resume: "assets/Hao_Joaquin_Resume_Updated.pdf",

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
      period: "2022 — 2026",
      note: "Graduated Cum Laude · Active in campus tech orgs and pitch competitions.",
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
    teamPhoto: "assets/img/thesis-team.jpg",
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
    {
      org: "J's Pica-Pica atbp.",
      role: "Co-founder — Finance, Systems & Packaging",
      period: "2023 — Present",
      location: "Online · Philippines",
      badge: "Ongoing · Year 3",
      summary: "3-person family snack reselling business run with my mom and younger brother. I own finance, packaging design, and the internal tooling that keeps operations lean.",
      bullets: [
        "Head of Finance — manage capital allocation (PHP 12,205 starting capital this year), COGS tracking, sales records, and revenue reporting across all product SKUs.",
        "Built a full Google Sheets sales tracker with live inventory, COGS calculator, purchase logs, and a business performance dashboard — replacing manual spreadsheet work.",
        "Developed order-tracking and inventory automation using Claude Code to reduce repetitive manual data entry for the team.",
        "Packaging Designer — design product labels with a clean, minimal black-and-white aesthetic and evaluate packaging approach per SKU.",
        "Current product: Cornick 250g (PHP 180/bag, bundle 3 for PHP 520); previously ran Calamansi juice, dried mango strips, and spicy butcheron.",
      ],
      tags: ["Google Sheets", "Claude Code", "Finance & Ops", "Automation", "Packaging Design"],
    },
  ],

  // ---------- PROJECTS ----------
  // To add real screenshots: drop images into assets/img/ and list them in a project's
  // `screenshots` array — they render as a click-to-zoom gallery on the card.
  //   screenshots: ["assets/img/shot-wackai-1.jpg", "assets/img/shot-wackai-2.jpg"],
  // Suggested names: shot-wackai-*.jpg · shot-voyageai-*.jpg · shot-pokemon-*.jpg · shot-thesis-*.jpg
  projects: [
    {
      slug: "wackai",
      repo: "https://github.com/MrWack20/WackAI",
      cover: "assets/img/cover-wackai.jpg",
      screenshots: [],
      title: "WackAI — Offline Local-First AI Assistant & Coding Agent",
      period: "June 2026",
      blurb: "A fully offline, local-first personal AI system that runs entirely on my own hardware through Ollama — no cloud, no accounts, no cost. Part Claude-Code-style coding agent, part multimodal assistant, part autonomous operator — built solo in Python across 29 iterative releases (~11,600 lines, 81 tests).",
      highlight: "Self-built, 100% offline alternative to Claude Code.",
      role: "Sole developer",
      stack: ["Python", "PySide6 / Qt", "Ollama", "Local LLMs", "RAG", "Knowledge Graph", "Multi-Agent AI", "PyInstaller"],
      bullets: [
        "Engineered an agentic coding loop rivaling Claude Code: text-protocol file read/write, diff-based search/replace edits with a three-tier matcher and self-healing retry loop, and terminal command execution gated by per-action MCP-style allow/ask/deny permissions.",
        "Built an intelligence layer — a SQLite knowledge graph plus a learning engine that distills chats into durable facts and triples, a multi-agent panel (specialist skills + a synthesis pass), and an autonomous goal loop bounded by a step budget.",
        "Implemented capability modes (Auto / Coding / Research / Chat) that gate protocols per turn, automatic best-model selection per task, and a protocol-reliability eval harness — a 14B local model scores 88%.",
        "Added automatic RAG over the workspace (local embeddings, pure-Python cosine) with persistent memory, projects, summaries, and a token-budgeted context manager that never drops the system persona.",
        "Created a full multimodal stack: offline voice in/out (Vosk + neural en-PH TTS), image annotation and Stable-Diffusion generation, video summarization (ffmpeg + transcription), and a live screen-watch mode that narrates on-screen guidance like a tutor.",
        "Wired a multi-provider system (local Ollama over LAN, OpenAI-compatible, Anthropic), a plugin framework (GitHub issues/PRs/commits + repo create & push, tokens scrubbed), cited internet search, scheduled routines, background execution, and a prompt queue.",
        "Added no-cloud multi-device sync over any shared folder (two-way, per-category, with device-only private chats), a PIN-protected phone PWA streaming live replies, and portfolio-awareness that scanned 25 of my own projects into memory.",
        "Packaged for real distribution — PyInstaller Windows .exe + Inno Setup installer, crash logging, automatic pre-overwrite backups, settings export/import, and Windows auto-start — backed by an 81-test pytest suite.",
      ],
    },
    {
      slug: "quotation-system",
      repo: "https://github.com/MrWack20/Symmetry_Glass_Quotation_System",
      cover: "assets/img/cover-quotation.jpg",
      screenshots: [],
      title: "Glass & Aluminum Quotation System",
      period: "April 2025 — Present",
      blurb: "An offline Windows desktop app that automates quoting for a glass & aluminum construction business — auto-generated technical drawings, material calculations, and one-click PDF export. Built for my family's business and now in beta with the sales team.",
      highlight: "Quote turnaround cut from ~30 min to under 2 · 165+ automated tests · in production beta.",
      role: "Sole developer",
      stack: ["Python", "PySide6 / Qt", "SQLite", "ReportLab", "PyMuPDF", "Windows DPAPI", "PyInstaller"],
      bullets: [
        "Designed and built an offline Windows desktop application for automated glass/aluminum construction quoting.",
        "Eliminated manual PDF design work with auto-generated technical drawings, material calculations, and one-click quote export — reducing turnaround from ~30 minutes to under 2 minutes per job.",
        "Architected an encrypted SQLite database (Windows DPAPI) to secure customer data and pricing — data stays protected even if the device is lost or copied to another machine.",
        "Added a digital-signature overlay on exported PDFs to prevent customer tampering and forgery.",
        "Built an interactive grid-based 'Simple Mode' for rapid quoting without material-breakdown complexity, plus a company-branding editor, reusable saved figure templates, PDF preview, and crash-safe data recovery.",
        "Shipped as a packaged .exe backed by 165+ automated tests — currently in beta with the sales team.",
      ],
    },
    {
      slug: "pokemon-binder",
      repo: "https://github.com/MrWack20/pokemon-binder",
      cover: "assets/img/cover-pokemon.jpg",
      screenshots: [],
      title: "Pokémon TCG Online Binder Manager",
      period: "December 2025",
      blurb: "A full-stack card collection manager with real-time sync, drag-and-drop binders, and a ruthlessly optimized API — built end-to-end with Claude Code.",
      highlight: "API payload cut 90%, search from 3–5s → sub-1s.",
      role: "Full-stack developer",
      stack: ["React", "Supabase", "Firebase Storage", "Pokémon TCG API", "Claude Code"],
      demo: "https://pokemon-binder-gamma.vercel.app/",
      demoStyle: "pokeball",
      bullets: [
        "Organized and managed collections with 1000+ card capacity per digital binder.",
        "Integrated Pokémon TCG REST API with filtering (set, type, rarity, language) and pagination across 10,000+ cards.",
        "Migrated cloud database from Firebase Firestore to Supabase for improved query performance and scalability.",
        "Real-time sync via Supabase; image hosting via Firebase Storage.",
        "Drag-and-drop card management and customizable UI themes with image upload.",
        "Optimized API queries: 90% payload reduction; sub-1s search response.",
        "Built end-to-end with Claude Code — a live example of AI-assisted development in a real production workflow.",
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
      slug: "voyageai",
      repo: "https://github.com/MrWack20/voyageai",
      cover: "assets/img/cover-voyageai.jpg",
      screenshots: [],
      title: "VoyageAI — Collaborative AI Travel Planner",
      period: "May 2026",
      blurb: "Solo-built production SaaS for collaborative group travel — vote on places, AI-optimize itineraries against weather and fairness, and chat with an assistant that works from your trip's actual data. Zero paid services.",
      highlight: "Solo-built. Next 16 + Supabase + Gemini. Live in production.",
      role: "Sole developer",
      stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind v4", "Vercel AI SDK", "Gemini AI", "MapLibre", "Claude Code"],
      demo: "https://voyageai-one.vercel.app/",
      demoStyle: "launch",
      bullets: [
        "Solo-built collaborative travel SaaS — trips, wishlists with per-user priority voting, day-by-day itinerary board, group budget splitting, live map, and AI assistant. All realtime.",
        "AI optimization engine: DBSCAN proximity clustering → nearest-neighbor TSP per day → four-axis scoring (satisfaction, fairness via Jain's index, efficiency, weather-fit) → human-reviewable diff applied transactionally.",
        "AI assistant streams Gemini / Groq responses (8 free models) via grounded tool calls into the trip's own data — never invents itinerary items, shows what it changed before anything persists.",
        "Three-layer collaboration model: PostGIS + RLS enforces who sees what; server actions enforce who can do what; UI gates affordances by role — no repeated access-control logic across features.",
        "Fixed a PostGIS EWKB footgun: added generated lat/lng columns via ST_Y/ST_X migrations so JS always reads coordinates as plain numbers — silently broke every centroid query for weeks before the fix.",
        "Free-tier-only architecture across 7 providers (Gemini, MapTiler, Nominatim, OpenWeather, Frankfurter, Supabase, Vercel) — deliberately production-grade with no vendor lock-in.",
        "Custom preflight lint catches 8 runtime gotchas that TSC and ESLint both miss: Zod schema shape, 'use server' re-export rules, missing router.refresh() after mutations, NEXT_REDIRECT re-throw. Runs in <2 s before every push.",
      ],
    },
    {
      slug: "thesis-library",
      cover: "assets/img/cover-thesis-library.jpg",
      repos: [
        { label: "v1 · original (I led & built it)", url: "https://github.com/MrWack20/Thesis-Library-Website-Ver.1" },
        { label: "v2 · merged & published", url: "https://github.com/MrWack20/Thesis-Library-Website-Ver.2" },
      ],
      title: "JRU Thesis Library",
      period: "2024 — 2025",
      blurb: "A web-based thesis library for Jose Rizal University — browse, search, upload, and download academic research. I led and built the original system; after recognition from the department chair, it was merged with two other teams and published campus-wide.",
      highlight: "Recognized by the department chair and published campus-wide.",
      role: "Team lead & backend",
      stack: ["HTML", "PHP", "MySQL", "phpMyAdmin"],
      bullets: [
        "Built a web app for students and faculty to browse, search, and access academic research; designed the database structure and PDF upload/download.",
        "v1 — Led my group as team lead and built the original system end-to-end.",
        "v2 — After recognition from the department chair, our team merged with two other groups to publish the system campus-wide.",
      ],
    },
  ],

  // ---------- HARDWARE / ROBOTICS PROJECTS ----------
  // To add a photo: drop the image into assets/img/ using the filename in each `image` field below.
  // Supported formats: .jpg, .jpeg, .png, .webp
  hardwareProjects: [
    {
      slug: "solar-tracker",
      title: "Solar Tracker without Arduino",
      period: "2023",
      blurb: "Autonomous dual-axis solar tracking system built entirely from discrete logic ICs — no microcontroller, no Arduino. Four LDR sensors measure differential sunlight intensity; LM358 op-amp comparators translate the voltage differences into directional signals; an L293D H-bridge drives two MG996 servo motors to physically rotate the panel toward peak irradiance. A 555 Timer IC handles circuit timing, and the whole system runs off 18650 Li-ion cells with a TP4056 charging module — optionally recharged by the very solar panel it tracks.",
      stack: ["LM358 Op-Amp", "L293D Motor Driver", "555 Timer IC", "LDR Sensors", "MG996 Servo Motors", "Logic Gates"],
      status: "Completed",
      image: "assets/img/hw-solar-tracker.jpg",
      images: [
        { src: "assets/img/hw-solar-tracker.jpg",         caption: "Assembled tracker" },
        { src: "assets/img/hw-solar-tracker-2.jpg",       caption: "Silhouetted against the sky" },
        { src: "assets/img/hw-solar-tracker-lit.jpg",     caption: "Circuit powered — LEDs active" },
        { src: "assets/img/hw-solar-tracker-circuit.jpg", caption: "Full logic circuit on breadboard" },
      ],
      materials: [
        "1× Breadboard",
        "2× MG996 Servo Motor",
        "1× L293D Motor Driver",
        "1× 555 Timer IC",
        "2× LM358 IC",
        "1× 100kΩ Variable Resistor",
        "1× 10kΩ Variable Resistor",
        "2× 1N4148 Diodes",
        "5× 1kΩ Resistor",
        "4× 10kΩ Resistor",
        "1× 104pF Capacitor",
        "1× 103pF Capacitor",
        "4× LEDs",
        "4× LDR Sensors",
        "1× TP4056 Li-ion Charger Module",
        "2× 18650 Battery (3.7V)",
        "1× 5V 6W Solar Panel",
        "1× ON/OFF Switch",
        "1× LM2587 DC-DC Boost Converter",
      ],
    },
    {
      slug: "fire-fighting-robot",
      title: "Automatic Fire Fighting Robot",
      period: "February 2025",
      blurb: "Arduino-driven autonomous fire-detection and suppression robot. Infrared flame sensors scan a wide arc to locate a fire source; the robot steers toward it, a servo motor aims the nozzle, and a DC water pump activates to extinguish the flame. Presented at the JRU Automated Systems showcase.",
      stack: ["Arduino", "IR Flame Sensors", "L298N Motor Driver", "DC Water Pump", "Servo Motor", "DC Motors"],
      status: "Completed",
      image: "assets/img/hw-fire-fighting-robot.jpg",
      images: [
        { src: "assets/img/hw-fire-fighting-robot-exhibit.jpg", caption: "JRU Automated Systems showcase" },
        { src: "assets/img/hw-fire-fighting-robot-top.jpg",     caption: "Top view — component layout" },
        { src: "assets/img/hw-fire-fighting-robot.jpg",         caption: "Early build" },
        { src: "assets/img/hw-fire-fighting-robot-3.jpg",       caption: "Final version" },
        { src: "assets/img/hw-fire-fighting-robot-2.jpg",       caption: "Testing phase" },
      ],
      materials: [],
    },
    {
      slug: "sumobot",
      title: "Wireless Controlled SumoBot with ESP32",
      period: "TBD",
      blurb: "Details coming soon.",
      stack: ["ESP32"],
      status: "Coming Soon",
      image: "assets/img/hw-sumobot.jpg",
    },
    {
      slug: "led-cube",
      title: "4×4×4 LED Matrix Cube",
      period: "February 2025",
      blurb: "Hand-soldered 4×4×4 LED matrix cube with 64 individually multiplexed nodes, driven by an Arduino Nano. Custom firmware cycles through layered animation sequences — chase, rain, random fill, and spiral — across a mixed-color LED array. Controller built on a custom proto-PCB with an Arduino Nano at its core.",
      stack: ["Arduino Nano", "Shift Registers", "Multi-color LEDs", "Custom Proto-PCB"],
      status: "Completed",
      image: "assets/img/hw-led-cube-dark.jpg",
      images: [
        { src: "assets/img/hw-led-cube-dark.jpg",    caption: "Final build — full glow" },
        { src: "assets/img/hw-led-cube.jpg",         caption: "Multi-color animation" },
        { src: "assets/img/hw-led-cube-top.jpg",     caption: "Assembled structure — overhead" },
        { src: "assets/img/hw-led-cube-layer.jpg",   caption: "Single layer — hand-soldered grid" },
        { src: "assets/img/hw-led-cube-green.jpg",   caption: "First light test" },
        { src: "assets/img/hw-led-cube-circuit.jpg", caption: "Arduino Nano controller board" },
      ],
      materials: [],
    },
    {
      slug: "power-supply",
      title: "30V DIY Power Supply / Regulator",
      period: "TBD",
      blurb: "Details coming soon.",
      stack: [],
      status: "Coming Soon",
      image: "assets/img/hw-power-supply.jpg",
    },
    {
      slug: "bugbot",
      title: "Arduino Powered BugBot",
      period: "TBD",
      blurb: "Details coming soon.",
      stack: ["Arduino", "C++"],
      status: "Coming Soon",
      image: "assets/img/hw-bugbot.jpg",
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
    {
      name: "AI & Tooling",
      items: [
        { label: "Claude Code (AI-assisted development)", level: 84 },
        { label: "LLM integration & prompt engineering", level: 78 },
      ],
    },
  ],

  // badge: drop the image into assets/img/ using the filename shown below
  certifications: [
    { name: "AWS Certified Cloud Practitioner",        issuer: "Amazon Web Services", year: "2025", badge: "assets/img/cert-aws-ccp.png" },
    { name: "AWS Cloud Quest: Cloud Practitioner",     issuer: "Amazon Web Services", year: "2025", badge: "assets/img/cert-aws-cloud-quest.png" },
    { name: "DataCamp Certified Data Engineer Associate", issuer: "DataCamp",         year: "2025", badge: "assets/img/cert-datacamp-dataengassoc.png" },
    { name: "CompTIA ITF+",                            issuer: "CompTIA",             year: "2024", badge: "assets/img/cert-comptia-itf.png" },
  ],

  // ---------- INTERESTS (expanded, personal) ----------
  interests: [
    "Emerging tech & innovation",
    "Gadget tinkering",
    "Circuit design",
    "Robotics development",
  ],

  personalFacts: [
    { label: "Favorite games",      value: "JRPGs, Pokémon, story-driven adventures" },
    { label: "Anime",               value: "Always open to recommendations" },
    { label: "YouTube rabbit hole", value: "Tech deep-dives, engineering breakdowns, retrospectives" },
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
