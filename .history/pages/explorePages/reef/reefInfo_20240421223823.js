import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import Graph2 from "@/components/ExplorePageInfoComponents/Graph/LineGraph"

export default function reefInfo(){
    return(
        <>
            <Graph2/>
            <ExplorePageInfo sectionTitle="REEF"/>
        </>
    )
}