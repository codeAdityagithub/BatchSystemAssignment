import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
    children: ReactNode;
    className?: string;
} & LinkProps;
const Navlink = ({ children, className, ...props }: Props) => {
    const router = useRouter();
    const [ref, isInView] = useInView();
    const isActive =
        router.asPath.split("#").pop() ===
            props.href.toString().split("#").pop() || isInView;
    return (
        <Link
            ref={ref}
            className={`${isActive ? "text-accent " : ""}${className ?? ""}`}
            {...props}
        >
            {children}
        </Link>
    );
};
export default Navlink;
