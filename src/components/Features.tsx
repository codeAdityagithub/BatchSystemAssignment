import { FeatureData } from "@/types";
import Image from "next/image";

import { PiStarFour as Icon1 } from "react-icons/pi";
import { HiMiniCubeTransparent as Icon2 } from "react-icons/hi2";
import { PiCubeTransparentLight as Icon3 } from "react-icons/pi";

type Props = {
    feature: FeatureData;
};
const featureIcons = [
    <Icon1 className="text-accent text-xl" />,
    <Icon2 className="text-accent text-xl" />,
    <Icon3 className="text-accent text-xl" />,
];
const Features = ({ feature }: Props) => {
    return (
        <div className="flex w-full gap-8 mt-10" id="features">
            <div className="flex-1 relative hidden lg:block">
                <Image
                    src={feature.image}
                    alt={feature.image}
                    width={400}
                    height={500}
                    className="w-full max-w-xl z-0"
                />
                <Image
                    src="/redBlob.svg"
                    alt="/blob"
                    width={350}
                    height={350}
                    className="absolute top-1/4 -left-28 z-0"
                />
            </div>
            <div className="flex-1 flex flex-col lg:items-start gap-4 items-center lg:pt-12 relative *:z-10">
                <Image
                    src="/redBlob.svg"
                    alt="/blob"
                    width={350}
                    height={350}
                    className="absolute top-0 -right-40 z-0"
                />
                <p className="text-accent tracking-widest">FEATURES</p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    {feature.title}
                </h2>
                <div className="flex flex-col gap-6 max-w-xl">
                    {feature.features.map((feature, ind) => (
                        <div className="space-y-1" key={`feature${ind}`}>
                            <div className="flex items-center gap-3">
                                {featureIcons[ind]}
                                <h3 className="text-xl font-medium">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-foreground-muted">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Features;
