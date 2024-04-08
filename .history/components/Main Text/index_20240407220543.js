import styles from "./MainText.module.css"

export default function MainText() {
    return(
        <>
            <div className={styles.textContainer}>
                <h1 className={styles.pageHeader}></h1>
                <p className={styles.pagePara}></p>
            </div>
        </>
    )
}

// WELCOME TO THE ACTION PLANNER
// Answer a few questions about your lifestyle and habits to get personalized tips for reducing your carbon footprint and fighting climate change.