import Link from "next/link"
import styles from "@/components/mainButton/mainButton.module.css"
import { useState } from "react";

export default function ButtonColoured({
    link, 
    text,
    bgColor="var(--white)",
    primaryColor="var(--green)",
    onClickHandler
}){
    const [clicked, setClicked] = useState(false);

    return(
        <>
            <div className={styles.buttonWhole}>
                <Link href={link}>
                    <button 
                        style={{ 
                            backgroundColor: bgColor, 
                        }} 
                        className={`${styles.buttonStyling} ${clicked ? styles.clicked : ''}`} 
                        onMouseDown={() => setClicked(true)}
                        onMouseUp={() => setClicked(false)}
                        onClick={onClickHandler}
                    >
                        <p style={{ color: primaryColor}} className={styles.buttonText}>
                            {text}
                        </p>
                    </button>
                    <div className={styles.buttonLower} style={{ backgroundColor: primaryColor}}/>
                </Link>
            </div>

        </>
    )
}

