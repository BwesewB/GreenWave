import styles from '@/components/Carousel/Carousel.module.css'
import { useState } from 'react';
import Link from 'next/link';

export default function Carousel(
    href,
    text
){
    const [clicked, setClicked] = useState(false);

    return(
        <>
            <div className={styles.buttonWhole}>

            </div>
        </>
    )
}