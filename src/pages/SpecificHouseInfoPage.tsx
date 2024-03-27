import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import style from "./styles/SpecificHouseInfoPage.module.scss";
import { useTheme } from "../contexts/Theme.context";
import { houseTheme3 } from "../functions/colorFunction";

function SpecificHouseInfoPage(): JSX.Element {

    const { theme } = useTheme();
    const location = useLocation();

    const house = location.state.house;

    return(
        <>
            <Header />
            <main className={style.pageContainer} style={{ ...theme as React.CSSProperties }}>
                <section className={style.textContainer}>
                    <section className={style.heading}>
                        <img src={`../public/svg/${house.house}.png`} alt="houseLoge" className={style.logo} />
                        <h2>{house.house}</h2>
                        <img src={`../public/svg/${house.house}.png`} alt="houseLoge" className={style.logo}/>

                    </section>
                    <p>{house.text}</p>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SpecificHouseInfoPage;