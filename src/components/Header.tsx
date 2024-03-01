import { ReactNode, useState } from "react";
import style from "./styles/Header.module.scss";
import Menu from "./Menu";
import ColorTheme from "../components/ColorTheme";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/Theme.context";
import { useNavigate } from "react-router-dom";

function Header(): ReactNode {

    const navigate = useNavigate();

    const { theme } = useTheme();

    const [showMenu, setShowMenu] = useState(false);
    const [openColorTheme, setOpenColorTheme] = useState(false);
    const [flip, setFlip] = useState(false);

    return (
        <>
            <header 
                style={{ ...theme as React.CSSProperties }}
                className={style.headerContainer}
            >
                <section className={style.menuIconContainer}>
                    <motion.img 
                        onClick={() => (setShowMenu(prevstate => !prevstate), setFlip(!flip))}
                        className={`${style.menuIcon} { showMenu ? ${style.active} : "" }`} 
                        src="../../svg/plattformKingCross.png" 

                        initial={{ scale: 1}}
                        whileHover={{ 
                            scale: 1.1,
                            y: -10
                        }}
                        animate={{ rotateY: flip ? 360 : 0  }}
                        transition={{ duration: 1}}
                        // variants={flipOnHover}
                        // initial="initial"
                        // whileHover="whilehover"

                    />
                </section>
                <h1
                    onClick={() => navigate("/")}
                >World of Magic</h1>
                <img 
                    onClick={() => setOpenColorTheme(prevstate => !prevstate)}
                    className={style.linkIcon} 
                    src="../../svg/hogwartsHouses.png" />
            </header>
            {
                showMenu ? <Menu /> : ""
            }
            {
                openColorTheme && <ColorTheme /> 
            }
        </>
    )
}

export default Header;