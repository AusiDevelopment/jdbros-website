import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FeatureCard from "../../components/FeatureCard";

export default function Features() {
    return (
        <>
            <Navbar />
            <main className="p-8 space-y-4">
                <h1 className="text-3xl font-bold mb-4">Unsere Features</h1>
                <FeatureCard
                    image="/images/feature1.jpg"
                    title="Feature 1"
                    description="Beschreibung von Feature 1"
                />
                <FeatureCard
                    image="/images/feature2.jpg"
                    title="Feature 2"
                    description="Beschreibung von Feature 2"
                />
                {/* Weitere Features */}
            </main>
            <Footer />
        </>
    );
}
