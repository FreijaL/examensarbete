import style from "./styles/ColorTheme.module.scss";
import { useTheme } from "../contexts/Theme.context";
import logoHouses from "/svg/hogwartsHouses.png";
import logoGryffindor from "/svg/gryffindor.png";
import logoRavenclaw from "/svg/ravenclaw.png";
import logoHufflepuff from "/svg/hufflepuff.png";
import logoSlytherin from "/svg/slytherin.png";
import { useState } from "react";
import { motion } from "framer-motion";

function ColorTheme() {

    const { theme, setCurrentTheme } = useTheme();
    const [activeLogo, setActiveLogo] = useState(logoHouses);

    const buttonAnimation = {
        initial: {
            scale: 1,
            boxShadow: "none"
        },
        whileHover: {
            scale: 1.1,
            boxShadow: "0 5px 15px var(--text)",
            cursor: "url(../public/svg/wand.svg), pointer",
        },
        whileTap: {
            scale: 1
        }
    }

    return (
        <section 
            className={style.backdrop}>
            <main 
                className={style.pageContainer}
                style={{ ...theme as React.CSSProperties }}
            >
                <section className={style.houseLogoContainer}>
                    <img 
                        src={ activeLogo } 
                        alt="Hogwarts House logo" 
                        className={style.houseLogo}
                    />
                </section>
                <ul className={style.ulColorTheme}>
                    <li
                        onClick={() => (setCurrentTheme("red"), setActiveLogo(logoGryffindor))}
                        className={style.themeRed}
                    >Gryffindor</li>
                    <li
                        onClick={() => (setCurrentTheme("green"), setActiveLogo(logoSlytherin))}
                        className={style.themeGreen}
                    >Slytherin</li>
                    <li
                        onClick={() => (setCurrentTheme("yellow"), setActiveLogo(logoHufflepuff))}
                        className={style.themeYellow}
                    >Hufflepuff</li>
                    <li
                        onClick={() => (setCurrentTheme("blue"), setActiveLogo(logoRavenclaw))}
                        className={style.themeBlue} 
                    >Ravenclaw</li>
                </ul>
                <motion.button 
                    onClick={() => (setCurrentTheme("dark"), setActiveLogo(logoHouses))}
                    className={`${style.themeDefault} ${style.button}`}
                    variants={buttonAnimation}
                    initial="initial"
                    whileHover="whileHover"
                    whileTap="whileTap"
                >Dark</motion.button>
            </main>
        </section>
    )
}

export default ColorTheme;