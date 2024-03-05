import style from "./styles/Menu.module.scss";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/Theme.context";
import { useNavigate } from "react-router-dom";

type MenuProps = {
    isVisible: boolean,
    style?: React.CSSProperties
}

function Menu({isVisible}) {

    const navigate = useNavigate();

    const { theme } = useTheme();

    const staggerAnimation = {
        hidden: { x: -300, y: -20, opacity: 0},
        visible: { x: 0, y: 0, opacity: 1 },
        click: { scale: 1 }
    }

    return (
        <aside 
            style={{ ...theme as React.CSSProperties, display: isVisible ? "block" : "none" }}
            className={style.menuContainer}
        >
            <motion.ul 
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.12 }}
                className={style.menuUl}>
                <motion.li
                    onClick={ () => navigate("/spells")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                >Spells</motion.li>
                <motion.li
                    // onClick={ () => navigate("/spells")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                >Quotes</motion.li>
                <motion.li
                    onClick={ () => navigate("/characters")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                >Characters</motion.li>
                <motion.li
                    onClick={ () => navigate("/")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                >Sorting Hat</motion.li>
                <motion.li
                    // onClick={ () => navigate("/spells")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                >Photo Gallery</motion.li>
                <motion.li
                    // onClick={ () => navigate("/spells")}
                    variants={staggerAnimation}
                    whileHover={{ scale: 1.2}}
                >House Information</motion.li>
            </motion.ul>
        </aside>
    )
}

export default Menu;