import ButtonAndBack from "@/components/ButtonAndBack";

export default function ActionPlanner({ handleStartQuizClick }){
    return(
        <>
            <ButtonAndBack
                buttonText="START!"
                buttonColorBg="var(--white)"
                buttonColorPrimary="var(--green)"
                onClickHandlerSecondaryMainButton={handleStartQuizClick}
            />
            <p>HELEOEOEOEOEEO</p>
        </>
    )
}