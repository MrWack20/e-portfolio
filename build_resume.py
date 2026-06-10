#!/usr/bin/env python3
"""
Generates Hao_Joaquin_Resume_Updated.pdf in the same folder.
Run: python build_resume.py
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer,
    HRFlowable, Table, TableStyle, KeepTogether
)

OUTPUT = r"D:\Projects\E-portfolio Website\assets\Hao_Joaquin_Resume_Updated.pdf"

# ── Usable width ─────────────────────────────────────────────────────────────
MARGIN   = 0.75 * inch
PW       = letter[0] - 2 * MARGIN   # 7.0 inches
COL_L    = 4.7 * inch
COL_R    = PW - COL_L               # 2.3 inches

# ── Styles ───────────────────────────────────────────────────────────────────
def S(name, **kw):
    return ParagraphStyle(name, **kw)

NAME     = S("Name",    fontName="Helvetica-Bold", fontSize=18,
             alignment=TA_CENTER, spaceAfter=3)
CONTACT  = S("Contact", fontName="Helvetica",      fontSize=10,
             alignment=TA_CENTER, spaceAfter=2)
LINKS    = S("Links",   fontName="Helvetica",      fontSize=9.5,
             alignment=TA_CENTER, spaceAfter=5,
             textColor=colors.HexColor("#333333"))
SECTION  = S("Section", fontName="Helvetica-Bold", fontSize=11,
             alignment=TA_CENTER, spaceBefore=7, spaceAfter=3)
ORG      = S("Org",     fontName="Helvetica-Bold", fontSize=10.5,
             leading=14)
ROLE     = S("Role",    fontName="Helvetica",      fontSize=10.5,
             leading=13, spaceAfter=3)
DATE     = S("Date",    fontName="Helvetica",      fontSize=10.5,
             alignment=TA_RIGHT, leading=14)
BODY     = S("Body",    fontName="Helvetica",      fontSize=10.5,
             leading=14, spaceAfter=3)
BULLET   = S("Bullet",  fontName="Helvetica",      fontSize=10.5,
             leading=13.5, leftIndent=14, spaceAfter=1)
SUMMARY  = S("Summary", fontName="Helvetica",      fontSize=10.5,
             leading=14.5, alignment=TA_JUSTIFY, spaceAfter=4)
SKILL    = S("Skill",   fontName="Helvetica",      fontSize=10.5,
             leading=14, spaceAfter=3)

# ── Helpers ───────────────────────────────────────────────────────────────────
def hr():
    return HRFlowable(width="100%", thickness=0.5,
                      color=colors.black, spaceAfter=5, spaceBefore=2)

def section(title):
    return [Paragraph(title, SECTION), hr()]

def org_row(left_text, right_text, left_bold=True):
    ls = ORG if left_bold else BODY
    t = Table(
        [[Paragraph(left_text, ls), Paragraph(right_text, DATE)]],
        colWidths=[COL_L, COL_R]
    )
    t.setStyle(TableStyle([
        ("VALIGN",         (0, 0), (-1, -1), "BOTTOM"),
        ("TOPPADDING",     (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING",  (0, 0), (-1, -1), 0),
        ("LEFTPADDING",    (0, 0), (-1, -1), 0),
        ("RIGHTPADDING",   (0, 0), (-1, -1), 0),
    ]))
    return t

def bul(items):
    return [Paragraph(f"&#8226; {item}", BULLET) for item in items]

def gap(pts=5):
    return Spacer(1, pts)

# ── Story ─────────────────────────────────────────────────────────────────────
story = []

# ── HEADER ────────────────────────────────────────────────────────────────────
story += [
    Paragraph("Joaquin Alec P. Hao", NAME),
    Paragraph(
        "Filinvest East Homes &#8226; Antipolo City, 1870 &#8226; "
        "joaquinhao@gmail.com &#8226; +63 917 532 2255",
        CONTACT
    ),
    Paragraph(
        "linkedin.com/in/joaquin-alec-hao &#8226; "
        "github.com/MrWack20 &#8226; "
        "e-portfolio-two-eta.vercel.app",
        LINKS
    ),
    hr(),
]

# ── PROFESSIONAL SUMMARY ──────────────────────────────────────────────────────
story += section("Professional Summary")
story += [
    Paragraph(
        "Computer Engineering graduate from Jose Rizal University, <b>Cum Laude</b>, with hands-on "
        "experience in full-stack development, data engineering, and AI-integrated systems. "
        "Shipped multiple production applications independently&#8212;including a collaborative AI "
        "travel planner and a real-time card collection manager&#8212;using Next.js 16, Supabase, and "
        "Gemini AI. Proficient at integrating Claude Code into development workflows for accelerated, "
        "production-grade delivery across the full stack. <b>Open to remote opportunities.</b>",
        SUMMARY
    ),
]

# ── EDUCATION ─────────────────────────────────────────────────────────────────
story += section("Education")
story += [
    KeepTogether([
        org_row("Jose Rizal University", "Mandaluyong City, Philippines"),
        Paragraph("Bachelor of Science in Computer Engineering  &#8226;  2022 &#8211; 2026", ROLE),
        Paragraph("Graduated <b>Cum Laude</b>", BODY),
        Paragraph(
            "<i>Thesis:</i> Design and Development of an Intelligent Robotic Assistant "
            "for Campus Information Management",
            BODY
        ),
    ]),
    gap(6),
]

# ── EXPERIENCE ────────────────────────────────────────────────────────────────
story += section("Experience")

# IT Group
story += [
    KeepTogether([
        org_row("IT Group Inc.", "February 2026 &#8211; April 2026"),
        Paragraph("Position Title: Student Intern", ROLE),
    ] + bul([
        "Administered NetSuite ERP user roles, permissions, and sandbox environments for employee access management.",
        "Built and executed SuiteQL queries and saved searches to extract, filter, and validate employee and partner datasets.",
        "Cleaned, merged, and reconciled 3,000+ customer records and 4,000+ item records to maintain data integrity prior to system migration.",
        "Imported and updated employee records including job titles, name formatting, and supervisor IDs into NetSuite.",
        "Developed an ISMS Data Governance Handbook covering 7 company systems: NetSuite, Celigo, Zoho CRM, Zoho Projects, Analytics Plus, Service Desk Plus, and BigQuery.",
        "Created a finalized ISMS documentation collection covering Governance, Access &amp; Administration, Operations, and Evidence.",
        "Prepared a formal user license proposal identifying current vs. proposed role changes for business development positions.",
        "Developed a NetSuite training plan including a syllabus, slide decks, and a user guide for system onboarding sessions.",
    ])),
    gap(),
]

# PLDT
story += [
    KeepTogether([
        org_row("PLDT-Smart Innovation Generation Pitch Competition", "November 2024 &#8211; September 2025"),
        Paragraph("Position Title: Participant  &#8226;  <b>Giga 25 Finalist</b>", ROLE),
    ] + bul([
        "Proposed a mobile application and website platform focusing on job application and services for persons with disabilities.",
        "Created and conceptualised a concept paper and wireframe.",
        "Lead developer for backend and database for the mobile application.",
        "Constructed and connected the database to the system using Firebase and Android Studio.",
        "Main compiler for the mobile application, connected both the frontend and backend.",
    ])),
    gap(),
]

# Byte Forward
story += [
    KeepTogether([
        org_row("Byte Forward Hackathon 2025", "August 2025"),
        Paragraph("Position Title: Participant", ROLE),
    ] + bul([
        "Proposed a mobile application focusing on assisting non-tech-savvy people in getting started with digital services within 24 hours.",
        "Designed and developed the backend portion of the application.",
        "Implemented AI chatbot feature.",
    ])),
    gap(),
]

# AWS Learning Clubs
story += [
    KeepTogether([
        org_row("Amazon Web Services Learning Clubs &#8211; JRU Chapter", "March 2025 &#8211; Present"),
        Paragraph("Position Title: The Secretariat (Co-founding Executive)", ROLE),
    ] + bul([
        "Co-founding executive of the AWS Learning Clubs chapter at Jose Rizal University.",
        "Hosted and attended seminars, workshops, and events exploring topics and opportunities in AWS cloud computing.",
        "Handled the organization&#8217;s documents and finances.",
    ])),
    gap(),
]

# Analytics & AI
story += [
    KeepTogether([
        org_row("Analytics &amp; Artificial Intelligence Association of The Philippines", "February 2025 &#8211; January 2026"),
        Paragraph("Position Title: Data Engineer Intern", ROLE),
    ] + bul([
        "Managed and backed up the files of the organization.",
        "Cleaned CRM data to be migrated to the new database.",
        "Attended conventions, increasing knowledge on Analytics and Artificial Intelligence.",
    ])),
    gap(5),
]

# ── PROJECTS ─────────────────────────────────────────────────────────────────
story += section("Projects")

# VoyageAI
story += [
    KeepTogether([
        org_row("VoyageAI &#8212; Collaborative AI Travel Planner", "May 2026"),
    ] + bul([
        "Solo-built a production-grade SaaS for collaborative group travel using Next.js 16, React 19, TypeScript, Supabase, and Gemini AI&#8212;deployed live on Vercel at zero infrastructure cost.",
        "Engineered an AI optimization pipeline: DBSCAN proximity clustering &#8594; nearest-neighbor TSP scheduling &#8594; four-axis fairness scoring (satisfaction, Jain&#8217;s fairness index, efficiency, weather-fit) &#8594; human-reviewable changes applied transactionally.",
        "Built a grounded AI assistant with Vercel AI SDK v6 tool calls into live trip data (preferences, itinerary, weather, budget)&#8212;supports Gemini and Groq across 8 free models; never invents itinerary items.",
        "Implemented three-layer security: PostGIS Row-Level Security (data visibility), server-action role checks (permissions), and UI gating (affordances)&#8212;access control written once, enforced everywhere.",
        "Delivered full production deployment using free-tier-only providers: Gemini, MapTiler, Nominatim, OpenWeather, Frankfurter, Supabase, and Vercel.",
    ])),
    gap(),
]

# Thesis / Capstone
story += [
    KeepTogether([
        org_row("Intelligent Robotic Assistant for Campus Information Management", "2025 &#8211; 2026"),
        Paragraph("B.S. Computer Engineering Thesis &#8212; Commissioned by the Dean, JRU", ROLE),
    ] + bul([
        "Built a RAG pipeline using a multi-LLM architecture enabling the robot to answer campus queries from an uploaded knowledge base via natural conversation.",
        "Developed an emotion detection module (dataset gathering, cleaning, model training) that adapts responses to the user&#8217;s detected facial expression.",
        "Integrated LiDAR, ultrasonic, and IR sensors for autonomous navigation; led cross-team software&#8211;hardware integration across 9 members.",
        "Built a web-based admin panel for remote startup, knowledge-base management, and hardware health monitoring.",
    ])),
    gap(),
]

# Pokémon TCG
story += [
    KeepTogether([
        org_row("Pok&#233;mon TCG Online Binder Manager", "December 2025"),
    ] + bul([
        "Developed a full-stack web application for organizing and managing Pok&#233;mon Trading Card collections with 1,000+ card capacity per digital binder.",
        "Integrated Pok&#233;mon TCG REST API with advanced filtering (set, type, rarity, language) and pagination for card search across 10,000+ cards.",
        "Migrated cloud database from Firebase Firestore to Supabase for improved query performance and scalability.",
        "Built drag-and-drop interface for card management and customizable UI themes with image upload functionality.",
        "Optimized API queries reducing payload size by 90% and improving search performance from 3&#8211;5s to sub-1s response times.",
        "Developed end-to-end with Claude Code as the primary development workflow&#8212;a production example of AI-assisted engineering.",
    ])),
    gap(),
]

# THRIVE
story += [
    KeepTogether([
        org_row("THRIVE &#8212; Mobile Job Application Platform", "June 2025"),
    ] + bul([
        "Developed an inclusive mobile job application platform tailored for Persons with Disabilities (PWDs) using Android Studio and Firebase.",
        "Designed and implemented the app&#8217;s Firebase Real-time Database structure to manage user profiles, job listings, and application flows.",
        "Built core backend logic to support user authentication, data storage, and the job application process.",
        "Assisted in frontend and UI/UX design.",
    ])),
    gap(),
]

# Thesis Library
story += [
    KeepTogether([
        org_row("Thesis Library Website", "March 2024"),
    ] + bul([
        "Developed a web-based thesis library for Jose Rizal University using HTML, PHP, and MySQL to help students and faculty browse, search, and access academic research efficiently.",
        "Led database design, integrated phpMyAdmin for connectivity, and implemented PDF upload and download functionality.",
        "Led project planning, system architecture, and collaborated with school faculty to meet university requirements for publication.",
    ])),
    gap(5),
]

# ── SKILLS & INTERESTS ────────────────────────────────────────────────────────
story += section("Skills &amp; Interests")

skills = [
    ("AI &amp; Developer Tools",
     "Claude Code (AI-assisted development), Vercel AI SDK v6, Gemini AI, Groq, "
     "Prompt Engineering, RAG pipelines"),
    ("Frontend",
     "HTML, CSS, TypeScript, ReactJS, Next.js 16, Tailwind CSS"),
    ("Backend",
     "Java, PHP, Python, Next.js App Router, REST APIs"),
    ("Database &amp; Cloud",
     "MySQL, PostgreSQL, Supabase (PostGIS &#8226; RLS &#8226; Realtime), "
     "Firebase, AWS, Vercel"),
    ("ERP &amp; Data Engineering",
     "NetSuite, SuiteQL, Data Governance, ISMS Documentation"),
    ("Hardware &amp; Embedded",
     "Embedded Systems &amp; IoT, Circuit Design, Robotics, Arduino, ESP32"),
    ("Interests",
     "Exploring emerging technologies and innovations, gadget tinkering, "
     "circuit designing, and robotics development."),
]

for label, value in skills:
    story.append(Paragraph(f"<b>{label}:</b>  {value}", SKILL))

story.append(gap(5))

# ── CERTIFICATIONS ────────────────────────────────────────────────────────────
story.append(KeepTogether(
    section("Certifications") + bul([
        "AWS Certified Cloud Practitioner",
        "AWS Cloud Quest: Cloud Practitioner",
        "DataCamp Certified Data Engineer Associate",
        "CompTIA ITF+ Certified",
    ])
))

# ── BUILD ─────────────────────────────────────────────────────────────────────
doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=letter,
    leftMargin=MARGIN,
    rightMargin=MARGIN,
    topMargin=MARGIN,
    bottomMargin=MARGIN,
)
doc.build(story)
print(f"Done  ->  {OUTPUT}")
