import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeader from '../components/common/SectionHeader';
import landingProject from "../assets/landing-project.webp";
import businessProject from "../assets/business-project.webp";
import ecomProject from "../assets/e-commerce.webp";
import sweetsProject from "../assets/sweetsProject.webp";
import marketingProject from "../assets/marketing-project.webp";
import blogProject from "../assets/blog-project.webp";

const projects = [
    {
        id: 1,
        title: "Landing Page",
        description: "Calm, professionally designed dental clinic website built with React and Tailwind CSS, featuring smooth UI, responsive layout, EmailJS contact integration, custom content management, and optimized image uploads for seamless patient experience.",
        tech: ["React", "Tailwind CSS"],
        demoLink: "https://dentalbookingbyajyendra.netlify.app/",
        githubLink: "#",
        image: landingProject
    },
    {
        id: 2,
        title: "Business Website",
        description: "Modern gym business website featuring animated UI with Framer Motion, custom-designed theme, sleek visuals, responsive layout, and integrated Nodemailer for seamless contact, inquiries, and membership communication management.",
        tech: ["React", "Node.js", "Tailwind CSS", "Framer Motion", "Nodemailer",],
        demoLink: "https://ironforge-fitnesss.vercel.app/",
        githubLink: "#",
        image: businessProject
    },
    {
        id: 3,
        title: "Sweets Confectionary Website",
        description: "Attractive and responsive confectionary website showcasing a variety of sweets with category filtering, cart functionality, and smooth user experience for browsing and ordering.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Cloudinary", "JWT", "Mongoose", "TailwindCSS", "Map Integration"],
        demoLink: "https://gangasweets.vercel.app/",
        githubLink: "#",
        image: sweetsProject
    },
    {
        id: 4,
        title: "E-commerce Project",
        description: "Responsive ecommerce platform with admin and user dashboards, secure authentication, Razorpay integration, advanced product filters, and complete order management.",
        tech: ["React", "Node.js", "MongoDB", "RazorPay", "Cloudinary", "JWT", "Mongoose", "bcryptjs", "express", "jsonwebtoken"],
        demoLink: "https://rabbit-clothings.vercel.app/",
        githubLink: "#",
        image: ecomProject
    },
    {
        id: 5,
        title: "Digital Marketing Agency Website",
        description: "Modern and SEO-friendly agency website with service pages, portfolio showcase, lead generation forms, animations, and performance-optimized design.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "Nodemailer"],
        demoLink: "https://bluepeakk-media.vercel.app/",
        githubLink: "#",
        image: marketingProject
    },
    {
        id: 6,
        title: "Blog Website",
        description: "Full-featured blog platform with authentication, rich text editor, categories, comments system, and responsive UI for seamless content creation and reading.",
        tech: ["Coming Soon ..."],
        demoLink: "#",
        githubLink: "#",
        image: blogProject
    }
];

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Staggers the appearance of each card
            },
        },
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="layout-container py-24 min-h-screen">
            <SectionHeader 
                title="Selected Projects" 
                subtitle="Here is a showcase of my recent work focusing on scalable architecture, clean design, and smooth user experiences."
            />

            {/* Projects Grid Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={cardVariants}
                        className="group block rounded-2xl bg-glass border border-glass/50 overflow-hidden hover:border-primary/40 transition-all duration-500 backdrop-blur-md hover:shadow-[0_15px_30px_-5px_rgba(124,58,237,0.3)] relative flex flex-col h-full"
                    >
                        {/* Image Container with Hover Zoom and Overlay */}
                        <div className="relative overflow-hidden aspect-video">
                            <motion.img
                                src={project.image}
                                alt={`Screenshot of ${project.title} - ${project.description.slice(0, 60)}...`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Glass Overlay on Hover */}
                            <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-dark/80 rounded-full text-white hover:text-primary transition-all hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                                    aria-label="GitHub Repository"
                                >
                                    <FaGithub size={22} />
                                </a>
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-primary rounded-full text-white hover:bg-secondary transition-all hover:scale-110 shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
                                    aria-label="Live Demo"
                                >
                                    <FaExternalLinkAlt size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((techItem) => (
                                    <span
                                        key={techItem}
                                        className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full"
                                    >
                                        {techItem}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
