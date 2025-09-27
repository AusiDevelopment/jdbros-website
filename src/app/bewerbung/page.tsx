"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BewerbungMain() {
    const router = useRouter();

    const handleNavigation = (rolle: string) => {
        router.push(`/bewerbung/${rolle.toLowerCase()}`);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-20 text-center">
                <h1 className="text-4xl font-bold mb-6">Bewerbung auswählen</h1>
                <p className="mb-12 text-lg text-gray-700">Wähle deine Rolle, um das passende Bewerbungsformular zu öffnen.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button onClick={() => handleNavigation("Supporter")} className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">Supporter</button>
                    <button onClick={() => handleNavigation("Builder")} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">Builder</button>
                    <button onClick={() => handleNavigation("ContentCreator")} className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition">Content Creator</button>
                    <button onClick={() => handleNavigation("Sonstiges")} className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition">Sonstiges</button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
