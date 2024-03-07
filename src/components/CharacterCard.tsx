import style from "./styles/CharacterCard.module.scss";
import { motion } from "framer-motion";

interface CardProps {
    image: string;
    name: string;
    house: string;
    theme: string;
}

function CharacterCard({image, name, house, theme}: CardProps): JSX.Element {

    const houseTheme = {
        color: theme
    }

    const cardAnimation = {
        initial: {
            scale: 1,
        },
        animate: {
            scale: 1.05,
            border: "1px solid var(--text)",
            boxShadow: "0 5px 15px var(--textShadow)",
        },
        animateTap: {
            scale: 1,
        }
    }

    return (
        <motion.section 
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