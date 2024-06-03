import { FaQuoteLeft } from "react-icons/fa6";
type Props = {
    title: string;
    ans: string;
    isAccent: boolean;
};
const FaqCard = ({ title, ans, isAccent }: Props) => {
    return (
        <div
            className={`rounded-lg p-6 flex flex-col items-start gap-4 ${
                isAccent ? "bg-accent text-background" : "text-foreground"
            }`}
        >
            <h2 className="text-2xl font-bold max-w-lg">{title}</h2>
            <div
                className={` flex ${!isAccent ? "text-foreground-muted" : ""}`}
            >
                <span>
                    <FaQuoteLeft />
                </span>
                <p>{ans}</p>
            </div>
        </div>
    );
};
export default FaqCard;
