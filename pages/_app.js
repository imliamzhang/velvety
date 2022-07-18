import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <Component {...pageProps} />
        </>
    );
}