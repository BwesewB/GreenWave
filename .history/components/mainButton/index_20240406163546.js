import Link from "next/link"
import styles from "@/components/mainButton/mainButton.module.css"
import { useState } from "react";

export default function ButtonColoured({
    href, 
    text,
    bgColor="var(--white)",
    primaryColor="var(--green)"
}){
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return(
        <>
            <div className={styles.buttonWhole}>
                <Link href={href}>
                    <button 
                        style={{ backgroundColor: bgColor}} 
                        className={styles.buttonStyling} 
                        onClick={handleClick}>
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
