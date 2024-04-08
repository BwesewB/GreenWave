import ButtonColoured from "../mainButton"
import styles from "@/components/EnterName/EnterName.module.css"

export default function EnterName(){
    return(
        <>
            <h1 className={styles.logoPlanit}>PlanIt</h1>
            <div className={styles.inputArea}>
                <p>PLEASE ENTER YOUR NAME</p>
                <input type="text" className={styles.nameInput}/>
            </div>
            <div className={styles.EnterNamePageButton}>
                <ButtonColoured 
                    href=""
                    text="CONTINUE"
                />
            </div>
        </>
    )
}