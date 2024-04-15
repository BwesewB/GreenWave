import styles from "./QuizComplete.module.css"
export default function quizComplete(){
    return(
        <>
            <div className={styles.completeContainer}>
                <h1 className={styles.complete}></h1>
                <p className={styles.completePara}>Based on your responses, we've calculated your estimated carbon footprint and identified areas where you can make positive changes to reduce it.</p>

            </div>
        </>
    )
}