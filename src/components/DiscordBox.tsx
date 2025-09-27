

export default function DiscordBox() {

    return (

        <section className="bg-gray-100 dark:bg-gray-800 py-20 px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Join unserem Discord!</h2>
            <p className="text-lg mb-4">Über 2000+ Nutzer sind bereits dabei!</p>
            <a href="https://discord.gg/jdbros" target="_blank" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition inline-block mb-6">
                Jetzt beitreten
            </a>
            <p className="text-lg">IP: <span className="font-bold">play.jdbros.de</span> | Port: <span className="font-bold">19132</span></p>

        </section>

    );

}