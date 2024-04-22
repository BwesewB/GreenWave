import styles from '@/components/MainPageComponents/ExplorePage/ExplorePage.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ExplorePage(){



    return(
        <>
            <Header src="/icons/Home.svg" width="30" height="32"/>
            <p className={styles.explorePagePhrase}>MAKING A DIFFERENCE<br></br>ONE STEP AT A TIME</p>
            <Footer/>
        </>
    )
}