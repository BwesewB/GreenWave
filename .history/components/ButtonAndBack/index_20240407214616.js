import ButtonColoured from "../mainButton";
import styles from '@/components/ButtonAndBack/ButtonAndBack.module.css'

export default function ButtonAndBack({ linking, buttonText, buttonColorBg, buttonColorPrimary, onClickHandlerSecondaryMainButton }){
    return(
        <>
        <div className={styles.bothButtons}>
            <ButtonColoured
                href={linking}
                text={buttonText}
                bgColor={buttonColorBg}
                primaryColor={buttonColorPrimary}
                onClickHandler={onClickHandlerSecondaryMainButton}
            />
            <div className={styles.backButton}>
                <p>Back</p>
            </div>
        </div>

        </>
    )
}