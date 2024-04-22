import styles from "@/components/MainPageComponents/ExplorePageCover/ExplorePageCover.module.css"
import Header from "@/components/Header"
import MainText from "@/components/MainText"
import ButtonAndBack from "@/components/ButtonAndBack"
import Image from "next/image"

export default function ExplorePageCover(
    // imagePath="",
    // widthWidth="430",
    // heightHeight="932",
    src="/images/RainforestBG.png"
){
    return(
        <>
            <Header src="/icons/Home.svg" width="30" height="32"/>
            <MainText 
                titleText="THE RAINFOREST"
                supplimentText="Dense tropical ecosystems crucial for biodiversity and climate regulation, threatened by deforestation and climate change."
            />
            <ButtonAndBack
                linking="" //change later
                buttonText="START!"
                buttonColorBg="var(--white)"
                buttonColorPrimary="var(--green)"
                // handleBackClick={""}
            />
            <Image src="/images/RainforestBG.png" width={430} height={932} className={styles.exploreCoverImage}/> 
            <div className={styles.exploreCoverImageCenterer}>
                <div className={styles.annoying}></div>
                {/* <Image src={imagePath} width={widthWidth} height={heightHeight} className={styles.exploreCoverImage}/>  */}
                {/* include alt later, throws error when i try export */}
            </div>
        </>
    )
}