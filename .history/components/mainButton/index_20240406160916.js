import Link from "next/link"
import styles from "@/components/mainButton/mainButton.module.css"

export default function ButtonColoured({
    href, 
    text,
    bgColor="",
    primaryColor=""
}){
    return(
        <>
            <div className={styles.buttonWhole}>
                <Link href={href}>
                    <div style={{backgroundColor: bgColor}}>
                        <button className={styles.buttonStyling}>
                            <p style={{ color: primaryColor}} className={styles.buttonText}>
                                {text}
                            </p>
                        </button>
                    </div>
                    <div className={styles.buttonLower} style={{ }}/>
                </Link>
            </div>

        </>
    )
}
