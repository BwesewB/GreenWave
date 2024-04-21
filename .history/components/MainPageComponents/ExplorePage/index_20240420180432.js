import styles from '@/components/MainPageComponents/ExplorePage/ExplorePage.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'

export default function ExplorePage(){



    return(
        <>
            <Header src="/icons/Home.svg" width="30" height="32"/>
            <p className={styles.explorePagePhrase}>EXPLORE EARTHS<br></br>AFFECTED AREAS</p>
            <div className={styles.carouselArea}>
                <Carousel href="" text="herro"/>
            </div>
            <Footer/>
        </>
    )
}