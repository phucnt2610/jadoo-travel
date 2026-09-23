import Image from "next/image";
import logo from "../assets/icons/logo.svg";

const menuNavs = [
    {
        id: 1,
        label: "destinations",
    },
    {
        id: 2,
        label: "hotels",
    },
    {
        id: 3,
        label: "flights",
    },
    {
        id: 4,
        label: "bookings",
    },
    {
        id: 5,
        label: "login",
    }
]

export default function Header() {
    return (
        <header className="sticky top-0 w-full relative z-100 backdrop-blur-xl">
            <div className="max-w-[1160px] py-5 mx-auto flex justify-between items-center">
                {/* logo */}
                <div className="">
                    <Image src={logo} alt="Jadoo logo" loading="eager" />
                </div>

                {/* navigation */}
                <nav className="flex items-center gap-10">
                    {menuNavs.map(item => (
                        <a
                            key={item.id}
                            className="text-lg text-header font-medium capitalize cursor-pointer
                                    relative
                                    after:absolute
                                    after:bottom-0
                                    after:left-0
                                    after:h-[2px]
                                    after:w-full
                                    after:origin-left
                                    after:scale-x-0
                                    after:bg-header
                                    after:transition-transform
                                    after:duration-300
                                    hover:after:scale-x-100"
                        >
                            {item.label}
                        </a>
                    ))}

                    <button className="w-[100px] h-10 text-lg text-header border border-header rounded-sm cursor-pointer">
                        Sign up
                    </button>

                    {/* change lang  */}
                    <select className="cursor-pointer outline-none">
                        <option className="text-lg text-header cursor-pointer">EN</option>
                        <option className="text-lg text-header cursor-pointer">VI</option>
                    </select>
                </nav>
            </div>
        </header>
    )
}