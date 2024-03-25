import { ReactNode, useEffect, useState } from "react";
import style from "./styles/SortingHat.module.scss"
import { motion, useAnimation } from "framer-motion";
import { Question, Option } from "../interface/interface";
import { houseTheme2 } from "../functions/colorFunction";

type House = 'Hufflepuff' | 'Ravenclaw' | 'Gryffindor' | 'Slytherin';

function SortingHat(): ReactNode {

    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<Option | null>(null);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const [mostVotedHouse, setMostVotedHouse] = useState("");

    const fetchQuestions = async () => {
        try {
            const response = await fetch("../../data/questions.json");
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
        startAnimation();        
    }, [])

    const handleAnswer = (option: Option) => {
        const updatedUserAnswers = [...userAnswers, option.house];
        setUserAnswers(updatedUserAnswers);
        setSelectedAnswer(option);
        setTimeout(() => {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null)
        }, 500);
    }

    const allQuestionsAnswered = currentQuestionIndex >= questions.length;
    const currentQuestion = questions[currentQuestionIndex];

    const countUserAnswers = (house: string) => {
        return userAnswers.filter(answer => answer === house).length;
    }

    const houseVotes: Record<House, number> = {
        Hufflepuff: countUserAnswers('Hufflepuff'),
        Ravenclaw: countUserAnswers('Ravenclaw'),
        Gryffindor: countUserAnswers('Gryffindor'),
        Slytherin: countUserAnswers('Slytherin'),
    };
    
    const findMosteVotedHouse = () => {
        const voteCounts = Object.values(houseVotes);
        const mostVotes = Math.max(...voteCounts);
        const tiedHouses = Object.keys(houseVotes).filter(house => houseVotes[house as House] === mostVotes)
        let newMostVotedHouse;

        if (tiedHouses.length > 1){
            newMostVotedHouse = tiedHouses[Math.floor(Math.random() * tiedHouses.length)];
        } else {
            newMostVotedHouse = tiedHouses[0];
        }
        
        setMostVotedHouse(newMostVotedHouse);
        return newMostVotedHouse;
    }
    
    
    useEffect(() => {
        if (!isButtonVisible){
            fetchQuestions();
        }
    }, [isButtonVisible])

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
                delay: 3
            }
        })
        await animation3.start({
            scale: 2,
            opacity: 1,
            transition: {
                delay: .5,
                duration:  3
            }
        })
        await animation3.start({
            display: "none",
            transition: {
                delay: 3
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
                delay:  3
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
                delay: 3
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

    useEffect(() => {
        if(allQuestionsAnswered && currentQuestionIndex === questions.length) {
            setMostVotedHouse(findMosteVotedHouse());

            // localStorage.setItem("mostVotedHouse", mostVotedHouse);
        } else {
            setMostVotedHouse("")
        }
    },[allQuestionsAnswered, currentQuestionIndex])

    
    const colorTheme = houseTheme2(mostVotedHouse);
    const houseColor = {
        color: colorTheme
    }

    return (
        <section className={style.headingContainer}>      
            <section>
                <motion.img 
                    src="../../public/svg/sortingHat.png"
                    initial={{ rotateZ: 0}}
                    animate={{ rotateZ: [8, -8, 8]}}
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
                >Or perhaps in Slytherin,<br></br>
                You'll make your real friends,<br></br>
                Those cunning folk use any means<br></br>
                to achieve their ends.
            </motion.h3>
            {
                allQuestionsAnswered && currentQuestionIndex ? (
                    <motion.p
                    className={style.mostVotedHouse}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 1, duration: 3}}
                    >You are a true <span style={houseColor} >{mostVotedHouse}</span></motion.p>
                    
                ) : ""
            }
            {
                isButtonVisible &&  (
                    <motion.button 
                        className={`${style.button} ${isButtonVisible ? "" : style.hidden}`}
                        initial={{ opacity: 0 }}
                        animate={animation6}
                        onClick={() => setIsButtonVisible(false)}
                        >Begin the sortering
                    </motion.button>
                )
            }
            
            <section>
                {
                    !isButtonVisible && currentQuestion &&
                        ( 
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
                                                    onChange={() => handleAnswer(option)}
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
    )
}

export default SortingHat;