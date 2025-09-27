interface FeatureCardProps {
    image: string;
    title: string;
    description: string;
}

export default function FeatureCard({ image, title, description }: FeatureCardProps) {
    return (
        <div className="flex items-center bg-gray-800 p-4 rounded-lg space-x-4">
            <img src={image} alt={title} className="w-24 h-24 object-cover rounded-lg"/>
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
