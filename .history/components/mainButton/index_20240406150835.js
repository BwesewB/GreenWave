import Link from "next/link"

export default function ButtonColoured({
    link, 
    text,
    backgroundColorInactive="",
    backgroundColorActive="",
    
}){
    return(
        <>
            <div className={styles.buttonWhole}>
                {/* <Link href={link}>
                    <div style={{
                    backgroundColorInactive,
                    backgroundColorActive,
                    width: '380px',
                    height:'50px',
                }}>
                    {text}
                    </div>
                </Link> */}
            </div>

        </>
    )
}
