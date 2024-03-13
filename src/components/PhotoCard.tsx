import style from "./styles/PhotoCard.module.scss";
import { motion } from "framer-motion";

interface PhotoProps {
    name: string;
    url: string;
}

function PhotoCard({name, url}: PhotoProps): JSX.Element {

    return(
        <motion.section 
            className={style.cardContainer}
            initial={{ width: 100, scale: 1 }}
            whileHover={{ width: 550, borderRadius: 0, scale: 1 }}
        >
            <img className={style.cardImage} src={url} alt={name} />
        </motion.section>
    )
}

export default PhotoCard;