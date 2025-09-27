import Footer from "@/components/Footer";
import Link from "next/link";


export default function ImpressumPage() {
    return (
        <>

            <div className="bg-white dark:bg-teal-900 text-gray-900 dark:text-white min-h-screen font-sans p-10">
                <h1 className="text-3xl font-bold mb-6">Impressum</h1>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
                    <p>
                        JD Bros GmbH<br />
                        Musterstraße 123<br />
                        12345 Musterstadt<br />
                        Deutschland
                    </p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold">Vertreten durch:</h2>
                    <p>Max Mustermann</p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold">Kontakt:</h2>
                    <p>
                        Telefon: 01234 567890<br />
                        E-Mail: info@jdbros.de
                    </p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold">Haftungsausschluss:</h2>
                    <p>
                        Die Inhalte dieser Seite dienen nur zu Informationszwecken. Für die Richtigkeit, Vollständigkeit
                        und Aktualität übernehmen wir keine Haftung.
                    </p>
                </section>
                
                <div className="mt-8 text-center">
                    <Link href="/" passHref>
                        <button className="bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded transition-colors">
                            Zurück zur Startseite
                        </button>
                    </Link>
                </div>


            </div>


        </>
    );
}
