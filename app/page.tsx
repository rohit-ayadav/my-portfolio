"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface TechSkill {
  name: string;
  level: number;
  icon: string;
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Check user preference for dark mode
    const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkPreferred);

    // Add listener for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    setIsLoaded(true);

    // Intersection Observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      observer.disconnect();
    };
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Sample data - replace with your own
  const personalInfo = {
    name: "Rohit Kumar Yadav",
    role: "Full Stack Developer | Next.js Specialist",
    email: "rohitkuyada@gmail.com",
    phone: "9721235063",
    github: "https://github.com/rohit-ayadav/",
    linkedin: "https://www.linkedin.com/in/rohitkumaryadav-rky/",
    resumeUrl: "https://drive.google.com/file/d/1HDcnIxa5K596ccKMvXbWu-PYHZxvsSRw/view?usp=drive_link",
    bio: "I'm a 3rd-year Computer Science student at Goel Institute of Technology and Management, passionate about building modern web applications with Next.js and React. I focus on creating scalable, performant, and user-friendly web experiences.",
  };

  const skills: TechSkill[] = [
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

  const projects: Project[] = [
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

  const education: Education[] = [
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

  const experience: Experience[] = [
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

  const achievements = [
    "Qualified GATE 2025 (Computer Science)",
    "Completed ISRO Outreach Programme on Geo-data sharing and Cyber Security",
    "Solved 258+ problems on GeeksforGeeks; achieved 9th institute-level rank",
    "Scaled technical resources community to 8,000+ WhatsApp members and 2,500+ LinkedIn followers",
    "Volunteer at FOSS United (Lucknow), helping organize 10+ open-source meetups",
    "Organizer of CodeClash 2025, a pan-India coding event with 6,500+ registrations",
    "Event Manager at CompuNerds Club, GITM, hosted events with 300+ registrations"
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white">

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section id="hero" className="py-16 md:py-24 min-h-[90vh] flex items-center">
            <motion.div
              initial="initial"
              animate={isLoaded ? "animate" : "initial"}
              variants={staggerContainer}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 lg:w-3/5"
              >
                <div className="relative inline-block mb-6 overflow-hidden">
                  <span className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-lg transform -rotate-3"></span>
                  <h1 className="relative text-4xl md:text-6xl font-extrabold mb-2 pl-4 pr-4 py-2 bg-white dark:bg-gray-800 rounded-lg">
                    Hi, I'm <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>
                  </h1>
                </div>
                <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
                  {personalInfo.role}
                </h2>
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                >
                  {personalInfo.bio}
                </motion.p>
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
                    View Projects
                  </Link>
                  <Link href="#contact" className="px-6 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors transform hover:scale-105 duration-300">
                    Contact Me
                  </Link>
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Resume
                  </a>
                </motion.div>
              </motion.div>
              <motion.div
                className="md:w-1/2 lg:w-2/5 flex justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isLoaded ? { scale: 1, opacity: 1, rotate: [0, 5, 0] } : {}}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-2xl hover:shadow-blue-600/50 dark:hover:shadow-blue-400/50 transition-shadow duration-300">
                  <Image
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    className="rounded-full transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 dark:from-blue-800/40 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                  <span className="relative inline-block">
                    <span className="absolute inset-x-0 bottom-2 h-3 bg-blue-200 dark:bg-blue-900/50 transform -skew-x-6"></span>
                    <span className="relative">My Skills</span>
                  </span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                  I've developed expertise in various technologies focusing on modern web development.
                  Here's what I bring to the table:
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transform hover:scale-105"
                  >
                    <div className="flex items-center mb-3">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={28}
                        height={28}
                        className="mr-2"
                      />
                      <div className="text-lg font-medium text-blue-600 dark:text-blue-400">{skill.name}</div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                      />
                    </div>
                    <div className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">{skill.level}%</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50 -mx-4 px-4 rounded-3xl">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                  <span className="relative inline-block">
                    <span className="absolute inset-x-0 bottom-2 h-3 bg-blue-200 dark:bg-blue-900/50 transform -skew-x-6"></span>
                    <span className="relative">Featured Projects</span>
                  </span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                  Showcasing some of my recent work. These projects demonstrate my skills in building
                  modern, responsive web applications.
                </p>
              </motion.div>


              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600 dark:border-blue-500 transform hover:translate-y-[-5px]"
                  >
                    <div className="flex items-start">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-4 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Education & Experience Section */}
          <section id="background" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50 -mx-4 px-4 rounded-3xl">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-2 h-3 bg-blue-200 dark:bg-blue-900/50 transform -skew-x-6"></span>
                  <span className="relative">My Journey</span>
                </span>
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-12">
                {/* Education */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    Education
                  </h3>
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600 dark:border-blue-500"
                      >
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm my-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {edu.period}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Experience
                  </h3>
                  <div className="space-y-8">
                    {experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600 dark:border-blue-500"
                      >
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm my-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.period}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 -mx-4 px-4 rounded-t-3xl">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                  <span className="relative inline-block">
                    <span className="absolute inset-x-0 bottom-2 h-3 bg-blue-200 dark:bg-blue-900/50 transform -skew-x-6"></span>
                    <span className="relative">Get In Touch</span>
                  </span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                  Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as possible.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full flex flex-col"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="text-lg font-bold">{project.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between mt-4">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center transition-colors duration-300"
                          >
                            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            Code
                          </a>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center transition-colors duration-300"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  View More on GitHub
                </a>
              </motion.div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                  <span className="relative inline-block">
                    <span className="absolute inset-x-0 bottom-2 h-3 bg-blue-200 dark:bg-blue-900/50 transform -skew-x-6"></span>
                    <span className="relative">Achievements</span>
                  </span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                  Key milestones and recognitions throughout my academic and professional journey.
                </p>
              </motion.div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a href={`tel:${personalInfo.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        github.com/rohit-k-yadav
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        linkedin.com/in/rohitkumaryadav-rky
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.01 10.01 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm />
              {/* Footer Section */}
              <Footer />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}