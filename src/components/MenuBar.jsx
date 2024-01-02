import { motion } from 'framer-motion';
import PagesLinks from './PagesLinks';

function MenuBar({
    handleVisibility,
    isVisible,
    activeLink,
    handleActiveLink,
    currentLanguage,
    setCurrentLanguage,
}) {
    const menuVars = {
        initial: {
            scaleY: 0,
        },
        open: {
            scaleY: 1,
            transition: {
                duration: 0.15,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: -1,
            transition: {
                duration: 0.2,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
    return (
        <motion.div
            className={`menu-bar`}
            variants={menuVars}
            initial="initial"
            animate="open"
            exit="exit"
        >
            <div className="close-icon">
                <i onClick={handleVisibility} className="ri-close-line"></i>
            </div>
            <PagesLinks
                parentClassName="links-menu-bar"
                onClick={handleVisibility}
                activeLink={activeLink}
                handleActiveLink={handleActiveLink}
                currentLanguage={currentLanguage}
                setCurrentLanguage={setCurrentLanguage}
            />
        </motion.div>
    );
}

export default MenuBar;
