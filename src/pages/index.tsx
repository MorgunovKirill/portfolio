import Head from "next/head";
import MainPage from "@/components/MainPage/MainPage";


export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Morgunov Kirill portfolio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <MainPage/>
            </main>
        </>
    );
}
