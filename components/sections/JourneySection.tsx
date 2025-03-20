"use client";

import { motion } from 'framer-motion';
import TimelineItem from '@/components/ui/TimelineItem';
import { education, experience } from '@/data/personalInfo';

const JourneySection = () => {
    return (
        <section id="background" className="py-16 md:py-24">
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
                                <TimelineItem
                                    key={index}
                                    title={edu.degree}
                                    subtitle={edu.institution}
                                    period={edu.period}
                                    description={edu.description}
                                    index={index}
                                />
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
                                <TimelineItem
                                    key={index}
                                    title={exp.role}
                                    subtitle={exp.company}
                                    period={exp.period}
                                    description={exp.description}
                                    tags={exp.technologies}
                                    index={index}
                                    isReversed={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default JourneySection;