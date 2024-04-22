import styles from "@/components/MainPageComponents/ExplorePageCover/ExplorePageCover.module.css"
import Header from "@/components/Header"
import MainText from "@/components/MainText"
import ButtonAndBack from "@/components/ButtonAndBack"

export default function ExplorePageCover(){
    return(
        <>
            <Header src="/icons/Home.svg" width="30" height="32"/>
            <MainText 
                titleText="THE RAINFOREST"
                supplimentText="Dense tropical ecosystems crucial for biodiversity and climate regulation, threatened by deforestation and climate change."
            />
            <ButtonAndBack
                linking="/"
                buttonText="START!"
                buttonColorBg="var(--white)"
                buttonColorPrimary="var(--green)"
                // handleBackClick={""}
            />
        </>
    )
}