import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
} & LinkProps;
const Navlink = ({ children, className, ...props }: Props) => {
    const router = useRouter();
    const isActive =
        router.asPath.split("#").pop() ===
        props.href.toString().split("#").pop();
    return (
        <Link
            className={`${isActive ? "text-accent " : ""}${className ?? ""}`}
            {...props}
        >
            {children}
        </Link>
    );
};
export default Navlink;
