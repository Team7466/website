import { readdirSync } from "fs"
import { join } from "path"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import WebsiteConfig from "../utils/config"

import Image from "next/image"
import blurDataURL from "../utils/blurDataURL"

interface GalleryProps {
    imagePaths: string[]
    descriptions: Gallery
}

const Gallery = ({ imagePaths, descriptions }: GalleryProps) => {
    const imageName = (fileName: string) => fileName.split(".")[0]

    return (
        <>
            <Navbar />

            <main className="mt-16">
                <h1 className="text-4xl font-bold text-center">Galeri</h1>
                <section className="grid grid-cols-1 lg:grid-cols-2 p-12 gap-8">
                    {imagePaths.map((image, i) => (
                        <div
                            key={i}
                            className="flex flex-col p-4 rounded-2xl hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-500"
                        >
                            <Image
                                width={630}
                                height={470}
                                src={`/gallery/${image}`}
                                placeholder="blur"
                                blurDataURL={blurDataURL(630, 470)}
                                alt={imageName(image)}
                                className="rounded-2xl"
                            />
                            <p className="text-center text-slate-900 text-lg">
                                {descriptions[imageName(image)].description_tr}
                            </p>
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
            imagePaths: readdirSync(join(process.cwd(), "public", "gallery")),
            descriptions: WebsiteConfig.gallery(),
        },
    }
}

export default Gallery
