import { motion } from 'framer-motion';

function Button({ children, isLink = false, pageLink = '' }) {
    if (!isLink) return <button className="btn">{children}</button>;
    if (isLink)
        return (
            <motion.button className="btn" whileTap={{ scale: 0.8 }}>
                <a href={`#${pageLink}`}>{children}</a>
            </motion.button>
        );
}

export default Button;
