import { useNavigate } from "react-router-dom";
import style from "./styles/CharacterCard.module.scss";
import { motion } from "framer-motion";
import { cardAnimation } from "../interface/animations";
import { CardProps } from "../interface/interface";


function CharacterCard({id, image, name, house, theme, characterData}: CardProps): JSX.Element {
    
    const navigate = useNavigate();

    const houseTheme = {
        color: theme
    }

    const handleCardClick = () => {
        navigate(`/characters/info/${id}`, { state: { character: characterData }});
    }

    return (
        <motion.section 
            onClick={handleCardClick} 
            className={style.cardContainer}
            variants={cardAnimation}
            initial="initial"
            whileHover="animate"
            whileTap="animateTap"
        >
            <section className={style.imageContainer}>
                <img className={style.image} src={image} alt={name} />
            </section>
            <h3>{name}</h3>
            <h4 style={houseTheme}>{house}</h4>
        </motion.section>
    )
}

export default CharacterCard;