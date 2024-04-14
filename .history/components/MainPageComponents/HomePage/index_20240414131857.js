import styles from "@/components/MainPageComponents/HomePage/HomePage.module.css"
import Footer from "../../Footer"
import Header from "@/components/Header"
import { useEffect, useState } from "react"

export default function HomePage(){

    // const [data, setData] = useState([]);

    // var apiKeyInfo  = process.env.NEXT_PUBLIC_TIME;
    // var url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKeyInfo}`

    // useEffect(() => {
    //     fetch(url)
    //       .then((res) => res.json())
    //       .then((info) => {
    //         setData(info.articles)
    //         console.log(info.articles);
    //       })
    //   }, [])

    const [userTime, setUserTime] = useState([])
    const [timezone, setTimezone] = useState([]);

    var apiKeyInfo = process.env.NEXT_PUBLIC_TIME;

    useEffect(() => {
        const getData = async () => {
            const query = await fetch(`https://worldtimeapi.org/api/ip=${apiKeyInfo}`);
            const response = await query.json();
            setUserTime(userTime);
            setTimezone(timezone);
            console.log('API doin its thang', response)
        }
        getData();
    },[])

    return(
        <>
            <Header src="/icons/longArrow.svg" width="31" height="20"/>
                {/* <p>Current Time: {userTime}</p>
                <p>Timezone: {timezone}</p> */}
            <p>MAKING A DIFFERENCE<br></br>ONE STEP AT A TIME</p>
            <Footer/>
        </>
    )
}