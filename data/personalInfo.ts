import { PersonalInfo, TechSkill, Project, Education, Experience } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Rohit Kumar Yadav",
    role: "Full Stack Developer | Next.js Specialist",
    email: "rohitkuyada@gmail.com",
    phone: "9721235063",
    github: "https://github.com/rohit-ayadav/",
    linkedin: "https://www.linkedin.com/in/rohitkumaryadav-rky/",
    resumeUrl: "https://drive.google.com/file/d/1HDcnIxa5K596ccKMvXbWu-PYHZxvsSRw/view?usp=drive_link",
    bio: "I'm a 3rd-year Computer Science student at Goel Institute of Technology and Management, passionate about building modern web applications with Next.js and React. I focus on creating scalable, performant, and user-friendly web experiences.",
};

export const skills: TechSkill[] = [
    { name: "Next.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML/CSS", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Tailwind CSS", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Node.js", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Git", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Jest", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    { name: "C/C++", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];

export const projects: Project[] = [
    {
        id: 1,
        title: "DevBlogger - Blogging Platform for Developers",
        description: "A full-stack blogging platform with authentication, role-based access, and a rich-text editor. Hosts 100+ blogs with 5K+ active users, increasing engagement by 70%. Features AI-powered SEO, custom URLs, and efficient MongoDB implementation.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Markdown"],
        imageUrl: "/projects/devblogger.jpg",
        githubUrl: "https://github.com/rohit-k-yadav/devblogger",
        liveUrl: "https://devlogger.in",
    },
    {
        id: 2,
        title: "Resources and Updates - Community Platform",
        description: "A community-driven platform connecting 500+ CSE students and professionals. Features an admin dashboard with role-based authentication and newsletter management. Boosted student mentorship requests by 30% through structured networking.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
        imageUrl: "/projects/community.jpg",
        githubUrl: "https://github.com/rohit-k-yadav/community-website",
        liveUrl: "https://community-website.vercel.app",
    },
    {
        id: 3,
        title: "RUShort - URL Shortener & Digital Marketplace",
        description: "URL shortener handling 61K+ redirects with integrated Razorpay for paid subscriptions and digital product sales. Features secure content access, accelerated API response time, and real-time analytics dashboard.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Razorpay"],
        imageUrl: "/projects/rushort.jpg",
        githubUrl: "https://github.com/rohit-k-yadav/rushort",
        liveUrl: "https://rushort.vercel.app",
    },
];

export const education: Education[] = [
    {
        degree: "Bachelor of Technology in Computer Science & Engineering",
        institution: "Goel Institute of Technology and Management, Lucknow",
        period: "2022 - 2026 (Expected)",
        description: "Focusing on Data Structures and Algorithms (C), Python, Java, Computer Organization & Architecture, and Operating Systems. Currently building scalable web applications.",
    },
    {
        degree: "Intermediate in Science",
        institution: "Govt. Jubilee Inter College, Gorakhpur",
        period: "2020 - 2022",
        description: "Studied Physics, Chemistry, and Mathematics with a focus on analytical skills and problem-solving.",
    },
    {
        degree: "High School",
        institution: "St. Xavier's High School, Sameda, Azamgarh",
        period: "2018 - 2020",
        description: "Completed with a focus on Science and Mathematics.",
    },
];

export const experience: Experience[] = [
    {
        role: "Founder & Community Manager",
        company: "Resources and Updates",
        period: "2023 - Present",
        description: "Managing a growing community of 8,000+ members on WhatsApp and 2,500+ LinkedIn followers, providing job and internship updates. Scaled technical resources community and boosted student mentorship requests by 30%.",
        technologies: ["Community Management", "Content Curation", "Networking"],
    },
    {
        role: "Web Developer Intern",
        company: "Let's Code",
        period: "Sep 2024 - Mar 2025",
        description: "Worked on various web development projects, focusing on Next.js and React. Gained experience in building responsive and user-friendly applications.",
        technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    },
    {
        role: "Campus Ambassador",
        company: "Unstop",
        period: "Jan 2024 - Present",
        description: "Engaging 5,000+ students by promoting tech events and opportunities. Organized coding competitions and mentored fellow students.",
        technologies: ["Event Management", "Leadership", "Marketing"],
    },
];

export const achievements = [
    "Qualified GATE 2025 (Computer Science)",
    "Completed ISRO Outreach Programme on Geo-data sharing and Cyber Security",
    "Solved 258+ problems on GeeksforGeeks; achieved 9th institute-level rank",
    "Scaled technical resources community to 8,000+ WhatsApp members and 2,500+ LinkedIn followers",
    "Volunteer at FOSS United (Lucknow), helping organize 10+ open-source meetups",
    "Organizer of CodeClash 2025, a pan-India coding event with 6,500+ registrations",
    "Event Manager at CompuNerds Club, GITM, hosted events with 300+ registrations"
];