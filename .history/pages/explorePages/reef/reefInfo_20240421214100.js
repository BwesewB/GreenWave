import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import Graph2 from "@/components/ExplorePageInfoComponents/Graph/BarGraph"

export default function rainforestInfo(){
    return(
        <>
            <div className={styles.rainforestInfoGraph}>
                <div className={styles.rainforestInfoGraphCenterer}>
                    <Graph2/>
                </div>
            </div>
            <ExplorePageInfo sectionTitle="REEF"/>
        </>
    )
}