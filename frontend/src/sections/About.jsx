import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';

const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Express.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'JavaScript', level: 88 },
];

const About = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger children reveals
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="layout-container py-24 min-h-screen flex flex-col justify-center">
            <SectionHeader title="About Me" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left Column: Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-6 text-gray-400 text-lg font-light leading-relaxed"
                >
                    <motion.p variants={itemVariants}>
                        I am a dedicated <span className="text-white font-medium">MERN Stack developer</span> based in Noida, India, specializing in building responsive, scalable, and user-focused web applications. My expertise lies in <span className="text-primary font-medium">MongoDB, Express.js, React, and Node.js</span>, combined with modern frontend technologies to create visually engaging and high-performing interfaces.
                    </motion.p>
                    <motion.p variants={itemVariants}>
                        I focus on writing clean, maintainable code and delivering solutions that not only work efficiently but also provide seamless user experiences. From landing pages to full-scale business platforms and e-commerce systems, I enjoy transforming ideas into functional digital products.
                    </motion.p>
                    <motion.p variants={itemVariants}>
                        I am continuously learning and refining my skills to stay updated with modern development practices and deliver professional-grade solutions to clients worldwide.
                    </motion.p>
                </motion.div>

                {/* Right Column: Skills */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-glass border border-glass rounded-2xl p-8 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_8px_32px_rgba(124,58,237,0.15)] hover:border-primary/30"
                >
                    <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white mb-6">
                        Technical Skills
                    </motion.h3>

                    <div className="flex flex-col gap-6">
                        {skills.map((skill, index) => (
                            <motion.div key={skill.name} variants={itemVariants} className="w-full">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-300 font-medium">{skill.name}</span>
                                    <span className="text-accent text-sm font-semibold">{skill.level}%</span>
                                </div>
                                {/* Progress Bar Track */}
                                <div className="w-full bg-dark/50 rounded-full h-2.5 overflow-hidden">
                                    {/* Progress Bar Fill with Animation */}
                                    <motion.div
                                        className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 1.2, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
