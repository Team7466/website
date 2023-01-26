import Image from "next/image"
import Link from "next/link"
import CymurghsLT from "../CymurghsBanner"

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font mt-8 bottom-0">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <CymurghsLT />
                <p className="text-sm text-slate-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    Team 7466 - Herkes için robotik.
                </p>

                <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <div className="flex flex-row items-center space-x-4 justify-center m-auto">
                        <Link
                            href="/contact"
                            className="underline hover:scale-110 duration-500 transition-all text-gray-700 font-medium"
                        >
                            İletişime Geçin
                        </Link>
                        <a
                            href="https://www.linkedin.com/company/cymurghs/"
                            className="m-auto items-center hover:scale-110 duration-500 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                width={24}
                                height={24}
                                src="/icons/linkedin.svg"
                                alt="Linkedin"
                                className="w-6 h-6 ml-2 hover:-translate-y-2 duration-700 transition-all object-cover"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/cymurghs/"
                            className="m-auto items-center hover:scale-110 duration-500 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                width={24}
                                height={24}
                                src="/icons/instagram.svg"
                                alt="Instagram"
                                className="w-6 h-6 ml-2 hover:-translate-y-2 duration-700 transition-all object-cover"
                            />
                        </a>
                        <a
                            href="https://github.com/Team7466"
                            className="m-auto items-center hover:scale-110 duration-500 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                width={24}
                                height={24}
                                src="/icons/github.svg"
                                alt="GitHub"
                                className="w-6 h-6 ml-2 hover:-translate-y-2 duration-700 transition-all object-cover"
                            />
                        </a>
                        <a
                            href="https://twitter.com/cymurghs"
                            className="m-auto items-center hover:scale-110 duration-500 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                width={24}
                                height={24}
                                src="/icons/twitter.svg"
                                alt="Twitter"
                                className="w-6 h-6 ml-2 hover:-translate-y-2 duration-700 transition-all object-cover"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCSktvl3F2j85QU-7_LKIjvw"
                            className="m-auto items-center hover:scale-110 duration-500 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                width={24}
                                height={24}
                                src="/icons/youtube.svg"
                                alt="YouTube"
                                className="w-6 h-6 ml-2 hover:-translate-y-2 duration-700 transition-all object-cover"
                            />
                        </a>
                        <a
                            href="mailto:cymurghs7466@gmail.com"
                            className="m-auto items-center hover:scale-110 duration-500 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                width={24}
                                height={24}
                                src="/icons/email.svg"
                                alt="cymurghs7466@gmail.com"
                                className="w-6 h-6 ml-2 hover:-translate-y-2 duration-700 transition-all object-cover"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
