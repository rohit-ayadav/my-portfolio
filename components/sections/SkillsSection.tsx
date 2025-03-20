"use client";

import { motion } from 'framer-motion';
import SkillCard from '@/components/ui/SkillCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { skills } from '@/data/personalInfo';

const SkillsSection = () => {
    return (
        <section id="skills" className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="My Skills"
                    subtitle="I've developed expertise in various technologies focusing on modern web development. Here's what I bring to the table:"
                />

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        animate: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;