import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/Theme.context";
import style from "./styles/NavMenu.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";


function NavMenu() {

    const navigate = useNavigate();
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabNumber: number) =>{
        console.log("handle");
        
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
                    className={activeTab === 1 ? "active" : ""}
                    onClick={ () => {navigate("/spells"), handleTabClick(1)}}
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}
                >Spells</motion.li>
                <motion.li
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}                
                >Quotes</motion.li>
                <motion.li
                    className={activeTab === 2 ? "active" : ""}
                    onClick={ () => {navigate("/characters"), handleTabClick(2)}}
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}                
                >Characters</motion.li>
                <motion.li
                    className={activeTab === 3 ? "active" : ""}
                    onClick={ () => {navigate("/sortinghat"), handleTabClick(3)}}
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}                
                >Sorting Hat</motion.li>
                <motion.li
                    className={activeTab === 4 ? "active" : ""}
                    onClick={ () => {navigate("/photogallery"), handleTabClick(4)}}
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}                
                >Photo Gallery</motion.li>
                <motion.li
                    className={activeTab === 5 ? "active" : ""}
                    onClick={ () => {navigate("/houseinformation"), handleTabClick(5)}}
                    whileHover={{ scale: 1.3, textShadow: "0 8px 2.5px var(--text)"}}
                >House Information</motion.li>
            </motion.ul>
        </nav>
    )
}

export default NavMenu;