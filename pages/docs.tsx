import Image from "next/image"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import blurDataURL from "../utils/blurDataURL"
import chunk from "../utils/chunk"
import WebsiteConfig from "../utils/config"

interface DocsCardProps {
    img: string
    title: string
    file: string
}

const DocsCard = ({ img, title, file }: DocsCardProps) => {
    return (
        <a
            className="max-w-xl mx-auto hover:scale-110 duration-500 transition-all"
            target="_blank"
            rel="noreferrer noopener"
            href={`/docs/${file}`}
        >
            <div className="bg-slate-100 shadow-md border border-gray-200 rounded-lg max-w-sm">
                <div>
                    <Image
                        width={382}
                        height={214}
                        placeholder="blur"
                        blurDataURL={blurDataURL(382, 214)}
                        className="rounded-t-lg"
                        src={`/docs/img/${img}`}
                        alt={title}
                    />
                </div>
                <div className="p-5 text-center">
                    <div>
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
                    </div>
                </div>
            </div>
        </a>
    )
}

const Docs = ({ docs }: { docs: DocsKey[] }) => {
    return (
        <>
            <Navbar />

            <main className="mt-16">
                <h1 className="text-3xl font-bold text-center text-slate-900">Takım Dokümanları</h1>
                <section className="flex flex-col mt-8 space-y-4">
                    {chunk(docs, 3).map((chunk, i) => (
                        <div
                            key={i}
                            className="flex flex-col lg:flex-row justify-around p-6 px-1 md:px-16 lg:px-24 space-y-16 lg:space-y-0"
                        >
                            {chunk.map(
                                (doc, j) =>
                                    doc != null && (
                                        <DocsCard key={j} title={doc.name_tr} file={doc.doc_path} img={doc.img_path} />
                                    )
                            )}
                        </div>
                    ))}
                </section>
            </main>

            <Footer />
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            docs: WebsiteConfig.docs(),
        },
    }
}

export default Docs
