import styles from "@/pages/explorePages/rainforest/Rainforest.module.css"
import Header from "@/components/Header"

export default function explorePageInfo({
    sectionTitle,

}){
    return(
        <>
            <Header src="/icons/longArrow.svg" width="31" height="20" handleBackOrHomeClick={""}/>
            <h1>{sectionTitle}</h1>
        </>
    )
}