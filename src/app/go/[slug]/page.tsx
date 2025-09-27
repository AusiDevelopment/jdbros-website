import { redirect } from "next/navigation";

const redirects: Record<string, string> = {
    discord: "https://discord.gg/deinserver",
    shop: "https://store.jdbros.de",
    forum: "https://forum.jdbros.de",
};

interface GoPageProps {
    params: { slug: string };
}

export default function GoPage({ params }: GoPageProps) {
    const destination = redirects[params.slug.toLowerCase()];

    if (destination) {
        // Sofortige Weiterleitung
        redirect(destination);
    }

    return (
        <div className="min-h-screen flex items-center justify-center text-center p-6">
            <p className="text-red-600 text-lg">
                Ungültiger Link: <strong>{params.slug}</strong>
            </p>
        </div>
    );
}
