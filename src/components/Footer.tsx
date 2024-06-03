// @ts-nocheck
import { FooterData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

type Props = {
    footerElements: FooterData;
};
const Footer = ({ footerElements }: Props) => {
    return (
        <div className="w-full pt-16 ">
            <div className="relative w-full">
                <Image
                    className="absolute -top-32 -left-36"
                    src="/redBlob.svg"
                    alt="blob"
                    width={350}
                    height={350}
                />
                <Image
                    className="absolute top-1/3 -left-24 -rotate-45"
                    src="/star.svg"
                    alt="blob"
                    width={50}
                    height={50}
                />
                <Image
                    className="w-full h-auto relative z-10"
                    src="/Footer.png"
                    alt="footer"
                    width={700}
                    height={500}
                />
            </div>
            <div className="flex flex-wrap items-start justify-between gap-8 *:flex-1 *:min-w-fit py-20 fading-border">
                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-1">
                        <Image
                            src="/logo.svg"
                            width={24}
                            height={24}
                            alt="logo"
                        />
                        <span className="font-bold text-xl">
                            uifry
                            <sup className="text-[6px]">TM</sup>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoMail className="text-accent text-xl" />{" "}
                        Help@Frybix.com
                    </div>
                    <div className="flex items-center gap-2 -tracking-wider">
                        <IoCall className="text-accent text-xl" /> +1 234 456
                        678 89
                    </div>
                </div>
                {Array.from(Object.keys(footerElements)).map((title) => (
                    <div
                        className="flex flex-col items-start gap-4"
                        key={title}
                    >
                        <h2 className="text-2xl font-semibold">{title}</h2>
                        {(
                            footerElements[title] as typeof footerElements.Legal
                        ).map((item) => (
                            <Link key={item.text} href={item.href}>
                                {item.text}
                            </Link>
                        ))}
                    </div>
                ))}
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-2xl font-semibold">NewsLetter</h2>
                    <p className="font-medium">Stay Up To Date</p>
                    <div className="">
                        <input
                            type="text"
                            className="px-6 py-3 placeholder:text-foreground-muted"
                            placeholder="Your Email"
                        />
                        <button type="button" className="btn-primary">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <p className="text-foreground py-10 text-center">
                Copyright 2022 uifry.com all rights reserved
            </p>
        </div>
    );
};
export default Footer;
