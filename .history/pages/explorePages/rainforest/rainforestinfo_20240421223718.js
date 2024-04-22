import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import ExplorePageInfo from "@/components/MainPageComponents/ExplorePageInfo"
import Graph1 from "@/pages/explorePages/arctic"

export default function rainforestInfo(){
    return(
        <>
            <Graph1/>
            <ExplorePageInfo sectionTitle="RAINFOREST"/>
        </>
    )
}