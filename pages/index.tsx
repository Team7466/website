// import { useEffect, useRef, useState } from "react"
// import ResizableYoutubeEmbed from "../components/ResizableYoutubeEmbed"
// import { generateAnimationFrames, generateMap } from "../utils/generateMapFrames"
// import { AnimationFrame } from "../utils/turkeyMap"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
// import Turkey from "../components/Turkey"
// import WebsiteConfig from "../utils/config"
import Link from "next/link"

// NOTICE: Animation unused for now
// const Home = ({ map }: { map: string }) => {
const Home = () => {
    // const Home = ({ frames }: { frames: AnimationFrameSerializable[] }) => {
    // const [animationComplete, setAnimationComplete] = useState(false)

    // useEffect(() => {
    //     document.body.style.height = "250vh"
    // }, [])

    return (
        <>
            <Navbar />
            {/* {!animationComplete ? (
                <section className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-xl p-10">
                    <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl font-mono">
                        <h1>15 Farklı Şehir, 1 Takım</h1>
                        <h1>1 Sezon, 3 Ödül</h1>
                    </div>
                    <Turkey frames={AnimationFrame.deserializeAll(frames)} done={() => setAnimationComplete(true)} />
                </section>
            ) : ( */}
            <main>
                <section className="bg-gradient-to-tr from-slate-800 via-slate-800 to-slate-900 text-white">
                    <div
                        className="container px-5 py-48 mx-auto"
                        style={{
                            // backgroundImage: `url(${map})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "translateX(-80%)",
                        }}
                    >
                        <div>
                            <div className="flex flex-col text-center w-full mb-20">
                                <h1 className="sm:text-6xl text-4xl font-bold  mb-4 text-white">
                                    15 Farklı Şehir, 1 Takım
                                </h1>
                                <h1 className="sm:text-6xl text-4xl font-bold mb-4 text-white">1 Sezon, 3 Ödül</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed font-4xl">
                                    Türkiye&apos;nin ilk bağımsız FRC takımı Cymurghs&apos;ün dünyanın farklı
                                    şehirlerinden birleşen üyeleri ile bir yolculuğa çıkmaya ne dersin?
                                </p>
                            </div>
                            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Button
                            </button>
                        </div>
                    </div>
                </section>

                <section className="m-auto text-slate-800 body-font bg-[#fafbfc] border-2">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg md:ml-12 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto items-center">
                            {/* <ResizableYoutubeEmbed videoId="kEVAcYyrF9k" initWidth={560} initHeight={315} /> */}
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
                                Team Cymurghs: Herkes İçin Robotik
                            </h1>
                            <p className="mb-8 text-xl leading-relaxed font-sans">
                                Türkiye&apos;nin ilk bağımsız ve tamamen online FRC takımı Cymurghs olarak dünya
                                çapındaki 16 farklı şehirde STEM değerlerini yaymaktayız. Birlikte her sene yaptığımız
                                yeni robotların yanı sıra; düzenlediğimiz eğitim, konferans ve outreach projeleri ile
                                dezavantajlı bölgelerdeki teknoloji erişilebilirliğini arttırırken liseli yaşlarda
                                pazarlama ve liderlik deneyimi kazanarak kendimizi her alanda geliştirme fırsatı
                                oluşturuyoruz.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="m-auto text-slate-800 body-font mb-16">
                    <div className="flex m-auto flex-col md:flex-row">
                        <div className="flex flex-col space-y-4 ml-8 w-full lg:w-5/12 pr-8 items-center text-left p-12 m-auto">
                            <ul className="text-2xl space-y-4">
                                <li>✔ Üretmek</li>
                                <li>✔ Yaratıcılık</li>
                                <li>✔ Araştırma</li>
                                <li>✔ Takım çalışması</li>
                                <li>✔ Eğlence</li>
                            </ul>
                            <Link
                                className="py-4 px-6 text-white bg-[#1089d4] focus:outline-none hover:bg-[#0066b3] hover:scale-110 duration-500 transition-all rounded-2xl text-lg shadow-lg shadow-slate-600 font-bold"
                                href="/about"
                            >
                                Daha Fazla Bilgi Al
                            </Link>
                        </div>
                        <div className="w-full lg:w-7/12 mr-16 mt-8 hidden lg:block">
                            {/* <ResizableYoutubeEmbed initWidth={850} initHeight={465} videoId="J71Y6Wtbl6U" /> */}
                        </div>
                        <div className="w-full p-4 mt-8 lg:hidden">
                            {/* <ResizableYoutubeEmbed initWidth={6} initHeight={1} videoId="J71Y6Wtbl6U" /> */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            {/* )} */}
        </>
    )
}

const getStaticProps = async () => {
    return {
        props: {
            // frames: generateAnimationFrames(WebsiteConfig.cities()),
            // map: generateMap(getConfig().map),
        },
    }
}

export { getStaticProps }
export default Home
