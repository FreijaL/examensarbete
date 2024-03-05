import { useEffect, useState } from "react";
import Header from "../components/Header";
import Spells from "../components/Spells";
import Button from "../components/Button";
import { useTheme } from "../contexts/Theme.context";
import style from "./styles/SpellsPage.module.scss";

function SpellsPage() {

    const { theme } = useTheme();

    const [spellsData, setSpellsData] = useState<Spell[]>([]);
    const [randomSpell, setRandomSpell] = useState<Spell | null >(null);

    interface Spell {
        id: string;
        name: string;
        type: string;
        effect: string;
    }

    const handleData = async () => {
        const response = await fetch("https://hp-api.onrender.com/api/spells");
        const data: Spell[] = await response.json();
        setSpellsData(data); 
    }

    const getRandomSpell = (): void => {
        const randomIndex = Math.floor(Math.random() * spellsData.length);
        const spell = spellsData[randomIndex];
        setRandomSpell(spell);
    }

    const handleNewSpell = () => {
        getRandomSpell();
    }

    useEffect(() => {
        handleData(); 
    }, []);

    useEffect(() => {
        if (spellsData.length > 0) {
            getRandomSpell();
        }
    }, [spellsData])

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
            </main>
        </>
    )
}

export default SpellsPage;