import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import ExplorePageCover from "@/components/MainPageComponents/ExplorePageCover"

export default function rainforestCover(){
    return(
        <>
            <div className={styles.rainforestCoverContainer}>
                <ExplorePageCover src="/images/RainforestBG.png" alt="rainforest blurred image"/>
            </div>
        </>
    )
}