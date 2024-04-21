import styles from "@/pages/explorePages/desert/Desert.module.css"
import ExplorePageCover from "@/components/MainPageComponents/ExplorePageCover"

export default function desertCover(){
    return(
        <>
            <div className={styles.reefCoverContainer}>
                <ExplorePageCover src="/images/DesertBG.png" theTitleText="THE DESERT" theSuppText="Arid landscapes with unique biodiversity and renewable energy potential, threatened by desertification and climate change."/>
            </div>
        </>
    )
}