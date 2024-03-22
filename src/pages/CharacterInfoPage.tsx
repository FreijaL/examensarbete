import { useLocation} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { houseTheme } from "../functions/colorFunction";
import { useTheme } from "../contexts/Theme.context";
import style from "./styles/CharacterInfoPage.module.scss";

function CharacterInfoPage() {

    const { theme } = useTheme();
    const location = useLocation();
    const { character } = location.state || {};
    
    const colorTheme = houseTheme(character);
    const houseColor = {
        color: colorTheme
    }

    window.scrollTo(0, 0);

    return(
        <>
            <Header />
            <main className={style.pageContainer} style={{ ...theme as React.CSSProperties }}>
                <section className={style.imgContainer}>
                    <img src={character.image} alt="" />
                </section>
                <section className={style.textContainer}>
                    <section>
                        <h2>{character.name}</h2>
                        <p>Actor: <span>{character.actor}</span></p>
                        <p>Gender: <span>{character.gender}</span></p>
                        <p>Ancestry: <span>{character.ancestry}</span></p>
                        <p>Date of birth: <span>{character.dateOfBirth}</span></p>
                        <p>Belong in house: <span style={houseColor}>{character.house}</span></p>
                        <p>Patronus: <span>{character.patronus}</span></p>
                    </section>
                    <section>
                        <h4>Wand</h4>
                        <p>Wood: <span>{character.wand.wood}</span></p>
                        <p>Core: <span>{character.wand.core}</span></p>
                        <p>Length: <span>{character.wand.length}</span></p>
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CharacterInfoPage;