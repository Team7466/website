import Image from "next/image"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import blurDataURL from "../utils/blurDataURL"
import WebsiteConfig from "../utils/config"

const Contact = ({ contacts }: { contacts: ContactKey[] }) => {
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { message, email, name, subject } = e.currentTarget.elements as any
        const target = e.currentTarget

        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: message.value,
                email: email.value,
                name: name.value,
                subject: subject.value,
            }),
        }).then(res => {
            if (res.status === 200) {
                target.reset()
                target.querySelectorAll("#remaining").forEach(el => {
                    const secondHalf = el.innerHTML.split("/")[1]
                    el.innerHTML = `0/${secondHalf}`
                })
                alert("Mesajınız başarıyla gönderildi!")
            } else {
                alert("Mesajınız gönderilirken bir hata oluştu! Lütfen daha sonra tekrar deneyin.")
            }
        })
    }

    return (
        <>
            <Navbar />

            <section className="body-font relative p-8">
                <div className="flex flex-col space-y-16 lg:space-y-0 lg:space-x-16 lg:flex-row m-auto mt-4 container p-6">
                    <div className="lg:w-2/3 flex flex-col space-y-4">
                        <h2 className="text-slate-900 mb-1 font-medium text-2xl">Mesaj Gönder</h2>
                        <form onSubmit={submitForm} className="flex flex-col space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="leading-8 text-md font-medium">
                                    İsim Soyisim
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    maxLength={100}
                                    onInput={e => {
                                        const target = e.currentTarget
                                        const currentLength = target.value.length
                                        target.nextElementSibling!.innerHTML = `${currentLength}/100`
                                    }}
                                />
                                <div id="remaining" className="relative text-xs text-gray-500">
                                    0/100
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="leading-8 text-md font-medium">
                                    Email Adresi
                                </label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    maxLength={100}
                                    onInput={e => {
                                        const target = e.currentTarget
                                        const currentLength = target.value.length
                                        target.nextElementSibling!.innerHTML = `${currentLength}/100`
                                    }}
                                />
                                <div id="remaining" className="relative text-xs text-gray-500">
                                    0/100
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="leading-8 text-md font-medium">
                                    Konu
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    maxLength={250}
                                    onInput={e => {
                                        const target = e.currentTarget
                                        const currentLength = target.value.length
                                        target.nextElementSibling!.innerHTML = `${currentLength}/250`
                                    }}
                                />
                                <div id="remaining" className="relative text-xs text-gray-500">
                                    0/250
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="leading-8 text-md font-medium">
                                    Mesaj
                                </label>
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    maxLength={4000}
                                    onInput={e => {
                                        const target = e.currentTarget
                                        const currentLength = target.value.length
                                        target.nextElementSibling!.innerHTML = `${currentLength}/4000`
                                    }}
                                />
                                <div id="remaining" className="relative text-xs text-gray-500">
                                    0/4000
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="max-w-[12rem] text-white hover:scale-110 bg-[#1089d4] py-4 px-2 transition-all duration-500 hover:bg-[#0066b3] rounded-xl text-xl"
                            >
                                Gönder
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col space-y-4 lg:w-1/3">
                        {contacts.map((contact, i) => (
                            <div key={i} className="flex flex-col space-y-6">
                                <h1 className="text-2xl font-semibold text-slate-900">{contact.title_tr}</h1>
                                {contact.details.map((detail, j) => (
                                    <div key={j} className="flex flex-row text-center space-x-2 font-medium">
                                        {detail.icon_path && (
                                            <Image
                                                width={24}
                                                height={24}
                                                placeholder="blur"
                                                blurDataURL={blurDataURL(24, 24)}
                                                src={`/contact/${detail.icon_path}`}
                                                alt={detail.name}
                                                className="w-6 h-6 ml-2 hover:-translate-y-2 duration-700 transition-all"
                                            />
                                        )}
                                        {detail.url ? (
                                            <a
                                                href={detail.url}
                                                className="text-center hover:scale-110 duration-500 transition-all text-sky-900"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {detail.name}
                                            </a>
                                        ) : (
                                            <span className="text-center ml-2">{detail.name}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            contacts: WebsiteConfig.contact(),
        },
    }
}

export default Contact
