import Link from "next/link"
import styles from "@/components/mainButton/mainButton.module.css"

export default function ButtonColoured({
    href, 
    text,
    backgroundColorInactive="",
    backgroundColorActive="",
    
}){
    return(
        <>
            <div className={styles.buttonWhole}>
                <Link href={href}>
                    <div style={{
                    backgroundColorInactive,
                    backgroundColorActive,
                    width:'380px',
                    height:'50px',
                }}>
                    <p style={{

                    }}
                    className={styles.buttonText}
                    >
                        {text}
                    </p>
                    </div>
                </Link>
            </div>

        </>
    )
}
