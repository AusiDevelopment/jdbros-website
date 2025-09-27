import {Rank} from "@/lib/ranks";
import Navbar from "@/components/Navbar";


interface RankCardProps {
    rank: Rank;
}

export const RankCard: React.FC<RankCardProps> = ({ rank }) => {
    return (
        <>



            <div className="border border-red-700 dark:border-red-600 rounded-2xl shadow-md p-4 flex flex-col items-center bg-red-800 dark:bg-red-900 text-white hover:shadow-lg transition-shadow">
                <img
                    src={rank.imageUrl}
                    alt={rank.name}
                    className="w-32 h-32 object-contain mb-4 rounded-lg border border-red-600 dark:border-red-500"
                />
                <h2 className="text-xl font-semibold mb-2">{rank.name}</h2>
                <p className="mb-4">{rank.price > 0 ? `${rank.price.toFixed(2)} €` : "Kostenlos"}</p>
                <a
                    href={rank.purchaseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-800 text-white px-4 py-2 rounded-lg transition-colors font-semibold"
                >
                    Kaufen
                </a>
            </div>

        </>
    );
};