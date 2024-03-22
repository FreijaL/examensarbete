import { ReactNode, useEffect, useState } from "react";
import style from "./styles/Header.module.scss";
import Menu from "./Menu";
import ColorTheme from "../components/ColorTheme";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/Theme.context";
import { useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";

function Header(): ReactNode {

    const navigate = useNavigate();

    const { theme } = useTheme();

    const [showMenu, setShowMenu] = useState(false);
    const [openColorTheme, setOpenColorTheme] = useState(false);

    useEffect(() => {
        function handleClick(e: MouseEvent){
            setTimeout(() => {
                const menu = document.querySelector(".menuContainer");

                if (showMenu && menu && !menu.contains(e.target as Node)){
                    setShowMenu(false)
                }
            }, 0);
        }

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [showMenu])

    return (
        <>
            <header 
                style={{ ...theme as React.CSSProperties }}
                className={style.headerContainer}
            >
                <section className={style.menuIconContainer}>
                    <motion.img 
                        className={`${style.menuIcon} ${ showMenu ? style.active : style.inactive }`} 
                        src="../../svg/plattformKingCross.png" 

                        initial={{ scale: 1}}
                        whileHover={{ 
                            scale: 1.1,
                            y: -10
                        }}
                        transition={{ duration: 1}}
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
            <NavMenu />
            <Menu isVisible={showMenu} />
            {
                openColorTheme && <ColorTheme modal={openColorTheme} setModal={setOpenColorTheme} />
            }
        </>
    )
}

export default Header;