import styles from '@/components/Carousel/Carousel.module.css'
import { useState } from 'react';
import Link from 'next/link';

export default function Carousel({
    href,
    text,
    backgroundImage,
}){
    const [clicked, setClicked] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Button clicked Again');
    };

    return(
        <>
            <div className={styles.buttonWhole}>
                <Link href={href}>
                    <button
                        className={`${styles.buttonStyling} ${clicked ? styles.clicked : ''}`} 
                        onMouseDown={() => setClicked(true)}
                        onMouseUp={() => setClicked(false)}
                        style={{ backgroundImage: `url('${backgroundImage}')` }}
                        onClick={handleClick}
                    >
                        <p className={styles.buttonText}>
                            {text}
                        </p>
                    </button>
                    <div className={styles.buttonLower}/>
                </Link>
            </div>
        </>
    )
}