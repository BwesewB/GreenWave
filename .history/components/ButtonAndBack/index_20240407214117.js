import ButtonColoured from "../mainButton";

export default function ButtonAndBack({ buttonText, buttonColorBg, buttonColorPrimary, onClickHandlerSecondaryMainButton }){
    return(
        <>
        <div className={styles.bothButtons}>
            <ButtonColoured
                href=""
                text={buttonText}
                bgColor={buttonColorBg}
                primaryColor={buttonColorPrimary}
                onClickHandler={onClickHandlerSecondaryMainButton}
            />
            <p className={styles.backButton}>Back</p>
        </div>

        </>
    )
}