import styles from "@/pages/explorePages/taiga/Taiga.module.css"
import ExplorePageCover from "@/components/MainPageComponents/ExplorePageCover"

export default function rainforestCover(){
    return(
        <>
            <div className={styles.reefCoverContainer}>
                <ExplorePageCover src="/images/TaigaBG.png" theTitleText="THE TAIGA" theSuppText="Cold coniferous forests essential for carbon storage, at risk from deforestation and wildfires."/>
            </div>
        </>
    )
}