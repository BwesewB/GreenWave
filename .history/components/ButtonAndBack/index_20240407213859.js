import ButtonColoured from "../mainButton";

export default function ButtonAndBack({ buttonText, buttonColorBg, buttonColorPrimary, onClickHandler }){
    return(
        <>
            <ButtonColoured
                href=""
                text={buttonText}
                bgColor={buttonColorBg}
                primaryColor={buttonColorPrimary}
                onClickHandler={onClickHandlerSecondaryMainButton}
            />
        </>
    )
}