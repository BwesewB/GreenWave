import styles from '@/components/MainPageComponents/ExplorePage/ExplorePage.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import Link from 'next/link'

export default function ExplorePage(){

    return(
        <>
            <Header src="/icons/Home.svg" width="30" height="32"/>
            <div className={styles.stylesContainerExplorePageWidth}>
                <div className={styles.stylesContainerExplorePage}>
                    <p className={styles.explorePagePhrase}>EXPLORE EARTHS<br></br>AFFECTED AREAS</p>
                    <Link href="explorePages/rainforest/rainforestCover"></Link>
                    <div className={styles.carouselArea}>
                        <Carousel linking="" text="RAINFOREST" backgroundImage="/images/Group 42.png"/>
                        <Carousel linking="" text="RAINFOREST" backgroundImage="/images/Group 42.png"/>
                        <Carousel linking="" text="REEF" backgroundImage="/images/Group 43.png"/>
                        <Carousel linking="" text="ARCTIC" backgroundImage="/images/Group 44.png"/>
                        <Carousel linking="" text="TAIGA" backgroundImage="/images/Group 45.png"/>
                        <Carousel linking="" text="DESERT" backgroundImage="/images/Group 46.png"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
//ExplorePages/rainforest/rainforestCover