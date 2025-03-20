"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import JourneySection from '@/components/sections/JourneySection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';
import { personalInfo } from '@/data/personalInfo';
import Footer from '@/components/layout/Footer';

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

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />

        <main className="container mx-auto px-4 py-8">
          <HeroSection isLoaded={isLoaded} personalInfo={personalInfo} />
          <SkillsSection />
          <ProjectsSection />
          <JourneySection />
          <AchievementsSection />
          <ContactSection personalInfo={personalInfo} />
        </main>

        <Footer />
      </div>
    </div>
  );
}