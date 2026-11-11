// Edit this file to add your hobbies. Each list shows on the Hobbies page and is searchable.
// books:    { title: "Book title", author: "Author", status: "Reading" or "Finished", review: "One or two sentences." }
// travel:   { title: "Place", year: "2025", text: "What you loved about it." }
// painting: { title: "Painting title", medium: "Watercolour", text: "What inspired it." }
// Optional on any entry: image: "images/yourfile.jpg"
window.SITE = {
 "projects": [
  {
   "slug": "api",
   "title": "Mini Pinterest API",
   "kind": "Backend",
   "summary": "A backend for pins and boards with a cursor-paginated feed, rate limiting and CI. I load-tested it with k6 and measured what Redis caching actually bought.",
   "tags": [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Docker",
    "GitHub Actions",
    "k6"
   ],
   "teaser": "FastAPI, PostgreSQL, Redis"
  },
  {
   "slug": "masonry",
   "title": "Masonry Feed",
   "kind": "Frontend",
   "summary": "A Pinterest-style infinite-scroll feed in React and TypeScript. Only the pins near the screen are drawn, and layout comes from the API's image sizes so nothing jumps.",
   "tags": [
    "React",
    "TypeScript",
    "Vite",
    "IntersectionObserver",
    "Lighthouse"
   ],
   "teaser": "React, TypeScript, Vite"
  },
  {
   "slug": "ai",
   "title": "Testing AI-written code",
   "kind": "How I work",
   "summary": "AI scaffolded my API and every unit test passed. Running the real stack with two workers exposed a startup race. I diagnosed it, fixed it with a Postgres advisory lock, and wrote it up.",
   "tags": [
    "PostgreSQL",
    "Docker Compose",
    "pytest",
    "uvicorn"
   ],
   "teaser": "How I check what AI writes"
  },
  {
   "slug": "incident",
   "title": "Incident Tracker & Report Generator",
   "kind": "Python tool",
   "summary": "A 50-ticket IT incident system with priority tiers, SLA tracking and a full status lifecycle. It writes the weekly summary report automatically.",
   "tags": [
    "Python",
    "CSV",
    "SLA tracking"
   ],
   "teaser": ""
  },
  {
   "slug": "medtech",
   "title": "Medical Technology Usability Tracker",
   "kind": "Python tool",
   "summary": "An object-oriented scoring framework that evaluates medical device prototypes and produces ranked comparisons and gap analyses for clinical and engineering decision-makers.",
   "tags": [
    "Python",
    "OOP",
    "openpyxl",
    "Excel"
   ],
   "teaser": ""
  },
  {
   "slug": "equity",
   "title": "Equity Research Data Aggregator",
   "kind": "Python tool",
   "summary": "Pulls public financial data (EPS, P/E, income statements) for several companies into one Excel dashboard, and flags valuation outliers with threshold rules.",
   "tags": [
    "Python",
    "openpyxl",
    "Excel",
    "CSV"
   ],
   "teaser": ""
  },
  {
   "slug": "access",
   "title": "Access Management & Compliance Audit",
   "kind": "Python tool",
   "summary": "A role-based access control audit tool. It flags expired permissions, orphaned accounts and policy mismatches, then writes a monthly compliance report for regulatory audiences.",
   "tags": [
    "Python",
    "CSV",
    "RBAC"
   ],
   "teaser": ""
  },
  {
   "slug": "change",
   "title": "Change Request & Release Management",
   "kind": "Python tool",
   "summary": "An ITIL-style change request simulation. It generates change requests with risk ratings, rollback plans and approval routing, and writes an Excel SDLC dashboard of approval rates and deployment outcomes.",
   "tags": [
    "Python",
    "openpyxl",
    "Excel",
    "ITIL"
   ],
   "teaser": ""
  },
  {
   "slug": "lab",
   "title": "Lab Report Auto-Formatter",
   "kind": "Python tool",
   "summary": "Turns raw CSV experiment data into a structured lab report with unit conversions, summary statistics, linear regression and formatted tables.",
   "tags": [
    "Python",
    "CSV",
    "Statistics",
    "Regression"
   ],
   "teaser": ""
  },
  {
   "slug": "budget",
   "title": "Student Budget & Expense Tracker",
   "kind": "Python tool",
   "summary": "A personal expense tracker with category classification, monthly rollups, budget-versus-actual reports and spending alerts, saved to CSV.",
   "tags": [
    "Python",
    "CSV"
   ],
   "teaser": ""
  },
  {
   "slug": "painters",
   "title": "Painters Pall",
   "kind": "Engineering design",
   "summary": "A wheelchair-accessible art device, designed so people who use wheelchairs can paint comfortably and independently.",
   "tags": [
    "Accessibility",
    "Mechanical design",
    "Prototyping"
   ],
   "teaser": ""
  },
  {
   "slug": "wastewater",
   "title": "Antibiotic Wastewater Filtration System",
   "kind": "Engineering design",
   "summary": "A filtration system for antibiotic-contaminated wastewater, with material selection and a lifecycle analysis behind the design choices.",
   "tags": [
    "Material selection",
    "Lifecycle analysis",
    "Sustainability"
   ],
   "teaser": ""
  },
  {
   "slug": "endeffector",
   "title": "Robotic End Effector",
   "kind": "Engineering design",
   "summary": "A Q-ARM pick-and-place end effector. Testing showed a critical torque failure from undersized gears, so I led the redesign. I was project manager and lead mechanical designer, and wrote the Python product-lookup function with CSV parsing and error handling.",
   "tags": [
    "Mechanical design",
    "Python",
    "CSV",
    "Project management"
   ],
   "teaser": ""
  }
 ],
 "experience": [
  {
   "id": "ewb",
   "role": "Software Engineer",
   "org": "Engineers Without Borders, McMaster",
   "when": "Oct 2026 – now",
   "current": true,
   "text": "Own the login and roles module of a platform connecting farmers with people facing food insecurity: sign-up, login and logout, three account types, role-based pages and user profiles."
  },
  {
   "id": "skillfully",
   "role": "Intern, Marketing and Growth",
   "org": "Skillfully",
   "when": "Oct 2026 – now",
   "current": true,
   "text": "Helping grow an AI platform that connects authors with users, through marketing, outreach and finding clients."
  },
  {
   "id": "cestbio",
   "role": "Full-Stack Web Developer & E-Commerce Strategist",
   "org": "C'est Bio Silk",
   "when": "Jul – Sep 2026",
   "current": false,
   "text": "Redesigned and rebuilt the company's Shopify website, front end and back end."
  },
  {
   "id": "statcan",
   "role": "Enumerator",
   "org": "Statistics Canada",
   "when": "May – Jul 2026",
   "current": false,
   "text": "Managed a 200+ household caseload under federal timelines, handling confidential data."
  },
  {
   "id": "zenlotus",
   "role": "Equity Market Research Analyst",
   "org": "ZenLotus Capital Partners",
   "when": "Jan – Apr 2026",
   "current": false,
   "text": "Built an equity research data aggregator in Python and Excel, and delivered research reports to the investment team."
  },
  {
   "id": "inuwa",
   "role": "Technical Documentation & Compliance Intern",
   "org": "Inuwa khola, Kathmandu, Nepal",
   "when": "May 2024 – Oct 2025",
   "current": false,
   "text": "Built a documentation system for 150+ technical records and improved retrieval traceability by about 30%."
  },
  {
   "id": "rom",
   "role": "Volunteer",
   "org": "Royal Ontario Museum",
   "when": "Aug – Oct 2022",
   "current": false,
   "text": "Engaged museum visitors on site through public speaking and public relations."
  }
 ],
 "skills": [
  "Python",
  "TypeScript",
  "React",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "GitHub Actions",
  "k6",
  "Java",
  "C",
  "Git"
 ],
 "hobbies": {
  "books": [],
  "travel": [],
  "painting": []
 }
};
