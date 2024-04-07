import Link from "next/link"

export default function ButtonColoured({link, }){
    return(
        <>
            <Link href={link} style={{
                backgroundColor: color,
                width: '380px',
                height:'50px'
            }}>
                
            </Link>
        </>
    )
}
