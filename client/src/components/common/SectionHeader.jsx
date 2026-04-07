import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = true }) => {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} mb-16`}
        >
            <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4"
            >
                {title}
            </motion.h2>
            <motion.div 
                variants={itemVariants} 
                className={`w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6 ${centered ? '' : 'ml-0'}`}
            ></motion.div>
            {subtitle && (
                <motion.p 
                    variants={itemVariants} 
                    className="text-gray-400 text-lg max-w-2xl font-light"
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    );
};

export default SectionHeader;
