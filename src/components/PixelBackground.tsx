import style from "./styles/PixelBackground.module.scss";
import { motion } from "framer-motion";
import { pixelAnimation } from "../interface/animations";
import { NewSpellProps, SpellProps } from "../interface/interface";


function PixelBackground({newSpell}: NewSpellProps): JSX.Element {

    const shuffle = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--){
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    const getBlocks = () => {
        const { innerWidth, innerHeight } = window;
        const blockSize = innerWidth * 0.025;
        const amountOfBlocks = Math.ceil(innerHeight / blockSize);
        const delays = shuffle([...Array(amountOfBlocks)].map((_, i) => i));
        return delays.map((randomDelay: any, i: any) => {
            return (
                <motion.div 
                    className={style.block}
                    variants={pixelAnimation}
                    initial="initial"
                    animate="show"
                    custom={randomDelay}
                    key={i}
                >
                </motion.div>)
        })
    }

    return (
        <div className={style.pixelBackground} key={newSpell && newSpell.id}>
            {
                [...Array(50)].map((_, i) => {
                    return <div className={style.column} key={i}>
                        {
                            getBlocks()
                        }
                    </div>
                })
            }
        </div>
    )
}

export default PixelBackground;