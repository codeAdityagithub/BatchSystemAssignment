import { HeroData } from "@/types";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoPlayCircleOutline } from "react-icons/io5";

type Props = {
    hero: HeroData;
};
const Hero = ({ hero }: Props) => {
    return (
        <div
            className="w-full flex items-center justify-center mt-16"
            id="home"
        >
            <div className="flex-1 flex flex-col items-center lg:items-start gap-4 relative">
                {/* <RedBlob pos="-top-0 right-1/4" /> */}
                <Image
                    src="/redBlob.svg"
                    alt="/blob"
                    width={350}
                    height={350}
                    className={`absolute -top-20 right-1/4`}
                />
                <h1 className="text-4xl sm:text-5xl text-foreground font-extrabold text-center lg:text-left z-10 max-w-2xl">
                    {hero.headline}
                </h1>

                <p className="text-foreground-muted font-light text-center max-w-2xl lg:text-left z-10">
                    {hero.subheadline}
                </p>
                <div className="w-full flex gap-1 *:min-w-fit flex-wrap justify-center lg:justify-start">
                    <button className="btn-primary flex items-center">
                        {hero.ctaButtons[0].text}
                        <HiArrowLongRight className="ml-2 text-xl" />
                    </button>
                    <button className="bg-background text-foreground px-6 py-3 flex items-center">
                        <IoPlayCircleOutline className="mr-2 text-xl" />
                        {hero.ctaButtons[1].text}
                    </button>
                </div>
                <Image
                    src="/heroFooter.png"
                    alt="/heroFooter"
                    width={400}
                    height={500}
                    className="w-full max-w-xl py-2 pr-8"
                />
            </div>
            <div className="flex-1 hidden lg:block">
                <Image
                    src="/heroPhones.png"
                    alt="/heroPhones"
                    width={400}
                    height={500}
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};
export default Hero;
