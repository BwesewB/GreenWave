import styles from '@/components/Carousel/Carousel.module.css'
import { useState } from 'react';

export default function Carousel(){
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        console.log("Button Clicked");
        if (onClickHandler) {
            onClickHandler();
        }
    };

    return(
        <>
            <div className={styles.buttonWhole}>
                <Link href={href}>
                    <button
                        className={`${styles.buttonStyling} ${clicked ? styles.clicked : ''}`} 
                        onMouseDown={() => setClicked(true)}
                        onMouseUp={() => setClicked(false)}
                        // onClick={handleButtonClick}
                    >
                        <p style={{ color: primaryColor}} className={styles.buttonText}>
                            {text}
                        </p>
                    </button>
                    <div className={styles.buttonLower} style={{ backgroundColor: primaryColor}}/>
                </Link>
            </div>
        </>
    )
}