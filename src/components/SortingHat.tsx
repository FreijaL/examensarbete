import { ReactNode, useEffect, useState } from "react";
import style from "./styles/SortingHat.module.scss"
import { motion, useAnimation } from "framer-motion";
import { Question, Option } from "../interface/interface";

function SortingHat(): ReactNode {

    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const fetchQuestions = async () => {
        try {
            const response = await fetch("../../questions.json");
            if (!response.ok) {
                throw new Error("Faild to fetch data");
            }
            const data: Question[] = await response.json();
            setQuestions(data);
        } catch (error) {
            console.log("Error fetching questions:", error);
        }
    }

    useEffect(() => {
        fetchQuestions();
        startAnimation();
    }, [])

    const handleAnswer = (answer: string) => {
        setSelectedAnswer(answer);

        setTimeout(() => {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null)
        }, 1000);
    }

    const allQueationsAnswered = currentQuestionIndex >= questions.length;
    const currentQuestion = questions[currentQuestionIndex];

    const animation = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    const animation5 = useAnimation();
    const animation6 = useAnimation();

    const startAnimation = async () => {
        await animation.start({
            scale: 1.5,
            opacity: 1,
            transition: {
                duration: 2
            }
        })
        await animation.start({
            opacity: 0,
            transition: {
                delay: 1.5
            }
        })
        await animation2.start({
            scale: 2,
            opacity: 1,
            transition: {
                delay: .5,
                duration: 3
            }
        })
        await animation2.start({
            display: "none",
            transition: {
                delay: 4
            }
        })
        await animation3.start({
            scale: 2,
            opacity: 1,
            transition: {
                delay: .5,
                duration: 3
            }
        })
        await animation3.start({
            display: "none",
            transition: {
                delay: 4
            }
        })
        await animation4.start({
            scale: 2,
            opacity: 1,
            transition: {
                delay: .5,
                duration: 3
            }
        })
        await animation4.start({
            display: "none",
            transition: {
                delay: 4
            }
        })
        await animation5.start({
            scale: 2,
            opacity: 1,
            transition: {
                delay: .5,
                duration: 3
            }
        })
        await animation5.start({
            display: "none",
            transition: {
                delay: 4
            }
        })
        await animation6.start({
            opacity: 1,
            transition: {
                delay: .5,
                duration: 3
            }
        })
    }

    return (
        <section>
            {/* <iframe src="https://assets.pinterest.com/ext/embed.html?id=12173861484230490" height="700" width="600" frameborder="0" scrolling="no" ></iframe> */}
            <section className={style.headingContainer}>      
                <section>
                    <motion.img 
                        src="../../public/svg/sortingHat.png"
                        initial={{ rotateZ: 0}}
                        animate={{ rotateZ: [10, -10, 10]}}
                        transition={{ 
                            duration: 15,
                            repeat: Infinity
                        }}
                    />
                </section>
                <motion.h2 
                    className={style.heading}
                    initial={{ opacity: 0, scale: 8 }}
                    animate={animation}
                    >Which Hogwarts house do you belong in?
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, scale: 8}}   
                    animate={animation2} 
                    >You might belong in Gryffindor,<br></br>
                    Where dwell the brave at heart<br></br
                    >Their daring, nerve and chivalry<br></br>
                    Set Gryffindors apart.
                </motion.h3>
                <motion.h3
                    initial={{ opacity: 0, scale: 8}}   
                    animate={animation3} 
                    >Or yet in wise old Raveclaw,<br></br>
                    If you're a ready mind,<br></br>
                    Where those of wit and learning<br></br>
                    Will always find their kind.
                </motion.h3>
                <motion.h3
                    initial={{ opacity: 0, scale: 8}}   
                    animate={animation4} 
                    >You might belong in Hufflepuff,<br></br>
                    Where they are just and loyal,<br></br>
                    Those patient Hufflepuffs are true<br></br>
                    And unafraid of toil.
                </motion.h3>
                <motion.h3
                    initial={{ opacity: 0, scale: 8}}   
                    animate={animation5} 
                    >Or perhaps in SLytherin,<br></br>
                    You'll make your real friends,<br></br>
                    Those cunning folk use any means<br></br>
                    to achieve their ends.
                </motion.h3>
                <motion.button 
                    className={style.button}
                    initial={{ opacity: 0 }}
                    animate={animation6}
                    onClick={() => handleAnswer("")}
                    >Begin the sortering
                </motion.button>
                <section>
                    {
                        allQueationsAnswered ? (
                            <p>All questions answered, result pending</p>
                        ) :  (
                            <section className={style.questionForm}>
                                <h2>{currentQuestion.question}</h2>
                                <ul className={style.form}>
                                    {
                                        currentQuestion.options.map((option, index) => (
                                            <li key={index} className={style.answerContainer}>
                                                <input 
                                                    className={style.radioButton}
                                                    type="radio" 
                                                    name="answer" 
                                                    id={option.house}
                                                    value={option.answer}
                                                    checked={selectedAnswer === option.answer} 
                                                    onChange={() => handleAnswer(option.answer)}
                                                />
                                                <label htmlFor={option.house}>{option.answer}</label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </section>
                        )
                    }
                </section>
            </section>
        </section>
    )
}

export default SortingHat;