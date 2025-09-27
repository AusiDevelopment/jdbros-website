"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <header className="bg-red-700 dark:bg-red-800 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Link href="/">
                    <img src="/logo.png" alt="JD Bros Logo" className="h-12" />
                </Link>
                <nav className="flex items-center space-x-6">
                    <ul className="flex space-x-6 font-medium text-lg">
                        <li><Link href="/bewerbung" className="hover:text-gray-200 transition">Bewerben</Link></li>
                        <li><Link href="/regeln" className="hover:text-gray-200 transition">Regeln & AGBs</Link></li>
                        <li><Link href="/vote" className="hover:text-gray-200 transition">Voten</Link></li>
                        <li><Link href="/entbannung" className="hover:text-gray-200 transition">Entbannung</Link></li>
                        <li><Link href="/tutorial" className="hover:text-gray-200 transition">Tutorials</Link></li>
                    </ul>
                    <button onClick={toggleDarkMode} className="ml-6 px-3 py-1 border rounded hover:bg-white hover:text-red-700 transition">
                        {darkMode ? "Light" : "Dark"}
                    </button>
                </nav>
            </div>
        </header>
    );
}
