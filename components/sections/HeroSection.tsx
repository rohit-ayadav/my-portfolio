"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PersonalInfo } from '@/types';

interface HeroSectionProps {
    isLoaded: boolean;
    personalInfo: PersonalInfo;
}

const HeroSection = ({ isLoaded, personalInfo }: HeroSectionProps) => {
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
                            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>
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
    );
}
export default HeroSection;