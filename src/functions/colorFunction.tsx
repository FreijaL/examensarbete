import { Character } from "../interface/interface";

export function houseTheme(character: Character) {
    if (character.house === "Gryffindor"){
        return "#9e0808" 
    } else if (character.house === "Slytherin"){
        return "#1c7e2b"
    } else if (character.house === "Hufflepuff"){
        return "#E2B44E"
    } else if (character.house === "Ravenclaw"){
        return "#3358a3"
    } else {
        return "#ffffff"
    }
}