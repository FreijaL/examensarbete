import Footer from "../components/Footer";
import Header from "../components/Header";
import SortingHat from "../components/SortingHat";
import { useTheme } from "../contexts/Theme.context";
import style from "./styles/SortingHatPage.module.scss";

function SortingHatPage() {

    const { theme } = useTheme();

    return(
        <>
            <Header />
            <main className={style.pageContainer} style={{ ...theme as React.CSSProperties }}>
                <SortingHat />
            </main>
            <Footer />
        </>
    )
}

export default SortingHatPage;