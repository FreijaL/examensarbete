import style from "./styles/ColorTheme.module.scss";
import { useTheme } from "../contexts/Theme.context";
import logoHouses from "/svg/hogwartsHouses.png";
import logoGryffindor from "/svg/gryffindor.png";
import logoRavenclaw from "/svg/ravenclaw.png";
import logoHufflepuff from "/svg/hufflepuff.png";
import logoSlytherin from "/svg/slytherin.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { buttonAnimation } from "../interface/animations";

function ColorTheme() {

    const { theme, setCurrentTheme } = useTheme();
    const [activeLogo, setActiveLogo] = useState<string>(logoHouses);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const savedLogo = localStorage.getItem('logo');

        if (savedTheme && savedLogo) {
            setCurrentTheme(savedTheme);
            setActiveLogo(savedLogo);
        }
    }, []);

    const handleThemeChange = (theme, logo) => {
        setCurrentTheme(theme);
        setActiveLogo(logo);
        localStorage.setItem('theme', theme);
        localStorage.setItem('logo', logo);
    };

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
                        onClick={() => (handleThemeChange("red", logoGryffindor))}
                        className={style.themeRed}
                    >Gryffindor</li>
                    <li
                        onClick={() => (handleThemeChange("green", logoSlytherin))}
                        className={style.themeGreen}
                    >Slytherin</li>
                    <li
                        onClick={() => (handleThemeChange("yellow", logoHufflepuff))}
                        className={style.themeYellow}
                    >Hufflepuff</li>
                    <li
                        onClick={() => (handleThemeChange("blue", logoRavenclaw))}
                        className={style.themeBlue} 
                    >Ravenclaw</li>
                </ul>
                <motion.button 
                    onClick={() => (handleThemeChange("dark", logoHouses))}
                    className={`${style.themeDefault} ${style.button}`}
                    variants={buttonAnimation}
                    initial="initial"
                    whileHover="whileHover"
                    whileTap="whileTap"
                >White</motion.button>
            </main>
        </section>
    )
}

// function currentTheme(theme) {
//     if (theme === "Gryffindor") {
//         return logoGryffindor
//     } else if (theme === "Hufflepuff") {
//         return logoHufflepuff
//     } else if (theme === "Ravenclaw") {
//         return logoRavenclaw
//     } else if (theme === "Slytherin") {
//         return logoSlytherin
//     } else {
//         return logoHouses
//     }
// }

export default ColorTheme;