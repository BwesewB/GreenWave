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
                        <button style={{backgroundColor: bgColor}} className={styles.buttonStyling}>
                            <p style={{ color: primaryColor}} className={styles.buttonText}>
                                {text}
                            </p>
                        </button>
                    <div className={styles.buttonLower} style={{ }}/>
                </Link>
            </div>

        </>
    )
}
