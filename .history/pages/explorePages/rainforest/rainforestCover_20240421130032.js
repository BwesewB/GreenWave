import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import ExplorePageCover from "@/components/MainPageComponents/ExplorePageCover"

export default function rainforestCover(){
    return(
        <>
            <div className={styles.rainforestCoverContainer}>
                <ExplorePageCover src="/public/images/RainforestBG.png" alt="rainforest bluured image" width="430" height="932"/>
            </div>
        </>
    )
}