"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {miniGames} from "@/lib/miniGames";
import MinigameCard from "@/components/MinigameCard";
import {infoSections} from "@/lib/infoSections";
import InfoBox from "@/components/InfoBox";
import DiscordBox from "@/components/DiscordBox";

export default function Home() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
            <Navbar />
            <main>
                <section className="bg-red-600 dark:bg-red-700 text-white py-20 px-6 text-center relative overflow-hidden">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Der Server, der dir mehr bietet</h1>
                    <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow-md">
                        Was 2015 begann, ist heute ein moderner, stabiler Citybuild-Server. Entdecke eine Welt mit nahezu allen Vanilla-Blöcken, funktionierenden Mobs und spannenden Minigames.
                    </p>
                    <Link href="/bewerbung" className="bg-white text-red-700 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition">
                        Jetzt Bewerben
                    </Link>
                </section>

                <section className="container mx-auto py-20 px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Unsere Features</h2>
                    <div className="bg-gray-800 dark:bg-teal-900 text-white font-sans min-h-screen">
                        <main className="container mx-auto px-6 py-20">
                            {infoSections.map((section, index) => (
                                <InfoBox
                                    key={index}
                                    title={section.title}
                                    description={section.description}
                                    image={section.image}
                                />
                            ))}
                        </main>
                    </div>
                </section>

                {/* Minigames Section */}
                <section className="container mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold mb-12 text-center">Unsere Minigames</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {miniGames.map((mg, index) => (
                            <MinigameCard key={index} title={mg.title} description={mg.description} image={mg.image} />
                        ))}
                    </div>
                </section>



                <DiscordBox />

            </main>
            <Footer />
        </div>
    );
}
