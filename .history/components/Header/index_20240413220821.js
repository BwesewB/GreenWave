import styles from "@/components/Header/Header.module.css"
import Image from "next/image"

export default function Header(){
    return(
        <>
            <header className={styles.headerSection}>
                <div><Image src="/icons/longArrow.svg" width={31} height={20}/></div>
                <div></div>
                <div><Image src="/icons/settings.svg" width={40} height={40}/></div>
            </header>
        </>
    )
}