"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import AchievementCard from '@/components/ui/AchievementCard';
import { achievements } from '@/data/personalInfo';

const AchievementsSection = () => {
    return (
        <section id="achievements" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50 -mx-4 px-4 rounded-3xl">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Achievements"
                    subtitle="Key milestones and recognitions throughout my academic and professional journey."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            achievement={achievement}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;