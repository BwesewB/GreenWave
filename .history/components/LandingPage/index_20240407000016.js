import ButtonColoured from "../mainButton"
import styles from "@/components/LandingPage/LandingPage.module.css"

export default function LandingPage({ onGetStartedClick }){
    return(
        <>
            <div className={styles.LandingPage}>
                <div className={styles.LandingPageTopElements}>
                    <h1 className={styles.logoPlanit}>PlanIt</h1>
                    <p className={styles.catchphrase}>YOUR ACTIONS, OUR FUTURE: <br></br> MAKING A DIFFERENCE<br></br>ONE STEP AT A TIME</p>
                </div>
                <div className={styles.LandingPageButtons}>
                    <ButtonColoured 
                        text="GET STARTED"
                        onClick={onGetStartedClick}
                    />
                    <div className={styles.LandingPageButtonsSpacer}/>
                    <ButtonColoured text="QUICK TUTORIAL" bgColor="var(--black)" primaryColor="var(--white)"/>
                </div>
            </div>            
        </>
    )
}