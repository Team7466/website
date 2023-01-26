import "../styles/globals.css"

import { Dosis } from "@next/font/google"
import type { AppProps } from "next/app"
import Head from "next/head"

const dosis = Dosis({
    weight: "variable",
    style: ["normal"],
    subsets: ["latin", "latin-ext"],
    variable: "--font-dosis",
})

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Cymurghs</title>
            </Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style jsx global>{`
                * {
                    font-family: ${dosis.style.fontFamily} !important;
                }
            `}</style>
            <Component {...pageProps} />
        </>
    )
}

export default App
