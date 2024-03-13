import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/Theme.context";
import style from "./styles/NavMenu.module.scss";
import { motion } from "framer-motion";


function NavMenu() {

    const navigate = useNavigate();

    const { theme } = useTheme();

    const menuAnimation = {
        initial: { 
            x: -300, 
            y: -20, 
            opacity: 0
        },
        visible: { 
            x: 0, 
            y: 0, 
            opacity: 1,
        },
        viewport: {once: false}
    }

    return (
        <nav 
            style={{ ...theme as React.CSSProperties }}
            className={style.navContainer}    
        >
            <motion.ul 
                className={style.navUl}
                // variants={menuAnimation}
                initial="initial"
                animate="visible"
                // transition={{ staggerChildren: 0.12 }}
            >
                <motion.li
                    onClick={ () => navigate("/spells")}
                    // variants={menuAnimation}
                    whileHover={{ scale: 1.2}}
                >Spells</motion.li>
                <motion.li
                    // onClick={ () => navigate("/spells")}
                    // variants={menuAnimation}
                    whileHover={{ scale: 1.2}}
                >Quotes</motion.li>
                <motion.li
                    onClick={ () => navigate("/characters")}
                    // variants={menuAnimation}
                    whileHover={{ scale: 1.2}}
                >Characters</motion.li>
                <motion.li
                    onClick={ () => navigate("/sortinghat")}
                    // variants={menuAnimation}
                    whileHover={{ scale: 1.2}}
                >Sorting Hat</motion.li>
                <motion.li
                    onClick={ () => navigate("/photogallery")}
                    // variants={menuAnimation}
                    whileHover={{ scale: 1.2}}
                >Photo Gallery</motion.li>
                <motion.li
                    onClick={ () => navigate("/houseinformation")}
                    // variants={menuAnimation}
                    whileHover={{ scale: 1.2 }}
                >House Information</motion.li>
            </motion.ul>
        </nav>
    )
}

export default NavMenu;