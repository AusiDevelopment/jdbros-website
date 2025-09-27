export default function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 mt-16">
            <div className="container mx-auto text-center space-y-4">
                <p>&copy; 2025 JD Bros. Alle Rechte vorbehalten.</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://discord.gg/jdbros" className="hover:text-gray-400 transition">Discord</a>
                    <a href="https://www.youtube.com/@jdbros" className="hover:text-gray-400 transition">YouTube</a>
                </div>
                <div className="flex justify-center space-x-4">
                    <a href="/legal/imprint" className="text-sm text-gray-500 hover:underline">Impressum</a>
                </div>
            </div>
        </footer>
    );
}
