import styles from "@/components/MainPageComponents/HomePage/HomePage.module.css"
import Footer from "../../Footer"
import Header from "@/components/Header"

export default function HomePage(){

    var time = process.env.NEXT_PUBLIC_TIME

    return(
        <>
            <Header src="/icons/longArrow.svg" width="31" height="20"/>
            {time}
            <p>MAKING A DIFFERENCE<br></br>ONE STEP AT A TIME</p>
            <Footer/>
        </>
    )
}