import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/ajyendrasinghjadon', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ajyendra-singh-jadon-10789138a', label: 'LinkedIn' },
        { icon: TbBrandFiverr, href: 'https://www.fiverr.com/s/dDQj24Y', label: 'Fiverr' },
        { icon: FaInstagram, href: 'https://www.instagram.com/_ajyendra', label: 'Instagram' },
        { icon: FaEnvelope, href: 'mailto:ajyendrasinghjadonnn@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="border-t border-glass py-12 mt-auto bg-dark/30 backdrop-blur-md">
            <div className="layout-container flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-primary/20">
                            ASJ
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Ajyendra Singh Jadon</span>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs text-center md:text-left font-light leading-relaxed">
                        Frontend Developer specializing in building premium UI/UX and scalable MERN stack applications.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6">
                    <div className="flex gap-5">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                    <div className="text-gray-400 text-xs font-light">
                        &copy; {new Date().getFullYear()} Ajyendra Singh Jadon. All rights reserved.
                    </div>
                </div>
            </div>
            <div className="layout-container mt-8 pt-8 border-t border-glass/30 text-center">
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
                    Designed & Developed with <span className="text-red-500/60">❤️</span> by Ajyendra
                </p>
            </div>
        </footer>
    );
};

export default Footer;
