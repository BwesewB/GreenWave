import ButtonAndBack from "@/components/ButtonAndBack";
import MainText from "@/components/Main Text";

export default function ActionPlanner(){



    return(
        <>

            <MainText titleText="WELCOME TO THE ACTION PLANNER"/>
            <ButtonAndBack
                linking="/quiz"
                buttonText="START!"
                buttonColorBg="var(--white)"
                buttonColorPrimary="var(--green)"
            />
        </>
    )
}