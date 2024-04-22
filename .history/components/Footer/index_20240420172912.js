import Link from "next/link"
import styles from './Footer.module.css'

export default function Footer({ handleActionPlannerClick }){
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <button onClick={handleActionPlannerClick} className={styles.footerButton}>PLAN</button>
                    <button className={styles.footerButton}>EXPLORE</button>
                    <button className={styles.footerButton}>ABOUT</button>
                </div>
            </footer>
        </>
    )
}