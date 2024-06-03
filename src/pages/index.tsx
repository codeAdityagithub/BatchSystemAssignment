import { InferGetStaticPropsType } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import { REM } from "next/font/google";
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

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
            className={`${rem.className} scroll-smooth scroll-pt-[80px] h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden mx-auto pt-0 bg-background`}
        >
            <Navbar nav={data.navbar} />
            <div className="max-w-[1024px] px-10 mx-auto flex flex-col gap-20 lg:gap-10">
                <Hero hero={data.hero} />
                <Features feature={data.feature} />
                <Advantages advantage={data.advantage} />
                <Testimonials testimonial={data.testimonial} />
                <Faqs faq={data.faq} />
                <Footer footerElements={data.footerElements} />
            </div>
        </main>
    );
}
