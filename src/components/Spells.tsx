import style from "./styles/Spells.module.scss";
import { motion } from "framer-motion";

function Spells({spell}) {

    // const spellAnimation = {
    //     initial: {
    //         opacity: 0,
    //     },
    //     animate: {
    //         opacity: 1,
    //     }
    // }


    return (
        <motion.section 
            className={style.spellContainer}
            // // variants={spellAnimation}
            // initial="initial"
            // animate="animate"
            // transition={{ duration: 3.5 }}
        >
            <h2 >{spell.name}</h2>
            <p className={style.spellName}>{spell.description}</p>
        </motion.section>
    )
}

export default Spells;