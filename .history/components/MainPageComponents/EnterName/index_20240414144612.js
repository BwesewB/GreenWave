import ButtonColoured from "../../mainButton"
import styles from "@/components/MainPageComponents/EnterName/EnterName.module.css"
import { useState } from "react";

export default function EnterName({ handleContinueClick }){

    const nameRegex = /^(?!.*\b(fuck|shit|asshole|bitch|damn|gyatt)\b)[a-zA-Z]{3,}$/i;
    const[firstName, setFirstName] = useState('')
    const firstNameValid = nameRegex.test(firstName);

    return(
        <>
            <h1 className={styles.logoPlanit}>PlanIt</h1>
            <label className={styles.inputArea} style={firstNameValid ? 'green' : 'red'}>
                <p>PLEASE ENTER YOUR NAME</p>
                <input 
                    className={styles.nameInput} 
                    type="text" 
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            {firstNameValid ? (
                <div className={styles.EnterNamePageButton}>
                    <ButtonColoured 
                        href=""
                        text="CONTINUE"
                        onClickHandler={handleContinueClick}
                    />
                </div>
            ) : 
                <div className={styles.EnterNamePageButton}>
                    <ButtonColoured 
                        href=""
                        text="CONTINUE"
                        bgColor="#D9D8D2"
                        primaryColor="var(--black)"
                    />
                </div>
        }

        </>
    )
}