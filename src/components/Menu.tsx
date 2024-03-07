import style from "./styles/Menu.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../contexts/Theme.context";
import { useNavigate } from "react-router-dom";

type MenuProps = {
    isVisible: boolean,
    // style?: React.CSSProperties
}

function Menu({isVisible}: MenuProps): JSX.Element {

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
        }
    }

    return (
        <AnimatePresence>
            {
                isVisible && (
                <aside 
                    style={{ ...theme as React.CSSProperties, display: isVisible ? "block" : "none" }}
                    className={style.menuContainer}
                >
                    <motion.ul 
                        className={style.menuUl}
                        // variants={menuAnimation}
                        initial="initial"
                        animate="visible"
                        transition={{ staggerChildren: 0.2 }}
                    >
                        <motion.li
                            onClick={ () => navigate("/spells")}
                            variants={menuAnimation}
                            whileHover={{ scale: 1.2}}
                        >Spells</motion.li>
                        <motion.li
                            // onClick={ () => navigate("/spells")}
                            variants={menuAnimation}
                            whileHover={{ scale: 1.2}}
                        >Quotes</motion.li>
                        <motion.li
                            onClick={ () => navigate("/characters")}
                            variants={menuAnimation}
                            whileHover={{ scale: 1.2}}
                        >Characters</motion.li>
                        <motion.li
                            onClick={ () => navigate("/")}
                            variants={menuAnimation}
                            whileHover={{ scale: 1.2}}
                        >Sorting Hat</motion.li>
                        <motion.li
                            // onClick={ () => navigate("/spells")}
                            variants={menuAnimation}
                            whileHover={{ scale: 1.2}}
                        >Photo Gallery</motion.li>
                        <motion.li
                            // onClick={ () => navigate("/spells")}
                            variants={menuAnimation}
                            whileHover={{ scale: 1.2}}
                        >House Information</motion.li>
                    </motion.ul>
                </aside>
            )}
        </AnimatePresence>
    )
}

export default Menu;