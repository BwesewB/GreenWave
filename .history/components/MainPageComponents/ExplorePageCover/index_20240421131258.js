import styles from "@/components/MainPageComponents/ExplorePageCover/ExplorePageCover.module.css"
import Header from "@/components/Header"
import MainText from "@/components/MainText"
import ButtonAndBack from "@/components/ButtonAndBack"
import Image from "next/image"

export default function ExplorePageCover(
    src,
    alt,
    width="430",
    height="932"
){
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
            <div className={styles.exploreCoverImageCenterer}>
                <Image src={src} alt={alt} className={styles.exploreCoverImage} width={width} height={height}/> 
                {/* include alt later, throws error when i try export alt */}
            </div>
        </>
    )
}