import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Pagination } from "../components/Pagination";
import CharacterCard from "../components/CharacterCard";
import style from "./styles/CharactersPage.module.scss";
import { useTheme } from "../contexts/Theme.context";
import Footer from "../components/Footer";
import { houseTheme } from "../functions/colorFunction";
import { Character } from "../interface/interface";

function CharactersPage() {

    const { theme } = useTheme();

    const [characters, setCharacters] = useState<Character[]>([]);
    const [originalCharacters, setOriginalCharacters] = useState<Character[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [charactersPerPage] = useState<number>(12);

    const fetchData = async () => {
        const response = await fetch("../../characters.json");
        if (!response.ok) {
            throw new Error("Faild to fetch data");
        }
        const data: Character[] = await response.json();            
        setCharacters(data);
        setOriginalCharacters(data);
    }

    function charactersImage(character: Character) {
        if(character.image == ""){
            return "https://i.pinimg.com/564x/7a/67/77/7a677767e510306cf23fa0d347ce472e.jpg"
        } else {
            return character.image
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    function searchInput(e: any){
        setCharacters(originalCharacters);
        let copyCharacters = [...originalCharacters];
        let returnCharacters = copyCharacters.filter((character: Character) => 
            (character.name.includes(e) 
            || character.name.toUpperCase().includes(e)
            || character.name.toLowerCase().includes(e)));
        setCharacters(returnCharacters);
    }

    function selectInput(e: any){
        let copyCharacter = [...originalCharacters];
        if (e.value === "gryffindor"){
            let returnCharacters = copyCharacter.filter((character: Character) => character.house === "Gryffindor");
            setCharacters(returnCharacters)
        } else if (e.value === "slytherin"){
            let returnCharacters = copyCharacter.filter((character: Character) => character.house === "Slytherin");
            setCharacters(returnCharacters)
        } else if (e.value === "hufflepuff"){
            let returnCharacters = copyCharacter.filter((character: Character) => character.house === "Hufflepuff");
            setCharacters(returnCharacters)
        } else if (e.value === "ravenclaw"){
            let returnCharacters = copyCharacter.filter((character: Character) => character.house === "Ravenclaw");
            setCharacters(returnCharacters)
        } else {
            setCharacters(originalCharacters)
        }
    }

    return (
        <>
            <Header />
            <main 
                className={style.pageContainer}
                style={{ ...theme as React.CSSProperties }}
                >
                <section className={style.inputContainer}>
                    <input 
                        className={style.searchInput} 
                        type="text" 
                        placeholder="Search character..." 
                        onChange={(e) => searchInput(e.target.value)}
                    />
                    <select 
                        onChange={(e) => selectInput(e.target)}
                        className={style.selection} 
                        name="House" 
                        id="house"
                    >
                        <option value="default" defaultValue={""}>All houses</option>
                        <option value="gryffindor">Gryffindor</option>
                        <option value="slytherin">Slytherin</option>
                        <option value="hufflepuff">Hufflepuff</option>
                        <option value="ravenclaw">Ravenclaw</option>
                    </select>
                </section>
                <section className={style.cardsContainer}>
                    {
                        currentCharacters.map(character => (
                            <CharacterCard                             
                                key={character.id}
                                id={character.id}
                                name={character.name}
                                image={charactersImage(character)}
                                house={character.house}
                                theme={houseTheme(character)}
                                characterData={character}
                            />
                        ))                        
                    }
                </section>
                <Pagination 
                    charactersPerPage={charactersPerPage}
                    totalCharacters={characters.length}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </main>
            <Footer />
        </>
    )
}

export default CharactersPage;