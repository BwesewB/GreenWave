import ButtonColoured from "../mainButton"
import styles from "@/components/EnterName/EnterName.module.css"

export default function EnterName(){
    return(
        <>
        <div className={styles.EnterNamePageButton}>
            <ButtonColoured 
                href=""
                text="CONTINUE"
            />
        </div>

        </>
    )
}