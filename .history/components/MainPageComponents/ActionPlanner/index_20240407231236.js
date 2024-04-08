import ButtonAndBack from "@/components/ButtonAndBack";
import MainText from "@/components/MainText";
import { useRouter } from "next/router";

export default function ActionPlanner(){

    const router = useRouter();

    const handleGoHomeClick = () => {
        console.log("Button clicked");
        router.push('/')
    };

    return(
        <>
            <MainText 
                titleText="WELCOME TO THE ACTION PLANNER"
                supplimentText="Answer a few questions about your lifestyle and habits to get personalized tips for reducing your carbon footprint and fighting climate change."
            />
            <ButtonAndBack
                linking="/quiz"
                buttonText="START!"
                buttonColorBg="var(--white)"
                buttonColorPrimary="var(--green)"
                handleBackClick={handleGoHomeClick}
            />
        </>
    )
}