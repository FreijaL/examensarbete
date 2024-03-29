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

export function houseTheme2(house: string) {
    if (house === "Gryffindor"){
        return "#9e0808" 
    } else if (house === "Slytherin"){
        return "#1c7e2b"
    } else if (house === "Hufflepuff"){
        return "#E2B44E"
    } else if (house === "Ravenclaw"){
        return "#3358a3"
    } else {
        return "#ffffff"
    }
}

export function houseTheme3(house: string) {
    if (house === "Gryffindor"){
        return "./svg/gryffindor.png" 
    } else if (house === "Slytherin"){
        return "./svg/slytherin.png" 
    } else if (house === "Hufflepuff"){
        return "./svg/hufflepuff.png" 
    } else if (house === "Ravenclaw"){
        return "./svg/ravenclaw.png" 
    } else {
        return ;
    }
}