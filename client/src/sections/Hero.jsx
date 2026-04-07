import { motion } from 'framer-motion';
import profile from '../assets/profile.webp';

const Hero = () => {
    const handleScrollToSection = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    const nameText = "Ajyendra Singh Jadon";

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const nameContainerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.3 }
        }
    };

    return (
        <section className="min-h-[calc(100vh-6rem)] w-full flex items-center justify-center">
            <div className="layout-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Content Column */}
                <motion.div
                    className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-2xl md:text-3xl text-gray-400 font-medium overflow-visible"
                    >
                        Hi, I'm

                        <motion.h1
                            variants={nameContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className="mt-2 text-5xl md:text-7xl font-bold drop-shadow-lg leading-[1.3] overflow-visible"
                        >
                            {nameText.split(" ").map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className="inline-block whitespace-nowrap mr-4"
                                >
                                    {word.split("").map((char, charIndex) => (
                                        <motion.span
                                            key={charIndex}
                                            variants={letterVariants}
                                            className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent inline-block"
                                            style={{ display: "inline-block" }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </motion.h1>
                    </motion.div>

                    <motion.h3
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-white/90 font-medium tracking-wide"
                    >
                        MERN Stack Developer
                    </motion.h3>

                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
                    >
                        I build scalable, high-performance web applications using the MERN stack with modern UI/UX and smooth animations.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4"
                    >
                        <motion.a
                            href="#contact"
                            onClick={(e) => handleScrollToSection(e, '#contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] cursor-pointer"
                        >
                            Hire Me
                        </motion.a>
                        <motion.a
                            href="#projects"
                            onClick={(e) => handleScrollToSection(e, '#projects')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3.5 rounded-full bg-glass text-white font-semibold transition-all border border-glass backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 cursor-pointer"
                        >
                            View Projects
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Image/Avatar Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                >
                    {/* Subtle glowing ring background placeholder */}
                    <motion.div
                        animate={{
                            y: [-10, 10, -10],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-primary via-secondary to-accent z-10 shadow-[0_0_50px_rgba(124,58,237,0.3)]"
                    >
                        {/* The actual image container */}
                        <div className="w-full h-full rounded-full bg-dark/90 flex items-center justify-center overflow-hidden border-4 border-dark/50 relative z-20 backdrop-blur-md">
                            <img 
                                src={profile} 
                                alt="Ajyendra Singh Jadon - Full Stack Developer specializing in MERN stack" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative background blurs to emulate floating */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;