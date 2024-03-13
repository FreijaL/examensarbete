import { useNavigate } from "react-router-dom";
import style from "./styles/NavigationCard.module.scss";
import { motion } from "framer-motion";

interface NavigationCardProps {
    img: string,
    imgName: string,
    text: string,
    onClick: () => void,
}

function NavigationCard({img, imgName, text, onClick}: NavigationCardProps): JSX.Element {


    return(
        <motion.section 
            className={style.cardContainer}
            onClick={onClick}
        >
            <section className={style.imgContainer}>
                <img 
                    src={img} 
                    alt={imgName} 
                    className={style.image} 
                />
            </section>
            <h4 className={style.text}>{text}</h4>
        </motion.section>
    )
}

export default NavigationCard;