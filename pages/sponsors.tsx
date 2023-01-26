import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import chunk from "../utils/chunk"
import WebsiteConfig from "../utils/config"

interface SponsorCardProps {
    tier_name_tr: string
    tier_name_en: string
    tier_img_path: string
    sponsor_name: string
    sponsor_logo_path: string
    sponsor_url: string
    description_tr: string
    description_en: string
}

const SponsorCard = ({
    tier_name_tr,
    tier_name_en,
    tier_img_path,
    sponsor_name,
    sponsor_logo_path,
    sponsor_url,
    description_tr,
    description_en,
}: SponsorCardProps) => {
    return (
        <div className="flex justify-center flex-grow group">
            <div
                className="relative rounded-lg shadow-l max-w-sm flex-grow bg-gray-800 group-hover:opacity-40 transition-all duration-700"
                style={{
                    backgroundImage: `url(/sponsors/${tier_img_path})`,
                }}
            >
                <div className="flex flex-col justify-center p-6">
                    <div className="m-auto hidden group-hover:block">
                        <h2 className="m-auto font-bold text-slate-900 text-4xl mb-2">{sponsor_name}</h2>
                        <p className="text-center text-gray-700 text-xl mb-4">{description_tr}</p>
                    </div>
                    <img
                        className="m-auto mt-8 w-32 h-32"
                        src={`/sponsors/${sponsor_logo_path}`}
                        alt={`${sponsor_name} logo`}
                    />
                    <h3 className="mt-24 text-center text-4xl mb-8 font-bold">{tier_name_tr} Sponsor</h3>
                </div>
            </div>
        </div>
    )
}

const Sponsors = ({ sponsors }: { sponsors: SponsorsKey[] }) => {
    return (
        <>
            <Navbar />

            <main className="mt-16">
                <h1 className="text-4xl font-bold text-center text-slate-900">Sponsorlarımız</h1>
                <section className="flex flex-col items-center justify-center space-y-24 mt-8 p-4">
                    {sponsors.map((sponsorTier, i) => (
                        // the div that holds the tiered sponsor group
                        <div key={i} className="flex flex-col items-center justify-center w-full space-y-12 p-4">
                            {chunk(sponsorTier.sponsors, 3).map((chunkedSponsors, j) => (
                                <div
                                    key={j}
                                    // the div that holds the sponsors in a row (max 3, min 1 sponsor(s))
                                    className="h-full w-full justify-around flex flex-col lg:space-x-8 lg:flex-row space-y-12 lg:space-y-0 p-4"
                                >
                                    {chunkedSponsors.map((sponsor, k) => (
                                        <SponsorCard
                                            key={k}
                                            tier_name_tr={sponsorTier.tier_name_tr}
                                            tier_name_en={sponsorTier.tier_name_en}
                                            tier_img_path={sponsorTier.tier_img_path}
                                            sponsor_name={sponsor.name}
                                            sponsor_logo_path={sponsor.logo_path}
                                            sponsor_url={sponsor.url}
                                            description_tr={sponsor.description_tr}
                                            description_en={sponsor.description_en}
                                        />
                                    ))}
                                </div>
                            ))}
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
            sponsors: WebsiteConfig.sponsors(),
        },
    }
}

export default Sponsors
