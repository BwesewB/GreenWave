import Link from "next/link"

export default function ButtonColoured({link, text}){
    return(
        <>
            <Link href={link}>
                <div style={{
                backgroundColor: white,
                width: '380px',
                height:'50px',
                
            }}>
                {text}
                </div>
            </Link>
        </>
    )
}
