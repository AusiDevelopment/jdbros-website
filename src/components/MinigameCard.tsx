interface MinigameCardProps {
    title: string;
    description: string;
    image: string; // Pfad zum Bild
}

export default function MinigameCard({ title, description, image }: MinigameCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col md:flex-row">
            {/* Bild links */}
            <div className="md:w-1/3 w-full">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            {/* Text rechts */}
            <div className="md:w-2/3 w-full p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>
        </div>
    );
}
