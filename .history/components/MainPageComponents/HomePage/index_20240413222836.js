import styles from "@/components/MainPageComponents/HomePage/HomePage.module.css"
import Footer from "../../Footer"
import Header from "@/components/Header"

export default function HomePage(){
    return(
        <>
            <Header src="/icons/longArrow.svg"/>
            <p>MAKING A DIFFERENCE<br></br>ONE STEP AT A TIME</p>
            <Footer/>
        </>
    )
}