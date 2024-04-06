import Head from "next/head";

export default function HeadArea({ title, description }){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content= "Sebastian Fok, Anders Cederberg"/>
                <meta name="description" content={description}/>
                <meta name="viewport" content="width=430, height=932, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
        </>
    );
};