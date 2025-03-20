import { motion } from 'framer-motion';
import Image from 'next/image';
import { TechSkill } from '@/types';

interface SkillCardProps {
    skill: TechSkill;
    index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
    return (
        <motion.div
            variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
            }}
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
    );
};

export default SkillCard;