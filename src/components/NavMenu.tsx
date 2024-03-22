import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/Theme.context";
import style from "./styles/NavMenu.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";


function NavMenu() {

    /* 
        TODO
        - if time, ev change from navigate to useLOcation to make it work with styling on active navMenu
    */

    const navigate = useNavigate();
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabNumber: number) =>{
        setActiveTab(tabNumber)
    }

    return (
        <nav 
            style={{ ...theme as React.CSSProperties }}
            className={style.navContainer}    
        >
            <motion.ul 
                className={style.navUl}
            >
                <motion.li
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}
                    onClick={ () => {navigate("/spells"); handleTabClick(1)}}
                    className={activeTab === 1 ? style.active : ""}
                >Spells</motion.li>
                <motion.li
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}                
                >Quotes</motion.li>
                <motion.li
                    onClick={ () => {navigate("/characters"); handleTabClick(2)}}
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}                
                    className={activeTab === 2 ? style.active : ""}
                >Characters</motion.li>
                <motion.li
                    className={activeTab === 3 ? style.active : ""}
                    onClick={ () => {navigate("/sortinghat"); handleTabClick(3)}}
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}                
                >Sorting Hat</motion.li>
                <motion.li
                    className={activeTab === 4 ? style.active : ""}
                    onClick={ () => {navigate("/photogallery"); handleTabClick(4)}}
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}                
                >Photo Gallery</motion.li>
                <motion.li
                    className={activeTab === 5 ? style.active : ""}
                    onClick={ () => {navigate("/houseinformation"); handleTabClick(5)}}
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}
                >House Information</motion.li>
            </motion.ul>
        </nav>
    )
}

export default NavMenu;