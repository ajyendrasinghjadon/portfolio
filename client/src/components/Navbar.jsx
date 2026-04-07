import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from './Logo';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Add shadow and glass effect on scroll
            setIsScrolled(window.scrollY > 20);

            // Simple active section detection based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            let currentSection = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is near the top of the viewport
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToSection = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        // Smooth scroll logic
        const targetId = href.replace('#', '');

        // Handle "Home" scrolling to top
        if (targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.getElementById(targetId);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80; // offset for sticky nav
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-dark/85 backdrop-blur-md border-b border-glass shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
                : 'bg-transparent border-b border-transparent py-5'
                }`}
        >
            <div className="layout-container flex justify-between items-center">
                {/* Logo with smooth scroll to top */}
                <div onClick={(e) => handleScrollToSection(e, '#home')} className="cursor-pointer">
                    <Logo />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollToSection(e, link.href)}
                            className="relative text-sm font-medium transition-colors group py-2 px-2"
                            aria-label={`Navigate to ${link.name} section`}
                        >
                            <span className={`relative z-10 ${activeSection === link.href.substring(1)
                                ? 'text-primary'
                                : 'text-gray-300 hover:text-white'
                                }`}>
                                {link.name}
                            </span>

                            {/* Active / Hover Background Effect */}
                            {activeSection === link.href.substring(1) && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute inset-0 bg-glass rounded-md -z-0"
                                    initial={false}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </a>
                    ))}

                    <button
                        onClick={(e) => handleScrollToSection(e, '#contact')}
                        aria-label="Navigate to contact section to hire me"
                        className="hidden lg:block ml-4 px-5 py-2 rounded-full bg-glass border border-glass text-sm font-medium hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-white shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                        Hire Me
                    </button>
                </nav>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-2xl text-gray-300 hover:text-white transition-colors p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Navigation"
                >
                    {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu (Slide Down Animation) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-dark/95 backdrop-blur-xl border-b border-glass"
                    >
                        <div className="flex flex-col px-6 py-6 pb-8 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScrollToSection(e, link.href)}
                                    className={`text-lg font-medium p-3 rounded-lg flex items-center transition-all ${activeSection === link.href.substring(1)
                                        ? 'bg-primary/10 text-primary border border-primary/20'
                                        : 'text-gray-300 hover:bg-glass hover:text-white border border-transparent'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 mt-2 border-t border-glass">
                                <button 
                                    onClick={(e) => handleScrollToSection(e, '#contact')}
                                    className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
                                    aria-label="Navigate to contact section"
                                >
                                    Let's Connect
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
