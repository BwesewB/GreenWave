import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import Graph1 from "@/components/ExplorePageInfoComponents/Graph/BarGraph"

export default function rainforestInfo(){
    return(
        <>
            <div>
                <Graph1/>
            </div>
            <ExplorePageInfo sectionTitle="RAINFOREST"/>
        </>
    )
}