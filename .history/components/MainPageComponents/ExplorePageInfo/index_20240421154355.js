import styles from "@/components/MainPageComponents/ExplorePageInfo/ExplorePageInfo.module.css"
import Header from "@/components/Header"

export default function ExplorePageInfo({
    sectionTitle,

}){
    return(
        <>
            <div className={styles.entirePageInfo}>
                <div className={styles.entirePageInfoCenterer}>
                    <Header src="/icons/longArrow.svg" width="31" height="20" handleBackOrHomeClick={""}/>
                    <div className={styles.sectionTitleCenterer}>
                        <h1>{sectionTitle}</h1>
                    </div>
                </div>
            </div>

        </>
    )
}