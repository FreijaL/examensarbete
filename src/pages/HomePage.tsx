import Header from "../components/Header";
import QuestionForm from "../components/QuestionForm";
import style from "./styles/HomePage.module.scss"
import { motion, useAnimate } from "framer-motion";


function HomePage() {

    /* 
    TODO:
    - close menu and theme when click outside
    - useAnimate may be necessary for multiple animations
    - animation effects on spellpage (opacity 0 > 1 duration 3s?)
    */
    
        // const [ scope, animate] = useAnimate();

        // const handleAnimate = async () => {
        //     await animate(".heading", { scale: 3 })
        // };
        
    


    return (
        < >
            <Header />
            <main className={style.mainContainer}>
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
                <QuestionForm />

            </main>
            
        </>
    )
}

export default HomePage;