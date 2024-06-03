import { NavbarData } from "@/types";
import Navlink from "@/utils/Navlink";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import useTheme from "./hooks/useTheme";

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

type Props = {
    nav: NavbarData;
};
const Navbar = ({ nav }: Props) => {
    const [open, setOpen] = useState(false);
    function closeNavbar() {
        setOpen(false);
    }
    const [theme, toggleTheme] = useTheme();
    return (
        <>
            <nav className="hidden md:flex max-w-[1024px] mx-auto gap-4 sm:gap-8 p-4 items-center sticky top-0 z-20 bg-background rounded-b-lg">
                <div className="flex items-center gap-1 text-foreground">
                    <Image src="/logo.svg" width={24} height={24} alt="logo" />
                    <Link href="/" className="font-bold text-xl">
                        {nav.logoText}
                        <sup className="text-[6px]">TM</sup>
                    </Link>
                </div>
                <ul className="flex gap-1 flex-1 text-foreground">
                    {nav.list.map((item) => (
                        <li key={item.title} onClick={closeNavbar}>
                            <Navlink className="p-2 block" href={item.href}>
                                {item.title}
                            </Navlink>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="text-primary p-2 rounded-md"
                >
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
                <button type="button">
                    <Link className="btn-primary" href={nav.button.link}>
                        {nav.button.text}
                    </Link>
                </button>
            </nav>
            <nav className="md:hidden flex gap-4 sm:gap-8 p-4 items-center justify-between sticky top-0 z-20 bg-background">
                <div className="flex items-center gap-1 flex-1 text-foreground">
                    <Image src="/logo.svg" width={24} height={24} alt="logo" />
                    <span className="font-bold text-xl">
                        {nav.logoText}
                        <sup className="text-[6px]">TM</sup>
                    </span>
                </div>
                <div
                    className={`fixed left-0 top-0 h-full p-8 transition-transform w-[350px] bg-background text-foreground ${
                        open ? "translate-x-0" : "-translate-x-[350px]"
                    }`}
                >
                    <div className="flex w-full justify-between">
                        <div className="flex items-center gap-1 text-foreground">
                            <Image
                                src="/logo.svg"
                                width={24}
                                height={24}
                                alt="logo"
                            />
                            <span className="font-bold text-xl">
                                {nav.logoText}
                                <sup className="text-[6px]">TM</sup>
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <RxCrossCircled fontSize={28} />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-4 mt-10 text-foreground">
                        <li
                            className="flex items-center p-2 gap-2"
                            onClick={toggleTheme}
                        >
                            Theme
                            {theme === "light" ? <FaMoon /> : <FaSun />}
                        </li>
                        {nav.list.map((item) => (
                            <li key={item.title} onClick={closeNavbar}>
                                <Navlink className="p-2 block" href={item.href}>
                                    {item.title}
                                </Navlink>
                            </li>
                        ))}
                    </ul>
                </div>
                <button type="button">
                    <Link className="btn-primary" href={nav.button.link}>
                        {nav.button.text}
                    </Link>
                </button>
                <button
                    type="button"
                    className="p-2"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <GiHamburgerMenu className="text-foreground" />
                </button>
            </nav>
        </>
    );
};
export default Navbar;
