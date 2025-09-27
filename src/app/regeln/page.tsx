import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Regeln() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold mb-8 text-center">Regeln & AGBs</h1>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-4">
                    <h2 className="text-2xl font-semibold">1. Verhalten</h2>
                    <p>Behandle andere Spieler respektvoll und fair. Kein Griefing oder Spamming.</p>
                    <h2 className="text-2xl font-semibold">2. Sicherheit</h2>
                    <p>Keine Weitergabe von Accountdaten. Kein Cheaten oder Exploits.</p>
                    {/* Weitere Regeln */}
                </div>
            </main>
            <Footer />
        </div>
    );
}
