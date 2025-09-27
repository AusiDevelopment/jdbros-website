
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Tutorial() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-20 text-center">
                <h1 className="text-4xl font-bold mb-6">Tutorials</h1>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">Lerne alles über unseren Server mit unseren Schritt-für-Schritt Tutorials.</p>
                <Link href="https://youtube.com/playlist?list=PLiOWHJZcNqnw0yW6q2zPg91W96gzLJM4R" className="bg-red-700 text-white dark:bg-red-800 px-8 py-4 rounded-lg hover:bg-red-800 dark:hover:bg-red-900 transition">
                    Zur Tutorial Playlist
                </Link>
            </main>
            <Footer />
        </div>
    );
}

