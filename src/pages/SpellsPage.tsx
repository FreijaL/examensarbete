import { useEffect, useState } from "react";
import Header from "../components/Header";

function SpellsPage() {

    const [spellsData, setSpellsData] = useState([]);
    let randomSpell;

    const handleData = async () => {
        const response = await fetch("https://hp-api.onrender.com/api/spells");
        const data = await response.json();
        setSpellsData(data)  
        // setSpellsData(data)        
    }

    // function randomSpells() {
    //     for (let i = 0; i < spellsData.length; i++) {
    //         const spell = Math.floor(Math.random() * spellsData.length);
    //         console.log(spell);
    //         randomSpell = spell;
    //     }
    // }

    useEffect(() => {
        handleData(); 
    }, []);

    return (
        <>
            <Header />
            <main>
                <h2>{randomSpell}</h2>
                {/* {
                    spellsData.map(spell =>
                        <>
                            <h2>{spell.name}</h2>
                            <p>{spell.description}</p>
                        </>
                        )
                } */}
            </main>
        </>
    )
}

export default SpellsPage;