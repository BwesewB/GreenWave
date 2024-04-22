import styles from "@/pages/explorePages/arctic/Arctic.module.css"
import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import Graph3 from "@/components/ExplorePageInfoComponents/Graph/BarGraph"

export default function arcticInfo(){
    return(
        <>
            <div className={styles.arcticInfoGraph}>
                <div className={styles.arcticInfoGraphCenterer}>
                    <Graph3/>
                </div>
            </div>
            <ExplorePageInfo sectionTitle="ARCTIC"/>
        </>
    )
}