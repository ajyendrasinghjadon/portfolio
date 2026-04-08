import { motion } from 'framer-motion';

const BackgroundParticles = () => {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            {/* Primary Glow Orb */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-primary/10 rounded-full blur-[60px] md:blur-[100px]"
                style={{ willChange: "transform" }}
            />

            {/* Accent Glow Orb */}
            <motion.div
                animate={{
                    x: [0, -70, 40, 0],
                    y: [0, 60, -40, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[40%] right-[10%] w-[25vw] h-[25vw] min-w-[250px] min-h-[250px] bg-accent/10 rounded-full blur-[60px] md:blur-[100px]"
                style={{ willChange: "transform" }}
            />

            {/* Secondary Glow Orb */}
            <motion.div
                animate={{
                    x: [0, 40, -60, 0],
                    y: [0, 50, -50, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[10%] left-[30%] w-[20vw] h-[20vw] min-w-[200px] min-h-[200px] bg-secondary/10 rounded-full blur-[60px] md:blur-[100px]"
                style={{ willChange: "transform" }}
            />
        </div>
    );
};

export default BackgroundParticles;
