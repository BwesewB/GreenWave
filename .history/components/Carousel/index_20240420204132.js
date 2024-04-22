import styles from '@/components/Carousel/Carousel.module.css'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Carousel({
    href,
    text,
    backgroundImage,
}){
    const [clicked, setClicked] = useState(false);

    return(
        <>
            <div className={styles.buttonWhole}>
                <Link href={href}>
                    <button
                        className={`${styles.buttonStyling} ${clicked ? styles.clicked : ''}`} 
                        onMouseDown={() => setClicked(true)}
                        onMouseUp={() => setClicked(false)}
                        style={{ backgroundImage: `url('${backgroundImage}')` }}
                        // onClick={handleButtonClick}
                    >
                        <p className={styles.buttonText}>
                            {text}
                        </p>
                        {/* <Image src={src} width="140" height="130" alt={alt} className={styles.carouselBackgroundImage}/> */}
                    </button>
                    <div className={styles.buttonLower}/>
                </Link>
            </div>
        </>
    )
}