import style from "./styles/Spells.module.scss";
import { motion } from "framer-motion";

function Spells({spell}) {


    return (
        <motion.section 
            className={style.spellContainer}
        >
            <h2 >{spell.name}</h2>
            <p className={style.spellName}>{spell.description}</p>
        </motion.section>
    )
}

export default Spells;