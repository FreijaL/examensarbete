import style from "./styles/Menu.module.scss";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/Theme.context";
import { useNavigate } from "react-router-dom";

function Menu() {

    const navigate = useNavigate();

    const { theme } = useTheme();

    const staggerAnimation = {
        hidden: { x: -300, y: -20, opacity: 0},
        visible: { x: 0, y: 0, opacity: 1 },
        click: { scale: 1 }
    }

    return (
        <aside 
            style={{ ...theme as React.CSSProperties }}
            className={style.menuContainer}
        >
            <motion.ul 
                initial="hidden"
                animate="visible"
                transition={{ 
                    staggerChildren: 0.12,
                    type: "spring",
                    stiffness: 500,
                }}
                className={style.menuUl}>
                <motion.li
                    onClick={ () => navigate("/spells")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                    whileTap="click"
                >Spells</motion.li>
                <motion.li
                    // onClick={ () => navigate("/spells")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                    whileTap="click"
                >Quotes</motion.li>
                <motion.li
                    // onClick={ () => navigate("/spells")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                    whileTap="click"
                >Characters</motion.li>
                <motion.li
                    onClick={ () => navigate("/")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                    whileTap="click"
                >Sorting Hat</motion.li>
                <motion.li
                    // onClick={ () => navigate("/spells")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                    whileTap="click"
                >Photo Gallery</motion.li>
                <motion.li
                    // onClick={ () => navigate("/spells")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                    whileTap="click"
                >House Information</motion.li>
            </motion.ul>
        </aside>
    )
}

export default Menu;