import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import Header from "@/components/Header"

export default function ExplorePageInfo({
    sectionTitle,

}){
    return(
        <>
            <Header src="/icons/longArrow.svg" width="31" height="20" handleBackOrHomeClick={""}/>
            <div className={styles.sectionTitleCenterer}>
                <h1>{sectionTitle}</h1>
            </div>
        </>
    )
}