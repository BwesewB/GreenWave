import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import Graph from "@/components/ExplorePageInfoComponents/Graph/BarGraph"

export default function rainforestInfo(){
    return(
        <>
            <Graph/>
            <ExplorePageInfo sectionTitle="RAINFOREST"/>
            
        </>
    )
}