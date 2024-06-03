import { NavbarData } from "@/types";
import Navlink from "@/utils/Navlink";
import Image from "next/image";
import Link from "next/link";

type Props = {
    nav: NavbarData;
};
const Navbar = ({ nav }: Props) => {
    return (
        <nav className="flex gap-4 sm:gap-8 p-4 items-center sticky top-0 z-20 bg-background">
            <div className="flex items-center gap-1">
                <Image src="/logo.svg" width={24} height={24} alt="logo" />
                <span className="font-bold text-xl">
                    {nav.logoText}
                    <sup className="text-[6px]">TM</sup>
                </span>
            </div>
            <ul className="flex gap-4 flex-1">
                {nav.list.map((item) => (
                    <li key={item}>
                        <Navlink href="/">{item}</Navlink>
                    </li>
                ))}
            </ul>
            <button type="button">
                <Link className="btn-primary" href={nav.button.link}>
                    {nav.button.text}
                </Link>
            </button>
        </nav>
    );
};
export default Navbar;
