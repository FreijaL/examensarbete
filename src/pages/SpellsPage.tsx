import { useEffect, useState } from "react";
import Header from "../components/Header";
import Spells from "../components/Spells";
import Button from "../components/Button";
import { useTheme } from "../contexts/Theme.context";
import style from "./styles/SpellsPage.module.scss";
import PixelBackground from "../components/PixelBackground";
import Footer from "../components/Footer";
import { Spell } from "../interface/interface";

function SpellsPage() {

    const { theme } = useTheme();

    const [spellsData, setSpellsData] = useState<Spell[]>([]);
    const [randomSpell, setRandomSpell] = useState<Spell | null >(null);

    const handleData = async () => {
        const response = await fetch("../../data/spells.json");
        const data: Spell[] = await response.json();
        setSpellsData(data); 
        if (data.length > 0) {
            getRandomSpell(data);
        }
    }

    const getRandomSpell = (spells: Spell[]): void => {
        const randomIndex = Math.floor(Math.random() * spellsData.length);
        const spell = spells[randomIndex];
        setRandomSpell(spell);
    }

    const handleNewSpell = (): void => {
        getRandomSpell(spellsData);
    }

    useEffect(() => {
        handleData(); 
    }, []);

    return (
        <>
            <Header />
            <main 
                className={style.pageContainer}
                style={{ ...theme as React.CSSProperties }} >
                
                {  
                    randomSpell && (
                        <Spells 
                        key={randomSpell.id}
                        spell={randomSpell}
                        />
                    )
                }
                <Button name="New Spell" onClick={handleNewSpell} />
                <PixelBackground newSpell={() => randomSpell} />
            </main>
            <Footer />
        </>
    )
}

export default SpellsPage;