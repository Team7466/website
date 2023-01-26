import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import WebsiteConfig from "../utils/config"

const PressCard = ({ title_tr, title_en, img_path, url, text_en, text_tr }: PressKey) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-black rounded-lg"
            style={{ gridColumnEnd: "span 2" }}
        >
            <div className="rounded-lg shadow-lg max-w-sm flex-grow p-4">
                <img className="w-full object-cover" src={`/press/${img_path}`} alt={title_tr} />
                <div className="p-6">
                    <h2 className="text-slate-900 text-center text-2xl font-semibold mb-2">{title_tr}</h2>
                    {text_tr && text_en && <p className="text-gray-800 font-medium text-base mb-4">{text_tr}</p>}
                </div>
            </div>
        </a>
    )
}

const Press = ({ press }: { press: PressKey[] }) => {
    return (
        <>
            <Navbar />

            <main className="mt-16">
                <h1 className="text-4xl font-bold text-center text-slate-900">Basında Biz</h1>
                <section className="mt-8 p-16">
                    <div className="flex flex-wrap justify-center lg:space-x-8 gap-y-12 p-4 items-center">
                        {press.map((press, i) => (
                            <PressCard key={i} {...press} />
                        ))}
                    </div>
                    {/* <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                            gap: "1rem",
                            gridAutoFlow: "dense",
                        }}
                    >
                        {press.map((press, i) => (
                            <PressCard key={i} {...press} />
                        ))}
                    </div> */}
                </section>
            </main>

            <Footer />
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            press: WebsiteConfig.press(),
        },
    }
}

export default Press
