import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link
            to="/"
            className="relative group text-2xl font-bold tracking-tighter"
        >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                ASJ
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></span>
        </Link>
    );
};

export default Logo;
