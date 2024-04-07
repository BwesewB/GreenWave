import ButtonColoured from "../mainButton"
import styles from "@/components/LandingPage/LandingPage.module.css"

export default function LandingPage(){
    return(
        <>
            <h1 className={styles.logoPlanit}>PlanIt</h1>
            <ButtonColoured href="" text="GET STARTED" className={styles.LandingPageButton1}/>
            <ButtonColoured href="" text="GET STARTED" bgColor="var(--black)" className={styles.LandingPageButton1}/>
        </>
    )
}