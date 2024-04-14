import styles from "@/components/MainPageComponents/HomePage/HomePage.module.css"
import Footer from "../../Footer"
import Header from "@/components/Header"
import { useEffect, useState } from "react"

export default function HomePage(){

    const [userTime, setUserTime] = useState([])
    const [timezone, setTimezone] = useState([]);

    var apiKeyInfo = process.env.NEXT_PUBLIC_TIME;

    // useEffect(() => {
    //     const getData = async () => {
    //         const query = await fetch(`https://worldtimeapi.org/api/ip=${apiKeyInfo}`);
    //         const response = await query.json();
    //         setUserTime(userTime);
    //         setTimezone(timezone);
    //         console.log('API doin its thang', response)
    //     }
    //     getData();
    // },[])

    var url = `https://worldtimeapi.org/api/ip=${apiKeyInfo}`

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setTimezone(data.datetime)
            console.log(data);
          })
      }, [])

    return(
        <>
            <Header src="/icons/longArrow.svg" width="31" height="20"/>
            {/* {
                data.map((i, index) => {
                    return(
                    <div key={index}>
                        {i.datetime}
                        <br></br>
                        {i.timezone}
                    </div>
                    )
                })
            } */}
            <p>MAKING A DIFFERENCE<br></br>ONE STEP AT A TIME</p>
            <Footer/>
        </>
    )
}