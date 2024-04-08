import styles from "./Questions.module.css"

export default function Questions(){
    return(
        <>
            <div className={styles.questionsContainer}>
                <p className={styles.questions}>
                    Q: What is your primary mode of transportation for commuting?
                </p>
            </div>
        </>
    )
}