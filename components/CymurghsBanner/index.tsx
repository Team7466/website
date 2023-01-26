import Image from "next/image"
import Link from "next/link"

const CymurghsLT = () => {
    return (
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
            <Image
                width={40}
                height={40}
                src="/icons/cymurghs.png"
                alt="Cymurghs logo"
                className="hover:rotate-45 hover:scale-110 rounded-full transition-all duration-1000 w-10 select-none"
            />
            <span className="ml-3 text-2xl font-semibold">Cymurghs</span>
        </Link>
    )
}

export default CymurghsLT
