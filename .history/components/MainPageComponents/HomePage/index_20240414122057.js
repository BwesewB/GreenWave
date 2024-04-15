import styles from "@/components/MainPageComponents/HomePage/HomePage.module.css"
import Footer from "../../Footer"
import Header from "@/components/Header"
import { useEffect } from "react"

export default function HomePage(){

    var time = process.env.NEXT_PUBLIC_TIME

    useEffect(() => {
        const getData = async () => {
            const query = await fetch('https://timeapi.io/swagger/index.html');
            const response = await query.json();
            console.log('API doin its thang', response)
        }
        getData();
    },[])

    return(
        <>
            <Header src="/icons/longArrow.svg" width="31" height="20"/>
            {time}
            <p>MAKING A DIFFERENCE<br></br>ONE STEP AT A TIME</p>
            <Footer/>
        </>
    )
}