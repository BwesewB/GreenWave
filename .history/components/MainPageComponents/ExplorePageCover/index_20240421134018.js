import styles from "@/components/MainPageComponents/ExplorePageCover/ExplorePageCover.module.css"
import Header from "@/components/Header"
import MainText from "@/components/MainText"
import ButtonAndBack from "@/components/ButtonAndBack"
import Image from "next/image"

export default function ExplorePageCover({
    src="",
    alt=""
}){
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
                <Image src={src} alt={alt} width={widthWidth} height={heightHeight} className={styles.exploreCoverImage}/> 
            </div>
        </>
    )
}