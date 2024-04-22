import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import Graph3 from "@/components/ExplorePageInfoComponents/Graph/LineGraph"

export default function arcticInfo(){
    return(
        <>
            <div className={styles.rainforestInfoGraph}>
                <div className={styles.rainforestInfoGraphCenterer}>
                    <Graph3/>
                </div>
            </div>
            <ExplorePageInfo sectionTitle="ARCTIC"/>
        </>
    )
}