import ButtonColoured from "../mainButton"
import styles from "@/components/LandingPage/LandingPage.module.css"

export default function LandingPage(){
    return(
        <>
            <h1 className={styles.logoPlanit}>PlanIt</h1>
            <div className={styles.LandingPageButtons}>
                <ButtonColoured href="" text="GET STARTED"/>
                <div className={styles.LandingPageButtonsSpacer}/>
                <ButtonColoured href="" text="QUICK TUTORIAL" bgColor="var(--black)" primaryColor="var(--white)"/>
            </div>
            
        </>
    )
}