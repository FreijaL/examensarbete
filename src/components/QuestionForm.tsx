import style from "./styles/QuestionForm.module.scss";

function QuestionForm() {

    return(
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
    )
}

export default QuestionForm;