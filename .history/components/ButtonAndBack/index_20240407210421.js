import ButtonColoured from "../mainButton";

export default function ButtonAndBack({ buttonText }){
    return(
        <>
            <ButtonColoured
            href=""
            text={buttonText}
            bgColor={buttonColorBg}
            primaryColor={buttonColorPrimary}
            onClickHandler={onClickHandler}
            />
        </>
    )
}