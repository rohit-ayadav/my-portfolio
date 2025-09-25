import { PersonalInfo, TechSkill, Project, Education, Experience } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Rohit Kumar Yadav",
    role: "Building scalable web apps with Next.js, React & modern tech stacks",
    email: "rohitkuyada@gmail.com",
    phone: "9721235063",
    github: "https://github.com/rohit-ayadav/",
    linkedin: "https://www.linkedin.com/in/rohitkumaryadav-rky/",
    twitter: "https://x.com/rohit_ayadav",
    resumeUrl: "https://drive.google.com/file/d/1HDcnIxa5K596ccKMvXbWu-PYHZxvsSRw/view?usp=drive_link",
    bio: "I'm a 4th-year Computer Science student at Goel Institute of Technology and Management and a Full Stack Developer at Promptly AI Pvt Ltd. Passionate about building modern, scalable, and user-friendly web applications with Next.js, React, and TypeScript, I focus on performance, clean architecture, and real-world problem-solving.",
};

export const skills: TechSkill[] = [
    // Core Frontend
    { name: "Next.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "HTML/CSS", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },

    // Backend & API
    { name: "Node.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Fastify", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg" },

    // Databases & ORM
    { name: "MongoDB", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Prisma ORM", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { name: "Drizzle ORM", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drizzle/drizzle-original.svg" },
    // { name: "Drizzle ORM", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drizzle/drizzle-original.svg" },

    // Tools & Version Control
    { name: "Git", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },

    // Other Programming Languages
    { name: "C/C++", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    // { name: "Java", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];


export const projects: Project[] = [
    {
        id: 1,
        title: "DevBlogger - Blogging Platform for Developers",
        description: "A full-stack blogging platform with authentication, role-based access, and a rich-text editor. Hosts 100+ blogs with 5K+ active users, increasing engagement by 70%. Features AI-powered SEO, custom URLs, and efficient MongoDB implementation.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Markdown"],
        imageUrl: "/projects/devblogger.jpg",
        githubUrl: "https://github.com/rohit-ayadav/devblogger",
        liveUrl: "https://devblogger.in",
    },
    {
        id: 2,
        title: "Resources and Updates - Community Platform",
        description: "A community-driven platform connecting 500+ CSE students and professionals. Features an admin dashboard with role-based authentication and newsletter management. Boosted student mentorship requests by 30% through structured networking.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
        imageUrl: "/projects/community.jpg",
        githubUrl: "https://github.com/rohit-ayadav/Community-Resources-and-Updates1",
        liveUrl: "https://resourcesandcarrier.online/",
    },
    {
        id: 3,
        title: "RUShort - URL Shortener & Digital Marketplace",
        description: "URL shortener handling 61K+ redirects with integrated Razorpay for paid subscriptions and digital product sales. Features secure content access, accelerated API response time, and real-time analytics dashboard.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Razorpay"],
        imageUrl: "/projects/rushort.jpg",
        githubUrl: "https://github.com/rohit-ayadav/url-shortener2025",
        liveUrl: "https://rushort.site",
    },
];

export const education: Education[] = [
    {
        degree: "Bachelor of Technology in Computer Science & Engineering",
        institution: "Goel Institute of Technology and Management, Lucknow",
        period: "2022 - 2026 (Final Year)",
        description: "Specialized in Data Structures & Algorithms, Python, Java, Computer Organization & Architecture, and Operating Systems. Currently focusing on building scalable, full-stack web applications using modern technologies.",
    },
    {
        degree: "Intermediate in Science",
        institution: "Govt. Jubilee Inter College, Gorakhpur",
        period: "2020 - 2022",
        description: "Studied Physics, Chemistry, and Mathematics with emphasis on analytical thinking and problem-solving skills.",
    },
    {
        degree: "High School",
        institution: "St. Xavier's High School, Sameda, Azamgarh",
        period: "2018 - 2020",
        description: "Completed with focus on Science and Mathematics, laying the foundation for logical reasoning and analytical skills.",
    },
];

export const experience: Experience[] = [
    {
        role: "Full Stack Developer Intern",
        company: "Promptly AI Pvt Ltd",
        period: "Jun 2025 - Present",
        description: "Contributing to real-world product development in an agile environment using React.js, Node.js, PostgreSQL, REST APIs, and modern DevOps tools. Working under mentorship to build scalable frontend and backend modules, participating in code reviews, version control (Git), documentation, and sprint planning. Focused on clean code, performance optimization, and secure full-stack architecture.",
        technologies: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "Git", "Agile", "DevOps"],
    },
    {
        role: "Full Stack Developer Intern",
        company: "Let's Code",
        period: "Jan 2025 - Jun 2025",
        description: "Worked on Let's Code website and multiple client projects, focusing on frontend and backend development. Built responsive and user-friendly interfaces, integrated APIs, and contributed to improving codebase performance.",
        technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    },
    {
        role: "Founder & Community Manager",
        company: "Resources and Updates",
        period: "2023 - Present",
        description: "Managing a growing community of 8,000+ members on WhatsApp and 2,500+ LinkedIn followers, providing job and internship updates. Scaled technical resources community and boosted student mentorship requests by 30%.",
        technologies: ["Community Management", "Content Curation", "Networking"],
    },
    // {
    //     role: "Campus Ambassador",
    //     company: "Unstop",
    //     period: "Jan 2024 - Present",
    //     description: "Engaged 5,000+ students by promoting tech events and opportunities. Organized coding competitions and mentored fellow students, enhancing peer learning and campus engagement.",
    //     technologies: ["Event Management", "Leadership", "Marketing"],
    // },
];


export const achievements = [
    "Qualified GATE 2025 (Computer Science)",
    "Completed ISRO Outreach Programme on Geo-data Sharing & Cyber Security",
    "Solved 258+ problems on GeeksforGeeks; secured 9th rank at institute level",
    "Scaled 'Resources and Updates' community to 8,000+ WhatsApp members and 2,500+ LinkedIn followers",
    "Volunteer at FOSS United (Lucknow), organized 10+ open-source meetups",
    "Organizer of CodeClash 2025, a pan-India coding event with 6,500+ registrations",
    "Event Manager at CompuNerds Club, GITM, hosted events with 300+ participants",
    "President at Unstop Igniters Club @ GITM: Led student initiatives, promoted tech events, and organized coding competitions",
];