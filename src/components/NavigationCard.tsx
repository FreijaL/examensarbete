import style from "./styles/NavigationCard.module.scss";
import { motion } from "framer-motion";
import { NavigationCardProps } from "../interface/interface";

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