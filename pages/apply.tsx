import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import WebsiteConfig from "../utils/config"

const Apply = ({ isTakingApplications }: { isTakingApplications: boolean }) => {
    return (
        <>
            <Navbar />

            <main>
                <section className="lg:py-12 lg:flex lg:justify-center text-center">
                    <div>
                        <div className="flex flex-col space-y-16 py-12 px-6">
                            <h2 className="text-4xl text-gray-800 font-bold">İlginiz İçin Teşekkürler</h2>
                            <p className="mt-4 text-2xl">
                                Ne yazık ki şu anda başvuru kabul etmiyoruz. Seneye görüşmek üzere!
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            isTakingApplications: WebsiteConfig.isTakingApplications(),
        },
    }
}

export default Apply
