import style from "./styles/QuestionForm.module.scss";

interface QuestionFormProps {
    question: string;
    answers: [object];
}

function QuestionForm({question, answers}: QuestionFormProps): JSX.Element {

    return(
        <section className={style.formContainer}>
            <h3>{question}</h3>
            <form action="" className={style.form}>
                {
                    answers.map(answer => {
                    return (
                        <section className={style.answerContainer}>
                            <input type="radio" id="answer1" name={answer.house} className={style.radioButton} />
                            <label htmlFor="{answer.house}">{answer.answer}</label>
                        </section>
                    )
                    })
                }
                {/* <section className={style.answerContainer}>
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
                </section> */}
            </form>
        </section>
    )
}

export default QuestionForm;