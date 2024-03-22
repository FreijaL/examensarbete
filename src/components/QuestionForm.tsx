import { QuestionFormProps } from "../interface/interface";
import style from "./styles/QuestionForm.module.scss";


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
            </form>
        </section>
    )
}

export default QuestionForm;