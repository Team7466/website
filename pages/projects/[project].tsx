import Image from "next/image"
import Link from "next/link"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import blurDataURL from "../../utils/blurDataURL"
import WebsiteConfig from "../../utils/config"
import toProjectIdentifier from "../../utils/toProjectIdentifier"

const Project = ({ title, img_path, description_tr, description_en }: ProjectKey) => {
    return (
        <>
            <Navbar />

            <main className="body-font">
                <section className="lg:py-12 lg:flex lg:justify-center border-b-[1px]">
                    <div className="lg:mx-8 lg:flex lg:max-w-5xl">
                        <div className="text-gray-600 py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 text-xl flex flex-col space-y-4">
                            <Link href="/projects" className="underline text-2xl text-sky-800">
                                Geri
                            </Link>
                            <h2 className="text-3xl text-gray-800 font-bold">{title}</h2>
                            <p className="mt-4">{description_tr}</p>
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-evenly p-8 container">
                            <Image
                                width={448}
                                height={448}
                                placeholder="blur"
                                blurDataURL={blurDataURL(448, 448)}
                                className="border-[1em] rounded-2xl border-white shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-500"
                                alt={`${title} logo`}
                                src={`/projects/${img_path}`}
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export const getStaticProps = ({ params }: { params: { project: string } }) => {
    const project = WebsiteConfig.projects().find(p => toProjectIdentifier(p.title) === params.project)!
    return {
        props: {
            title: project.title,
            img_path: project.img_path,
            description_tr: project.description_tr,
            description_en: project.description_en,
        },
    }
}

export const getStaticPaths = () => {
    return {
        paths: WebsiteConfig.projects().map(project => `/projects/${toProjectIdentifier(project.title)}`),
        fallback: true,
    }
}

export default Project
