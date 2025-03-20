import { motion } from 'framer-motion';

interface AchievementCardProps {
    achievement: string;
    index: number;
}

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
    return (
        <motion.div
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
    );
};

export default AchievementCard;