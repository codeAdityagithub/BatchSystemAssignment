import { FaqData } from "@/types";
import FaqCard from "./cards/FaqCard";
import Image from "next/image";

type Props = {
    faq: FaqData;
};
const Faqs = ({ faq }: Props) => {
    return (
        <div
            className="relative flex flex-col items-center sm:items-start gap-4"
            id="faqs"
        >
            <Image
                className="absolute top-20 right-2 sm:right-1/3"
                src="/star.svg"
                alt="star"
                width={50}
                height={50}
            />
            <p className="text-accent tracking-widest text-center sm:text-left">
                FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center sm:text-left max-w-lg">
                {faq.title}
            </h2>
            <div className="w-full grid grid-flow-col md:grid-rows-3 grid-rows-6 gap-4">
                {faq.faqs.map((faq, index) => {
                    return (
                        <FaqCard
                            key={`faq${index}`}
                            {...faq}
                            isAccent={index % 2 == 0}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default Faqs;
