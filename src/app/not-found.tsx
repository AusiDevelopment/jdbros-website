// pages/404.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Custom404() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20">
                <h1 className="text-6xl md:text-7xl font-bold text-red-600 dark:text-red-700 mb-6 drop-shadow-lg">
                    404
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Seite nicht gefunden
                </h2>
                <p className="text-lg mb-8 max-w-xl">
                    Die Seite, die du suchst, existiert nicht. Vielleicht möchtest du zurück zur Startseite?
                </p>
                <Link
                    href="/"
                    className="bg-red-600 dark:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition"
                >
                    Zurück zur Startseite
                </Link>
            </main>
            <Footer />
        </div>
    );
}
