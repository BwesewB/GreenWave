import ButtonColoured from "../../mainButton"
import styles from "@/components/MainPageComponents/EnterName/EnterName.module.css"
import { useState } from "react";

export default function EnterName({ handleContinueClick }){

    const nameRegex = /^[a-zA-Z]{2,}$/;
    const[firstName, setFirstName] = useState('')
    const firstNameValid = nameRegex.test(firstName);

    return(
        <>
            <h1 className={styles.logoPlanit}>PlanIt</h1>
            <label className={styles.inputArea}>
                <p>PLEASE ENTER YOUR NAME</p>
                <input className={styles.nameInput} type="text" required/>
            </label>
            <div className={styles.EnterNamePageButton}>
                <ButtonColoured 
                    href=""
                    text="CONTINUE"
                    onClickHandler={handleContinueClick}
                />
            </div>
        </>
    )
}