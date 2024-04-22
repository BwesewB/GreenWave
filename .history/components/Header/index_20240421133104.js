import styles from "@/components/Header/Header.module.css"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header(
    // href,
    src="",
    width="",
    height="",
    handleBackOrHomeClick,

){

    const router = useRouter();
    const [name, setName] = useState("");

    // Function to update the name in state and localStorage
    const updateName = (newName) => {
        setName(newName);
        localStorage.setItem('name', newName);
    };

    // Initialize name from localStorage on component mount
    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        }
    }, []);

    return(
        <>
            <header className={styles.headerSection}>
                <div className={styles.Test}>
                    <Link href={""}><Image src={src} width={width} height={height} className={styles.headerSectionIconLeft} onClick={handleBackOrHomeClick}/></Link>
                    <div className={styles.headerSectionWords}>
                        <h1 className={styles.headerSectionH1}>PlanIt</h1>
                        <h4 className={styles.headerSectionH2}>{name}</h4>
                    </div>
                    <div><Image src="/icons/settings.svg" width={40} height={40} className={styles.headerSectionIconRight}/></div>
                </div>

            </header>
        </>
    )
}