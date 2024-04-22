import styles from '@/components/Carousel/Carousel.module.css'
import { useState } from 'react';
import Link from 'next/link';

export default function Carousel({
    href,
    text
}){
    const [clicked, setClicked] = useState(false);

    return(
        <>
            <div className={styles.buttonWhole}>
            <Link href={href}>
                    <div
                        className={`${styles.buttonStyling} ${clicked ? styles.clicked : ''}`} 
                        onMouseDown={() => setClicked(true)}
                        onMouseUp={() => setClicked(false)}
                        // onClick={handleButtonClick}
                    >
                        <p className={styles.buttonText}>
                            {text}
                        </p>
                    </div>
                    <div className={styles.buttonLower}/>
                </Link>
            </div>
        </>
    )
}