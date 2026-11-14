// Edit this file to update your hobbies. They show on the Hobbies page and in search.
// Add your own photos to the images folder, then set image: "images/yourfile.jpg" on any book or place.
// books: title, author, isbn (for the cover), status ("Reading" or "Finished"), review, image
// painting: { title: "Painting title", medium: "Watercolour", text: "What inspired it.", image: "images/art1.jpg" }
window.ICONS = {"home": "<path d=\"M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z\"/>", "projects": "<rect x=\"4\" y=\"4\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"13\" y=\"13\" width=\"7\" height=\"7\" rx=\"2\"/>", "experience": "<rect x=\"3.5\" y=\"7.5\" width=\"17\" height=\"12\" rx=\"2.5\"/><path d=\"M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M3.5 13h17\"/>", "hobbies": "<path d=\"M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.6 4.3 4.3 0 0 1 19.5 10C19.5 15.4 12 20 12 20z\"/>", "contact": "<rect x=\"3.5\" y=\"5.5\" width=\"17\" height=\"13\" rx=\"2.5\"/><path d=\"m4 7.5 8 6 8-6\"/>", "code": "<path d=\"m8 8-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12\"/>", "api": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"6\" rx=\"2\"/><rect x=\"3\" y=\"14\" width=\"18\" height=\"6\" rx=\"2\"/><path d=\"M7 7h.01M7 17h.01M12 10v4\"/>", "masonry": "<rect x=\"3\" y=\"3\" width=\"8\" height=\"10\" rx=\"2\"/><rect x=\"13\" y=\"3\" width=\"8\" height=\"6\" rx=\"2\"/><rect x=\"13\" y=\"11\" width=\"8\" height=\"10\" rx=\"2\"/><rect x=\"3\" y=\"15\" width=\"8\" height=\"6\" rx=\"2\"/>", "shield": "<path d=\"M12 3 4.5 6v5.5c0 4.5 3.2 7.8 7.5 9.5 4.3-1.7 7.5-5 7.5-9.5V6z\"/><path d=\"m8.8 12 2.4 2.4 4.2-4.6\"/>", "bell": "<path d=\"M6 17v-6a6 6 0 0 1 12 0v6l1.5 2h-15z\"/><path d=\"M10 21.5h4\"/>", "pulse": "<path d=\"M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.6 4.3 4.3 0 0 1 19.5 10C19.5 15.4 12 20 12 20z\"/><path d=\"M7.5 12.5h2.5l1.5-3 2 5 1.5-2h2\"/>", "chart": "<path d=\"M4 4v16h16\"/><path d=\"m7 15 4-5 3 3 5-7\"/>", "lock": "<rect x=\"5\" y=\"11\" width=\"14\" height=\"9\" rx=\"2.5\"/><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"/><circle cx=\"12\" cy=\"15.5\" r=\"1.2\"/>", "cycle": "<path d=\"M20 11a8 8 0 0 0-14-4L4 9\"/><path d=\"M4 4v5h5\"/><path d=\"M4 13a8 8 0 0 0 14 4l2-2\"/><path d=\"M20 20v-5h-5\"/>", "flask": "<path d=\"M9 3h6M10 3v6l-5.5 9.5A1.8 1.8 0 0 0 6 21h12a1.8 1.8 0 0 0 1.5-2.5L14 9V3\"/><path d=\"M7.5 15h9\"/>", "wallet": "<rect x=\"3\" y=\"6\" width=\"18\" height=\"13\" rx=\"3\"/><path d=\"M3 10h18\"/><circle cx=\"16.5\" cy=\"14.5\" r=\"1.2\"/>", "palette": "<path d=\"M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2 0-1.5-1.5-1.5-1.5-3 0-1.2 1-2 2.2-2H17a4 4 0 0 0 4-4c0-4-4-7-9-7z\"/><circle cx=\"7.5\" cy=\"11\" r=\"1\"/><circle cx=\"10\" cy=\"7\" r=\"1\"/><circle cx=\"15\" cy=\"7.5\" r=\"1\"/>", "drop": "<path d=\"M12 3s6 6.2 6 10.5A6 6 0 0 1 6 13.5C6 9.2 12 3 12 3z\"/><path d=\"M9.5 14.5a2.7 2.7 0 0 0 2.5 2\"/>", "claw": "<path d=\"M12 3v6\"/><path d=\"M12 9 7 12v7M12 9l5 3v7\"/><path d=\"M5.5 19h3M15.5 19h3\"/>", "book": "<path d=\"M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z\"/><path d=\"M5 17a3 3 0 0 1 3-3h11\"/>", "plane": "<path d=\"M21 3 3 10.5l6.5 2.5L12 20z\"/><path d=\"m9.5 13 5-4.5\"/>", "brush": "<path d=\"M18 3l3 3-9 9-3-3z\"/><path d=\"M9 12c-2.5 0-4 1.5-4 4 0 1.5-1 3-2.5 3.5 4 1 8-.5 8-4\"/>", "megaphone": "<path d=\"M4 10v4h3l7 4V6L7 10z\"/><path d=\"M17.5 9a4 4 0 0 1 0 6\"/>", "bag": "<path d=\"M5 8h14l-1 12H6z\"/><path d=\"M9 8V6.5a3 3 0 0 1 6 0V8\"/>", "clipboard": "<rect x=\"5\" y=\"5\" width=\"14\" height=\"16\" rx=\"2.5\"/><path d=\"M9 5V4h6v1M9 11h6M9 15h4\"/>", "file": "<path d=\"M7 3h7l4 4v14H7z\"/><path d=\"M14 3v4h4M10 12h5M10 16h5\"/>", "church": "<path d=\"M6 21V10l2-6 2 6v11M14 21V10l2-6 2 6v11M3 21h18M10 21v-5h4v5\"/>", "castle": "<path d=\"M4 21V9h3V6h2v3h2V6h2v3h2V6h2v3h3v12z\"/><path d=\"M10 21v-5a2 2 0 0 1 4 0v5\"/>", "tree": "<circle cx=\"12\" cy=\"9\" r=\"5\"/><path d=\"M12 14v7M9 21h6\"/>", "stadium": "<ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"5.5\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4.5\" ry=\"2\"/>", "mountain": "<path d=\"m3 19 6-11 4 7 3-4 5 8z\"/>", "lighthouse": "<path d=\"M9 21 10.5 8h3L15 21z\"/><path d=\"m10 8 2-4 2 4M5 21h14\"/>", "arches": "<path d=\"M3 20V8c0-2 2-4 9-4s9 2 9 4v12z\"/><path d=\"M7 20v-5a2 2 0 0 1 4 0v5M13 20v-5a2 2 0 0 1 4 0v5\"/>", "fountain": "<path d=\"M12 4v6M8 7c0 2 2 3 4 3s4-1 4-3M4 14h16M6 14v4h12v-4M3 21h18\"/>", "museum": "<path d=\"M3 9 12 4l9 5M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 21h18\"/>", "dome": "<path d=\"M4 20v-7a8 8 0 0 1 16 0v7z\"/><path d=\"M12 5V3M2 20h20\"/>", "tower": "<path d=\"m8 21-1-14 7-3 3 14z\"/><path d=\"m7.5 10 7-3M8.5 15l7-3\"/>", "canal": "<path d=\"M3 16c3 2 6-2 9 0s6 2 9 0\"/><path d=\"M4 13V9l3-2 3 2v4M14 13V9l3-2 3 2v4\"/>", "house": "<path d=\"M4 11.5 12 4l8 7.5V20H4z\"/><path d=\"M10 20v-5h4v5\"/>", "stupa": "<path d=\"M4 20h16M6 20v-4h12v4M8 16c0-4 2-6 4-6s4 2 4 6M12 10V6M10.5 6h3\"/>", "temple": "<path d=\"M5 20h14M7 20v-6h10v6M9 14v-4h6v4M10.5 10V7h3v3M12 7V4\"/>", "pagoda": "<path d=\"M4 20h16M6 20v-4h12v4M7 16l-2-3h14l-2 3M8.5 13 7 10h10l-1.5 3M12 10V5\"/>"};
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
   "summary": "An assistive painting system designed with a team for a client who uses a wheelchair and has limited hand dexterity: a clamp-mounted palette and brush tray, plus a paintbrush support glove. I was the team's Coordinator.",
   "tags": [
    "Assistive design",
    "Prototyping",
    "User research",
    "Documentation"
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
   "title": "Robotic End Effector (Q-Arm Gripper)",
   "kind": "Engineering design",
   "summary": "A servo-driven pinch gripper for a Q-Arm robot, built for warehouse-style pick and place. I was project manager and lead mechanical designer, and I wrote the Python \"LookUp Products\" function.",
   "tags": [
    "CAD",
    "3D printing",
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
   "icon": "code",
   "role": "Software Engineer",
   "org": "Engineers Without Borders, McMaster",
   "when": "Oct 2026 \u2013 now",
   "current": true,
   "text": "Own the login and roles module of a platform connecting farmers with people facing food insecurity: sign-up, login and logout, three account types, role-based pages and user profiles."
  },
  {
   "id": "skillfully",
   "icon": "megaphone",
   "role": "Intern, Marketing and Growth",
   "org": "Skillfully",
   "when": "Oct 2026 \u2013 now",
   "current": true,
   "text": "Helping grow an AI platform that connects authors with users, through marketing, outreach and finding clients."
  },
  {
   "id": "cestbio",
   "icon": "bag",
   "role": "Full-Stack Web Developer & E-Commerce Strategist",
   "org": "C'est Bio Silk",
   "when": "Jul \u2013 Sep 2026",
   "current": false,
   "text": "Redesigned and rebuilt the company's Shopify website, front end and back end."
  },
  {
   "id": "statcan",
   "icon": "clipboard",
   "role": "Enumerator",
   "org": "Statistics Canada",
   "when": "May \u2013 Jul 2026",
   "current": false,
   "text": "Managed a 200+ household caseload under federal timelines, handling confidential data."
  },
  {
   "id": "zenlotus",
   "icon": "chart",
   "role": "Equity Market Research Analyst",
   "org": "ZenLotus Capital Partners",
   "when": "Jan \u2013 Apr 2026",
   "current": false,
   "text": "Built an equity research data aggregator in Python and Excel, and delivered research reports to the investment team."
  },
  {
   "id": "inuwa",
   "icon": "file",
   "role": "Technical Documentation & Compliance Intern",
   "org": "Inuwa khola, Kathmandu, Nepal",
   "when": "May 2024 \u2013 Oct 2025",
   "current": false,
   "text": "Built a documentation system for 150+ technical records and improved retrieval traceability by about 30%."
  },
  {
   "id": "rom",
   "icon": "museum",
   "role": "Volunteer",
   "org": "Royal Ontario Museum",
   "when": "Aug \u2013 Oct 2022",
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
  "books": [
   {
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "isbn": "9780141439570",
    "status": "",
    "review": "",
    "image": ""
   },
   {
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "isbn": "9780143058144",
    "status": "",
    "review": "",
    "image": ""
   },
   {
    "title": "Sapiens: A Brief History of Humankind",
    "author": "Yuval Noah Harari",
    "isbn": "9780062316110",
    "status": "",
    "review": "",
    "image": ""
   },
   {
    "title": "Little Women",
    "author": "Louisa May Alcott",
    "isbn": "9780147514011",
    "status": "",
    "review": "",
    "image": ""
   },
   {
    "title": "Verity",
    "author": "Colleen Hoover",
    "isbn": "9781538724736",
    "status": "",
    "review": "",
    "image": ""
   }
  ],
  "travel": [
   {
    "country": "Spain",
    "places": [
     {
      "name": "Sagrada Fam\u00edlia",
      "city": "Barcelona",
      "icon": "church",
      "text": "Gaud\u00ed's unfinished basilica",
      "image": ""
     },
     {
      "name": "Park G\u00fcell",
      "city": "Barcelona",
      "icon": "tree",
      "text": "Gaud\u00ed's hillside park",
      "image": ""
     },
     {
      "name": "Camp Nou",
      "city": "Barcelona",
      "icon": "stadium",
      "text": "",
      "image": ""
     },
     {
      "name": "The Alhambra",
      "city": "Granada",
      "icon": "castle",
      "text": "Moorish fortress and palace complex",
      "image": ""
     }
    ]
   },
   {
    "country": "Italy",
    "places": [
     {
      "name": "Colosseum",
      "city": "Rome",
      "icon": "arches",
      "text": "1st-century amphitheatre",
      "image": ""
     },
     {
      "name": "Trevi Fountain",
      "city": "Rome",
      "icon": "fountain",
      "text": "",
      "image": ""
     },
     {
      "name": "Vatican Museums & Sistine Chapel",
      "city": "Vatican City",
      "icon": "museum",
      "text": "",
      "image": ""
     },
     {
      "name": "Pantheon",
      "city": "Rome",
      "icon": "dome",
      "text": "Ancient Roman temple with a concrete dome",
      "image": ""
     },
     {
      "name": "Florence Cathedral (Duomo)",
      "city": "Florence",
      "icon": "dome",
      "text": "",
      "image": ""
     },
     {
      "name": "Tower of Pisa",
      "city": "Pisa",
      "icon": "tower",
      "text": "",
      "image": ""
     }
    ]
   },
   {
    "country": "Netherlands",
    "places": [
     {
      "name": "Amsterdam canal ring",
      "city": "Amsterdam",
      "icon": "canal",
      "text": "17th-century canal ring, a UNESCO World Heritage site",
      "image": ""
     },
     {
      "name": "Anne Frank House",
      "city": "Amsterdam",
      "icon": "house",
      "text": "",
      "image": ""
     },
     {
      "name": "Rijksmuseum",
      "city": "Amsterdam",
      "icon": "museum",
      "text": "",
      "image": ""
     },
     {
      "name": "Van Gogh Museum",
      "city": "Amsterdam",
      "icon": "museum",
      "text": "",
      "image": ""
     }
    ]
   },
   {
    "country": "Canada",
    "places": [
     {
      "name": "Banff",
      "city": "Alberta",
      "icon": "mountain",
      "text": "",
      "image": ""
     },
     {
      "name": "Cape Breton",
      "city": "Nova Scotia",
      "icon": "lighthouse",
      "text": "",
      "image": ""
     }
    ]
   },
   {
    "country": "Nepal",
    "places": [
     {
      "name": "Boudhanath Stupa",
      "city": "Kathmandu",
      "icon": "stupa",
      "text": "",
      "image": ""
     },
     {
      "name": "Swayambhunath (Monkey Temple)",
      "city": "Kathmandu",
      "icon": "stupa",
      "text": "",
      "image": ""
     },
     {
      "name": "Pashupatinath Temple",
      "city": "Kathmandu",
      "icon": "temple",
      "text": "",
      "image": ""
     },
     {
      "name": "Durbar Squares",
      "city": "Kathmandu Valley",
      "icon": "pagoda",
      "text": "Kathmandu, Patan and Bhaktapur",
      "image": ""
     },
     {
      "name": "Garden of Dreams",
      "city": "Kathmandu",
      "icon": "tree",
      "text": "",
      "image": ""
     }
    ]
   }
  ],
  "painting": []
 }
};
