import Link from "next/link"
import styles from './Footer.module.css'

export default function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <Link href={"/quiz"}><button className={styles.footerButton}>PLAN</button></Link>
                    <button className={styles.footerButton}>EXPLORE</button>
                    <button className={styles.footerButton}>ABOUT</button>
                </div>
            </footer>
        </>
    )
}