import { AdvantageData } from "@/types";
import Image from "next/image";

import { FaRegBell } from "react-icons/fa6";
import { PiStarFour } from "react-icons/pi";

type Props = {
    advantage: AdvantageData;
};

const Advantages = ({ advantage }: Props) => {
    return (
        <>
            <div
                className="flex flex-row-reverse items-center w-full"
                id="advantages"
            >
                <div className="flex-1 relative hidden lg:flex">
                    <Image
                        src={advantage[0].image}
                        alt={advantage[0].image}
                        width={400}
                        height={500}
                        className="w-full max-w-xl"
                    />
                </div>
                <div className="flex-1 flex flex-col lg:items-start items-center relative gap-4">
                    <p className="text-accent tracking-widest">ADVANTAGES</p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        {advantage[0].title}
                    </h2>
                    <div className="flex flex-col gap-6 max-w-xl">
                        <div className="flex items-center gap-3">
                            <span className="p-2 rounded-full bg-accent">
                                <FaRegBell className="m-auto text-primary-foreground" />
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                {advantage[0].card.title}
                            </h3>
                        </div>
                        <p className="text-foreground-muted">
                            {advantage[0].card.desc}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full gap-4">
                <div className="flex-1 relative hidden lg:flex">
                    <Image
                        src={advantage[1].image}
                        alt={advantage[1].image}
                        width={400}
                        height={500}
                        className="w-full max-w-xl"
                    />
                </div>
                <div className="flex-1 flex flex-col lg:items-start items-center relative ">
                    <div className="flex flex-col gap-6 max-w-xl">
                        <div className="flex items-center gap-3">
                            <span className="p-2 rounded-full bg-accent">
                                <PiStarFour className="m-auto text-primary-foreground" />
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                {advantage[1].card.title}
                            </h3>
                        </div>
                        <p className="text-foreground-muted">
                            {advantage[1].card.desc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Advantages;
