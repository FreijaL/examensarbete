import style from "./styles/Menu.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../contexts/Theme.context";
import { useNavigate } from "react-router-dom";
import { MenuProps } from "../interface/interface";


function Menu({isVisible}: MenuProps): JSX.Element {

    const navigate = useNavigate();

    const { theme } = useTheme();

    return (
        <AnimatePresence>
            {
                isVisible && (
                <aside 
                    style={{ ...theme as React.CSSProperties, display: isVisible ? "block" : "none" }}
                    className={style.menuContainer}
                >
                    <ul className={style.menuUl}>
                        <motion.li
                            onClick={ () => navigate("/spells")}
                            whileHover={{ scale: 1.2}}
                        >Spells</motion.li>
                        <motion.li
                            whileHover={{ scale: 1.2}}
                        >Quotes</motion.li>
                        <motion.li
                            onClick={ () => navigate("/characters")}
                            whileHover={{ scale: 1.2}}
                        >Characters</motion.li>
                        <motion.li
                            onClick={ () => navigate("/")}
                            whileHover={{ scale: 1.2}}
                        >Sorting Hat</motion.li>
                        <motion.li
                            onClick={ () => navigate("/photogallery")}
                            whileHover={{ scale: 1.2}}
                        >Photo Gallery</motion.li>
                        <motion.li
                            // onClick={ () => navigate("/spells")}
                            whileHover={{ scale: 1.2}}
                        >House Information</motion.li>
                    </ul>
                </aside>
            )}
        </AnimatePresence>
    )
}

export default Menu;