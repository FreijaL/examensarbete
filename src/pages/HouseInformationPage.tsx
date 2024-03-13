import Footer from "../components/Footer";
import Header from "../components/Header";
import NavigationCard from "../components/NavigationCard";
import { useTheme } from "../contexts/Theme.context";
import style from "./styles/HouseInformationPage.module.scss";

function HouseInformationPage() {

    const { theme } = useTheme();

    return(
        <>
            <Header />
            <main className={style.mainContainer} style={{ ...theme as React.CSSProperties }}>
                <section>
                    <p>Click on the house you wolud like to learn more about. Take quizes and join the family!</p>
                </section>
                <section className={style.cardWrapper}>
                    <NavigationCard img="./svg/gryffindor.png" imgName="Gryffindor" text="Gryffindor" onClick={() => "#"} />
                    <NavigationCard img="./svg/hufflepuff.png" imgName="Hufflepuff" text="Hufflepuff" onClick={() => "#"} />
                    <NavigationCard img="./svg/ravenclaw.png" imgName="Ravenclaw" text="Ravenclaw" onClick={() => "#"} />
                    <NavigationCard img="./svg/slytherin.png" imgName="Slytherin" text="Slytherin" onClick={() => "#"} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default HouseInformationPage;