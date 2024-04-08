import ButtonColoured from "../mainButton"
import styles from "@/components/EnterName/EnterName.module.css"

export default function EnterName(){
    return(
        <>
            <h1 className={styles.logoPlanit}>PlanIt</h1>
            <p className={styles.catchphrase}>YOUR ACTIONS, OUR FUTURE: <br></br> MAKING A DIFFERENCE<br></br>ONE STEP AT A TIME</p>
            <div className={styles.EnterNamePageButton}>
                <ButtonColoured 
                    href=""
                    text="CONTINUE"
                />
            </div>
        </>
    )
}