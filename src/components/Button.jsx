import { motion } from 'framer-motion';

function Button({ children, isLink = false, pageLink = '', onClick = null }) {
    if (!isLink)
        return (
            <button className="btn" onClick={onClick()}>
                {children}
            </button>
        );
    if (isLink)
        return (
            <motion.button
                className="btn"
                whileTap={{ scale: 0.8 }}
                onClick={onClick}
            >
                <a href={`#${pageLink}`}>{children}</a>
            </motion.button>
        );
}

export default Button;
