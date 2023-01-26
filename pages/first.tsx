import Image from "next/image"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import blurDataURL from "../utils/blurDataURL"

interface MomentProps {
    image: string
    title: string
    url: string
}

const Moment = ({ image, title, url }: MomentProps) => {
    return (
        <div className="w-full p-4">
            <a target="_blank" href={url} rel="noreferrer">
                <div className="bg-gray-100 p-6 rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer">
                    <Image
                        width={312}
                        height={160}
                        placeholder="blur"
                        blurDataURL={blurDataURL(312, 160)}
                        className="h-40 rounded w-full object-cover object-center mb-6"
                        src={image}
                        alt={title}
                    />
                    <h2 className="text-lg text-gray-900 title-font mb-4 font-bold">{title}</h2>
                </div>
            </a>
        </div>
    )
}

const First = () => {
    const first = (
        <span className="italic text-indigo-600">
            FIRST
            {"\u00A0"}
        </span>
    )

    const firstIt = (
        <span className="italic">
            FIRST
            {"\u00A0"}
        </span>
    )

    return (
        <>
            <Navbar />
            <main>
                <section className="lg:py-12 lg:flex lg:justify-center border-b-[1px]">
                    <div className="lg:mx-8 lg:flex lg:max-w-5xl">
                        <div className="text-gray-600 py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 text-xl flex flex-col space-y-4">
                            <h2 className="text-3xl text-gray-800 font-bold">{first} Nedir?</h2>
                            <p className="mt-4">
                                FIRST®(For Inspiration and Recognition of Science and Technology), 1989’da kurulan ve
                                kuruluşundan bugüne aktif olarak STEM değerlerini yaymak için programlar hazırlayan
                                uluslararası bir vakıftır. Her yaştan öğrenciye hitap eden toplamda 3 yarışmaya ev
                                sahipliği yapmaktadır.
                            </p>
                            <ul className="flex flex-col space-y-4">
                                <li>✔ 4-16 yaş grubu için FLL ({firstIt} Lego League)</li>
                                <li>✔ 7-12. sınıflar için FTC ({firstIt} Tech Challenge)</li>
                                <li>✔ 14-18 yaş grubu için FRC ({firstIt} Robotics Competition)</li>
                            </ul>
                            <p className="mt-4">
                                Dünyadaki birçok büyük kuruluşla birlikte çalışan {firstIt}, her sene kendini yenileyen
                                konseptleri ile öğrencilerine her zaman yeni şeyler öğreterek onların mühendislik ve
                                inovatif düşünce yeteneklerini geliştirmeyi hedeflemektedir. {firstIt} organizasyonları,
                                diğer robot yarışmalarından; takım içinde sadece robota değil aynı zamanda sosyal
                                değerler, projeler ve STEM & {firstIt} değerlerinin yayılmasına oldukça önem vermesiyle
                                ayrılarak dünyanın en prestijli robotik yarışmaları olarak anılmaktadır.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex flex-col space-y-16 lg:space-y-0 justify-evenly p-8">
                            <Image
                                priority
                                width={448}
                                height={256}
                                src="/first/first.png"
                                alt="FRC logo"
                                className="border-[2em] rounded-2xl border-white shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-500"
                            />
                            <Image
                                width={470}
                                height={224}
                                placeholder="blur"
                                blurDataURL={blurDataURL(470, 224)}
                                src="/first/first-comp.png"
                                alt="FRC subcompetitions"
                                className="border-[2em] rounded-2xl border-white shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-500"
                            />
                        </div>
                    </div>
                </section>

                <section className="text-gray-600 body-font border-[1px]">
                    <div className="container px-5 py-4 mx-auto">
                        <div className="flex flex-wrap w-full justify-center text-center mb-10">
                            <h1 className="sm:text-4xl text-2xl font-medium title-font mt-4 lg:mb-2 text-gray-900">
                                <span className="underline text-indigo-500">{first}</span> Dünyasından Kareler
                            </h1>
                        </div>
                        <div className="flex justify-evenly px-8 flex-col lg:flex-row">
                            <Moment
                                image="/first/infinite.jpg"
                                title="2020 Infinite Recharge"
                                url="https://www.youtube.com/watch?v=gmiYWTmFRVE"
                            />

                            <Moment
                                image="/first/space.jpg"
                                title="2019 DESTINATION: DEEP SPACE"
                                url="https://www.youtube.com/watch?v=Mew6G_og-PI"
                            />

                            <Moment
                                image="/first/power-up.jpg"
                                title="2018 POWER UP"
                                url="https://www.youtube.com/watch?v=HZbdwYiCY74"
                            />
                        </div>
                    </div>
                </section>

                <section className="border-[1px]">
                    <div className="lg:py-12 lg:flex lg:justify-center">
                        <div className="lg:mx-8 lg:flex lg:max-w-5xl">
                            <div className="lg:w-1/2 flex flex-col justify-evenly p-8">
                                <Image
                                    width={448}
                                    height={366}
                                    placeholder="blur"
                                    blurDataURL={blurDataURL(448, 366)}
                                    src="/first/frc.png"
                                    alt="FRC logo"
                                    className="border-[2em] rounded-2xl border-white shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-500"
                                />
                            </div>
                            <div className="text-gray-600 py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 text-xl flex flex-col space-y-4">
                                <h2 className="text-3xl text-gray-800 font-bold">{first} Robotics Competition</h2>
                                <p className="mt-4">
                                    {firstIt} programlarından lise öğrencilerine hitap eden ve en karmaşık sistemli
                                    robotların inşa edildiği yarışmadır. Öğrenciler yazılım, mekanik ve elektronik
                                    becerilerini geliştirirken sosyal alanda yaptıkları projeler ile STEM değerlerini de
                                    yaymaya çalışır. Bu sebeple FRC’de herkes için bir yer vardır. Her yılın ilk
                                    cumartesi günü olarak belirlenen “Kick-Off Date”te o yılın robot konsepti ve oyun
                                    parkuru açıklanmaktadır. Bu duyurudan sonra takımlar katılacakları yarışmanın
                                    tarihine kadar (Türkiye’de Mart ayının ilk haftası, sezon süresi: 8-9 hafta) kendi
                                    robotlarını tasarlayıp imal ederler.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="lg:py-12 lg:flex lg:justify-center">
                        <div className="lg:mx-8 lg:flex lg:max-w-5xl">
                            <div className="text-gray-600 py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 text-xl flex flex-col space-y-4">
                                <h2 className="text-3xl text-gray-800 font-bold">Woodie Flowers</h2>
                                <p className="mt-4">
                                    {firstIt}&apos;ün kuruluşunun ardından Dean Kamen ve Woodie Flowers ikilisi{" "}
                                    {firstIt} Robotics Competition’un geliştirilmesi üzerine çalışmaya başlamışlardır.
                                    Woodie, Gracious Professionalism® terimini türeterek ve her eyleminde anlamını
                                    destekleyerek {firstIt} felsefesini oluşturmakta önemli rol oynayan kişilerden bir
                                    tanesi olarak da bilinir. {firstIt}&apos;ün 30 yıllık deneyimi boyunca Woodie sadece
                                    bir kurucu olmakla kalmamış; bunun yanında {firstIt} vizyonunun yaşayan bir
                                    yansıması, tanıştığı herkes için bir arkadaş, ve tüm {firstIt} öğrencileri için bir
                                    ilham kaynağı olmuştur. Woodie Flowers, 2019 yılında hayatımızdan ayrılsa da,{" "}
                                    {firstIt} ailesinde değerlerini yaşatmaya devam etmektedir.
                                </p>
                            </div>
                            <div className="lg:w-1/2 flex flex-col justify-evenly p-8">
                                <Image
                                    width={448}
                                    height={448}
                                    placeholder="blur"
                                    blurDataURL={blurDataURL(448, 448)}
                                    src="/first/woodie.png"
                                    alt="Woodife Flowers"
                                    className="border-[2em] rounded-2xl border-white shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default First
