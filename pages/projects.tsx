import Image from "next/image"
import Link from "next/link"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import blurDataURL from "../utils/blurDataURL"
import chunk from "../utils/chunk"
import WebsiteConfig from "../utils/config"
import toProjectIdentifier from "../utils/toProjectIdentifier"

const Project = ({ title, img_path, shortdescription_en, shortdescription_tr }: ProjectKey) => {
    return (
        <Link
            className="flex justify-center max-w-sm mx-auto hover:scale-110 duration-500 transition-all p-8"
            href={`/projects/${toProjectIdentifier(title)}`}
        >
            <div className="relative rounded-xl shadow-lg overflow-hidden flex-wrap p-8">
                <Image
                    width={256}
                    height={256}
                    placeholder="blur"
                    blurDataURL={blurDataURL(256, 256)}
                    src={`/projects/${img_path}`}
                    alt={title}
                    className="h-auto w-full"
                />
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-800 font-semibold text-base max-w-sm mb-4">{shortdescription_tr}</p>
                </div>
            </div>
        </Link>
    )
}

const Projects = ({ projects }: { projects: ProjectKey[] }) => {
    return (
        <>
            <Navbar />

            <main className="mt-16">
                <h1 className="text-4xl font-bold text-center text-slate-900">Outreach</h1>
                <section className="flex flex-col mt-8 p-8 space-y-4">
                    {chunk(projects, 4).map((chunk, i) => (
                        <div
                            key={i}
                            className="flex flex-col lg:space-x-8 lg:flex-row justify-around p-6 px-1 md:px-16 lg:px-24 space-y-16 lg:space-y-0"
                        >
                            {chunk.map((project, j) => project != null && <Project key={j} {...project} />)}
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
            projects: WebsiteConfig.projects(),
        },
    }
}

export default Projects
