import ButtonAndBack from "@/components/ButtonAndBack";
import MainText from "@/components/Main Text";

export default function ActionPlanner(){



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
            />
        </>
    )
}