"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ranks} from "@/lib/ranks";
import {RankCard} from "@/components/RankTable";
import Metadata from "@/lib/metadata";

import { formatPageTitle} from "@/lib/utils";

export const metadata = {
    title: formatPageTitle("Ränge")
}

export default function RanksPage() {
    return (

        <>
            <Metadata pageName="ränge" description="Alle Ränge auf JD Bros Server" />
            <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
                <Navbar />

                <main>
                    {/* Hero Section */}
                    <section className="bg-red-600 dark:bg-red-700 text-white py-20 px-6 text-center relative overflow-hidden">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                            Unsere Ränge
                        </h1>
                        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow-md">
                            Steige auf und sichere dir exklusive Vorteile auf unserem Server.
                        </p>
                    </section>

                    {/* Ranks Section */}
                    <section className="container mx-auto py-20 px-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                            {ranks.map((rank) => (
                                <RankCard key={rank.name} rank={rank} />
                            ))}
                        </div>
                    </section>
                </main>

                <Footer />
            </div>

        </>
    );
}
