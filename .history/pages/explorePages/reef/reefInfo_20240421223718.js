import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import Graph2 from "@/pages/explorePages/arctic"

export default function reefInfo(){
    return(
        <>
            <Graph2/>
            <ExplorePageInfo sectionTitle="REEF"/>
        </>
    )
}