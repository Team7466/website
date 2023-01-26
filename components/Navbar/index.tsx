import Link from "next/link"
import CymurghsLT from "../CymurghsBanner"

const NAV_ELEMENTS: NavElement[] = [
    { href: "/", text: "Anasayfa", id: "homepage" },
    { href: "/first", text: "FIRST" },
    { href: "/about", text: "Hakkımızda" },
    { href: "/resources", text: "FRC Kaynakları" },
    { href: "/docs", text: "Takım Dokümanları" },
    { href: "/sponsors", text: "Sponsorlarımız" },
    { href: "/gallery", text: "Galeri" },
    { href: "/projects", text: "Projelerimiz" },
    { href: "/press", text: "Basında Biz" },
    { href: "/contact", text: "İletişim" },
    { href: "/apply", text: "Aramıza Katıl" },
]

interface NavElement {
    href: string
    text: string
    id?: string
}

const NavElement = ({ href, text, id }: NavElement) => {
    return (
        <Link
            id={id || href.split("/")[1]}
            href={href}
            className="block text-[16px] no-underline mr-5 text-slate-800 hover:text-black font-medium hover:scale-110 duration-500"
        >
            {text}
        </Link>
    )
}

const Navbar = () => {
    return (
        <nav className="text-gray-600">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-evenly">
                <CymurghsLT />
                <nav className="md:ml-auto mt-1 flex flex-wrap items-center text-base justify-center">
                    {NAV_ELEMENTS.map(({ href, text, id }, idx) => (
                        <NavElement key={idx} href={href} text={text} id={id} />
                    ))}
                    <button className="font-semibold hover:text-black hover:scale-125 duration-500">TR/EN</button>
                    {/* TODO: Highlight current locale */}
                </nav>
            </div>
        </nav>
    )
}

export default Navbar
