import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BanAppealPage() {
    return (

        <>

            <div className="min-h-screen flex flex-col bg-gray-50">
                <Navbar />
                <main className="flex-grow container mx-auto px-6 py-20">
                    <h1 className="text-4xl font-bold mb-8 text-center">Entbannungsantrag</h1>
                    {/* Formular hier */}
                </main>
                <Footer />
            </div>

        </>

    );
}
