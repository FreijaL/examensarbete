import Header from "../components/Header";
import style from "./styles/HomePage.module.scss"
import { motion, useAnimate } from "framer-motion";


function HomePage() {

        // läs på om useAnimate! Utan vid klick
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
                <section className={style.formContainer}>
                    <h3>Here is a question for you to answer..</h3>
                    <form action="" className={style.form}>
                        <section className={style.answerContainer}>
                            <input type="radio" id="answer1" name="question1" className={style.radioButton} />
                            <label htmlFor="answer1">Answer 1</label>
                        </section>
                        <section className={style.answerContainer}>
                            <input type="radio" id="answer2" name="question1" className={style.radioButton} />
                            <label htmlFor="answer2">Answer 2</label>
                        </section>
                        <section className={style.answerContainer}>
                            <input type="radio" id="answer2" name="question1" className={style.radioButton} />
                            <label htmlFor="answer2">Answer 3</label>
                        </section>
                        <section className={style.answerContainer}>
                            <input type="radio" id="answer2" name="question1" className={style.radioButton} />
                            <label htmlFor="answer2">Answer 4</label>
                        </section>
                    </form>
                </section>

            </main>
            
        </>
    )
}

export default HomePage;