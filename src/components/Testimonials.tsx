import { TestimonialData } from "@/types";
import Image from "next/image";
import { useState } from "react";

import { FaRegBell } from "react-icons/fa6";
import { PiStarFour } from "react-icons/pi";

type Props = {
    testimonial: TestimonialData;
};

const Testimonials = ({ testimonial }: Props) => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    return (
        <div className=" flex flex-col items-center gap-4">
            <p className="text-accent tracking-wide text-center">
                TESTIMONIALS
            </p>
            <h2 className="text-4xl font-extrabold mb-4 text-center max-w-lg">
                {testimonial.title}
            </h2>
            <div className="flex items-center w-full gap-8">
                <div className="flex-1 relative hidden lg:flex">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.image}
                        width={400}
                        height={500}
                        className="w-full max-w-xl"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-8 lg:items-start items-center relative">
                    <div className="flex flex-col gap-4 max-w-xl ">
                        <h3 className="text-3xl font-bold">
                            {
                                testimonial.testimonials[activeTestimonial]
                                    .feedback
                            }
                        </h3>
                        <p className="text-foreground-muted">
                            {testimonial.testimonials[activeTestimonial].desc}
                        </p>
                    </div>
                    <div className="flex gap-4">
                        {testimonial.testimonials.map((testimonial, ind) => (
                            <span
                                key={testimonial.name}
                                onClick={() => setActiveTestimonial(ind)}
                                className={`rounded-full transition-transform ${
                                    activeTestimonial === ind
                                        ? "scale-125"
                                        : "grayscale"
                                }`}
                            >
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.avatar}
                                    width={60}
                                    height={60}
                                    className="w-full rounded-full"
                                />
                            </span>
                        ))}
                    </div>
                    <p className="text-foreground text-xl font-bol">
                        {testimonial.testimonials[activeTestimonial].name}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Testimonials;
