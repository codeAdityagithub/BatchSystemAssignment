import { InferGetStaticPropsType } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import { REM } from "next/font/google";
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";

const rem = REM({ subsets: ["latin"] });
export const getStaticProps = async () => {
    const data = await import("../data.json");
    return {
        props: {
            data: data.default,
        },
    };
};

export default function Home({
    data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <main
            className={`${rem.className} h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden mx-auto p-4 pt-0 bg-background`}
        >
            <div className="max-w-[1024px] mx-auto space-y-20 lg:space-y-0">
                <Navbar nav={data.navbar} />
                <Hero hero={data.hero} />
                <Features feature={data.feature} />
                <Advantages advantage={data.advantage} />
                <Testimonials testimonial={data.testimonial} />
            </div>
        </main>
    );
}
