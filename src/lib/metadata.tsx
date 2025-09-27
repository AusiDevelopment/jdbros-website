import Head from "next/head";

export interface MetadataProps {
    pageName: string;
    description?: string;
}

/**
 * Gibt den richtigen Seitentitel zurück:
 * "JDBros — <Seitenname>" mit großem Anfangsbuchstaben
 */
export function formatPageTitle(pageName: string) {
    if (!pageName) return "JDBros";
    return `JDBros — ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}`;
}

/**
 * Head-Komponente für Metadata
 * Einfach auf jeder Seite importieren und einsetzen
 */
export default function Metadata({ pageName, description }: MetadataProps) {
    const title = formatPageTitle(pageName);
    const desc = description ?? `JDBros — ${pageName}`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
