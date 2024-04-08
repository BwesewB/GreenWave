import ButtonAndBack from "@/components/ButtonAndBack";
import MainText from "@/components/Main Text";

export default function ActionPlanner(){



    return(
        <>

            <MainText/>
            <ButtonAndBack
                linking="/quiz"
                buttonText="START!"
                buttonColorBg="var(--white)"
                buttonColorPrimary="var(--green)"
            />
        </>
    )
}