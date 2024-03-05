import style from "./styles/CharacterCard.module.scss";

interface CardProps {
    image: string;
    name: string;
    house: string;
    theme: string;
}

function CharacterCard({image, name, house, theme}) {

    const houseTheme = {
        color: theme
    }


    return (
        <section className={style.cardContainer}>
            <section className={style.imageContainer}>
                <img className={style.image} src={image} alt={name} />
            </section>
            <h3>{name}</h3>
            <h4 style={houseTheme}>{house}</h4>
        </section>
    )
}

export default CharacterCard;