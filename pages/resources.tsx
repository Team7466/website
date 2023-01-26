import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import WebsiteConfig from "../utils/config"

interface ResourceProps {
    title: string
    link: string
}

const Resource = ({ title, link }: ResourceProps) => {
    return (
        <li className="hover:scale-110 duration-500 transition-all hover:px-2">
            <a
                className="text-blue-600 hover:text-blue-800 text-lg"
                rel="noopener noreferrer"
                target="_blank"
                href={link}
            >
                {title}
            </a>
        </li>
    )
}

const Resources = ({ resources }: { resources: ResourcesKey[] }) => {
    return (
        <>
            <Navbar />

            <main>
                <section className="py-12">
                    <div className="container m-auto justify-center p-4 md:p-8">
                        <div className="flex flex-col md:grid md:grid-cols-2 m-auto justify-center">
                            {resources.map((resource, i) => (
                                <div key={i} className="flex flex-col space-y-4 m-auto md:p-6">
                                    {i == 0 ? (
                                        <h1 className="text-4xl font-bold text-slate-900 mb-12">FRC Kaynakları</h1>
                                    ) : null}
                                    <h1 className="text-3xl font-semibold text-indigo-700">{resource.title_tr}</h1>
                                    {resource.resources.map((subResource, j) => (
                                        <ul key={j} className="flex flex-col space-y-4 max-w-prose">
                                            <h2 className="font-semibold text-xl">{subResource.subtitle_tr}</h2>
                                            <ul className="flex flex-col space-y-4 font-medium">
                                                {subResource.resources.map((subsubResource, k) => (
                                                    <Resource
                                                        key={k}
                                                        title={subsubResource.name_tr}
                                                        link={subsubResource.url}
                                                    />
                                                ))}
                                            </ul>
                                        </ul>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            resources: WebsiteConfig.resources(),
        },
    }
}

export default Resources
