import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import style from "./styles/SpecificHouseInfoPage.module.scss";
import { useTheme } from "../contexts/Theme.context";

function SpecificHouseInfoPage(): JSX.Element {

    const { theme } = useTheme();
    const location = useLocation();

    const house = location.state.house;

    return(
        <>
            <Header />
            <main className={style.pageContainer} style={{ ...theme as React.CSSProperties }}>
                <section className={style.textContainer}>
                    <h2>{house.house}</h2>
                    <p>{house.text}</p>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SpecificHouseInfoPage;