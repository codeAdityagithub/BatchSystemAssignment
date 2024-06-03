import { REM } from "next/font/google";
import Image from "next/image";

const rem = REM({ subsets: ["latin"] });

const Download = () => {
    return (
        <main
            className={`${rem.className} h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden mx-auto pt-0 bg-gradient-to-br from-[#FF5E08] to-[#FF9963]`}
        >
            <div className="flex flex-col relative gap-8 items-center justify-between p-8 sm:p-20 *:z-10">
                <div className="flex items-center gap-1 bg-fixed">
                    <Image
                        src="/logowhite.svg"
                        width={36}
                        height={36}
                        alt="logo"
                    />
                    <span className="font-bold text-white text-3xl">
                        uifry
                        <sup className="text-[6px] -top-4">TM</sup>
                    </span>
                </div>
                <div className="absolute inset-0 flex justify-center items-center -z-10">
                    <Image
                        className="h-auto w-full object-contain"
                        src="/downloadOverlay.png"
                        alt="Download"
                        width={800}
                        height={600}
                    />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold max-w-xl text-center text-white">
                    Download a free bundle worth $549 and join the waitlist!
                </h2>
                <Image
                    className="h-full w-auto object-contain"
                    src="/downloadImage.png"
                    alt="Download"
                    width={800}
                    height={600}
                />
            </div>
        </main>
    );
};
export default Download;
