import styles from "@/pages/explorePages/arctic/Arctic.module.css"
import ExplorePageCover from "@/components/MainPageComponents/ExplorePageCover"

export default function rainforestCover(){
    return(
        <>
            <div className={styles.reefCoverContainer}>
                <ExplorePageCover src="/images/ArcticBG.png" theTitleText="THE ARCTIC" theSuppText="Icy polar region home to unique wildlife, facing rapid warming and habitat loss due to climate change."/>
            </div>
        </>
    )
}