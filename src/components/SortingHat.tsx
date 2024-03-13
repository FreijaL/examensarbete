import style from "./styles/SortingHat.module.scss"
import { motion } from "framer-motion";

function SortingHat() {

    return (
        <section>
            {/* <iframe src="https://assets.pinterest.com/ext/embed.html?id=12173861484230490" height="700" width="600" frameborder="0" scrolling="no" ></iframe> */}
            <section className={style.headingContainer}>                
                    <motion.img 
                        src="../../public/svg/sortingHat.png"
                        initial={{ rotateZ: 0}}
                        animate={{ rotateZ: [10, -10, 10]}}
                        transition={{ 
                            duration: 15,
                            repeat: Infinity
                        }}
                    />
                    <h2 
                        className={style.heading}
                        // initial={{ opacity: 1, scale: 6 }}
                        // animate={{ opacity: 1, scale: 2 }}
                        // transition={{
                        //     duration: 2,
                        //     type: "tween",
                        //     // stiffness: "150"
                        // }}
                    >Which Hogwarts house do you belong in?</h2>
                </section>
        </section>
    )
}

export default SortingHat;