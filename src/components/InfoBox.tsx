interface InfoBoxProps {
    title: string;
    description: string;
    image: string;
}

export default function InfoBox({ title, description, image }: InfoBoxProps) {
    return (
        <div className="flex flex-col md:flex-row bg-teal-700 dark:bg-teal-900 text-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition mb-8">
            {/* Bild links */}
            <div className="md:w-1/3 w-full">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            {/* Text rechts */}
            <div className="md:w-2/3 w-full p-6 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
                <p className="text-base md:text-lg">{description}</p>
            </div>
        </div>
    );
}
