import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Vote() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-20 text-center">
                <h1 className="text-4xl font-bold mb-6">Vote für JD Bros</h1>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">Unterstütze unseren Server und erhalte Belohnungen!</p>
                <a href="https://vote.jdbros.de" className="bg-red-700 text-white dark:bg-red-800 px-8 py-4 rounded-lg hover:bg-red-800 dark:hover:bg-red-900 transition">
                    Jetzt Voten
                </a>
                <p className="mt-8 text-gray-600 dark:text-gray-400">Hier geht es auch zum Entbannungsantragsformular via Discord.</p>
            </main>
            <Footer />
        </div>
    );
}
