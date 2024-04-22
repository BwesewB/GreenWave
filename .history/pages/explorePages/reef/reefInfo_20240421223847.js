import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import LineGraph from "@/components/ExplorePageInfoComponents/Graph/LineGraph"

export default function reefInfo(){
    return(
        <>
            <LineGraph/>
            <ExplorePageInfo sectionTitle="REEF"/>
        </>
    )
}