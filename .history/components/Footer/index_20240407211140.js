import Link from "next/link"
import styles from './Footer.module.css'

export default function Footer({ handlePlanPageClick }){
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    {/* <Link href={"/quiz"}><button className={styles.footerButton}>PLAN</button></Link> */}
                    <button onClick={handlePlanPageClick} className={styles.footerButton}>PLAN</button>
                    <button className={styles.footerButton}>EXPLORE</button>
                    <button className={styles.footerButton}>ABOUT</button>
                </div>
            </footer>
        </>
    )
}