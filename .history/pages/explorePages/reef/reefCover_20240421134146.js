import styles from "@/pages/explorePages/reef/Reef.module.css"
import ExplorePageCover from "@/components/MainPageComponents/ExplorePageCover"

export default function rainforestCover(){
    return(
        <>
            <div className={styles.reefCoverContainer}>
                <ExplorePageCover src="/images/ReefBG.png"/>
            </div>
        </>
    )
}