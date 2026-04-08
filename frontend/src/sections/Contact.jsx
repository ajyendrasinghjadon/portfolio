import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { TbBrandFiverr } from "react-icons/tb";
import SectionHeader from '../components/common/SectionHeader';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error as user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        // Honeypot check for basic spam protection
        if (e.target.honey.value) {
            console.warn("Honeypot triggered");
            setSubmitStatus('success'); // Fake success for bots
            return;
        }

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                const apiUrl = import.meta.env.VITE_API_URL || '';
                const response = await fetch(`${apiUrl.replace(/\/$/, '')}/api/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (response.ok) {
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    setSubmitStatus('error');
                    console.error('Server error:', data.message);
                }
            } catch (error) {
                setSubmitStatus('error');
                console.error('Network error:', error);
            } finally {
                setIsSubmitting(false);
                // Allow user more time to see success message
                setTimeout(() => setSubmitStatus(null), 8000);
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/ajyendrasinghjadon', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ajyendra-singh-jadon-10789138a?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
        { icon: TbBrandFiverr, href: 'https://www.fiverr.com/s/dDQj24Y', label: 'Fiverr' },
        { icon: FaInstagram, href: 'https://www.instagram.com/_ajyendra?igsh=ZTFvczZuMjZhNHkw', label: 'Instagram' },
        { icon: FaEnvelope, href: 'mailto:ajyendrasinghjadonnn@gmail.com', label: 'Email' },
    ];

    return (
        <section className="layout-container py-24 min-h-screen flex flex-col justify-center">
            <SectionHeader 
                title="Get in Touch" 
                subtitle="I’m available for freelance projects or full-time opportunities. Let’s talk!"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                {/* Left Column: Contact Form */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-glass border border-glass rounded-2xl p-8 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                        {/* Honeypot field (hidden) */}
                        <input type="text" name="honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                        {/* Name Input */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className={`w-full bg-dark/50 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-glass focus:border-primary'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary transition-all`}
                            />
                            {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name}</span>}
                        </motion.div>

                        {/* Email Input */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                className={`w-full bg-dark/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-glass focus:border-primary'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary transition-all`}
                            />
                            {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email}</span>}
                        </motion.div>

                        {/* Message Textarea */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                rows="5"
                                className={`w-full resize-none bg-dark/50 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-glass focus:border-primary'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary transition-all`}
                            />
                            {errors.message && <span className="text-red-400 text-xs mt-1">{errors.message}</span>}
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-2 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold transition-all shadow-[0_0_15px_rgba(124,58,237,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Sending...</span>
                                </div>
                            ) : (
                                "Send Message"
                            )}
                        </motion.button>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                className="p-4 mt-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center font-medium"
                            >
                                Thank you! Your message has been sent successfully.
                            </motion.div>
                        )}
                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                className="p-4 mt-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center font-medium"
                            >
                                Reaches server, but failed to send email. Please try again.
                            </motion.div>
                        )}
                    </form>

                    {/* Decorative glow behind form */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
                </motion.div>

                {/* Right Column: Contact Info & Socials */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col justify-center h-full gap-10 lg:pl-10"
                >
                    <div>
                        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-4">
                            Connect with me
                        </motion.h3>
                        <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed font-light mb-8">
                            Whether you have a question about a project, freelance opportunities, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
                        </motion.p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="w-14 h-14 rounded-full bg-glass border border-glass flex items-center justify-center text-gray-300 hover:text-primary hover:bg-white/5 hover:border-primary/30 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-sm"
                            >
                                <social.icon size={22} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Location or Extra Info placeholder */}
                    <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-glass">
                        <p className="text-gray-400 font-light text-sm">
                            <span className="text-gray-300 font-medium">Location:</span> Noida, India <br />
                            <span className="text-gray-300 font-medium">Working Hours:</span> Flexible
                        </p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
