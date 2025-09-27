"use client";
import { useState } from "react";

export default function ContentCreatorForm() {
    // Allgemeine Felder
    const [vorname, setVorname] = useState("");
    const [alter, setAlter] = useState("");
    const [minecraft, setMinecraft] = useState("");
    const [discord, setDiscord] = useState("");
    const [social1, setSocial1] = useState("");
    const [social2, setSocial2] = useState("");
    const [uploadFreq, setUploadFreq] = useState("");
    const [uploadAnmerkung, setUploadAnmerkung] = useState("");
    const [plattform, setPlattform] = useState("");
    const [plattformSonstiges, setPlattformSonstiges] = useState("");
    const [erfahrung, setErfahrung] = useState("Nein");
    const [erfahrungDetails, setErfahrungDetails] = useState("");
    const [voice, setVoice] = useState("");
    const [contentQuali, setContentQuali] = useState("");
    const [contentArt, setContentArt] = useState("");
    const [anforderungenAkzeptiert, setAnforderungenAkzeptiert] = useState("Nein");
    const [fristenAkzeptiert, setFristenAkzeptiert] = useState("Nein");
    const [datenschutzAkzeptiert, setDatenschutzAkzeptiert] = useState("Nein");

    const handleSubmit = async () => {
        // Pflichtfeld-Validierung
        const pflichtfelder = [
            vorname, alter, minecraft, discord, social1, uploadFreq, uploadAnmerkung,
            plattform, voice, contentQuali, contentArt,
            anforderungenAkzeptiert, fristenAkzeptiert, datenschutzAkzeptiert
        ];
        if (pflichtfelder.some(f => !f)) {
            alert("Bitte fülle alle Pflichtfelder aus!");
            return;
        }
        if (plattform === "Sonstiges" && plattformSonstiges.length < 1) {
            alert("Bitte gib bei 'Sonstiges' die Plattform an!");
            return;
        }
        if (erfahrung === "Ja" && !erfahrungDetails) {
            alert("Bitte gib deine Erfahrung als Content-Creator an!");
            return;
        }

        const payload = {
            vorname, alter, minecraft, discord, social1, social2,
            uploadFreq, uploadAnmerkung, plattform, plattformSonstiges,
            erfahrung, erfahrungDetails, voice, contentQuali, contentArt,
            anforderungenAkzeptiert, fristenAkzeptiert, datenschutzAkzeptiert
        };

        const res = await fetch("/api/bewerbung", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ rolle: "Content-Creator", ...payload }),
        });

        const data = await res.json();
        if (data.success) alert("Bewerbung erfolgreich gesendet!");
        else alert("Fehler beim Senden!");
    };

    return (
        <div className="p-8 max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold">Bewerbung als Content-Creator</h1>

            <input type="text" placeholder="Vorname *" value={vorname} onChange={e => setVorname(e.target.value)} className="border p-2 w-full"/>
            <input type="number" placeholder="Alter *" value={alter} onChange={e => setAlter(e.target.value)} className="border p-2 w-full"/>
            <input type="text" placeholder="Minecraft Username *" value={minecraft} onChange={e => setMinecraft(e.target.value)} className="border p-2 w-full"/>
            <input type="text" placeholder="Discord Username *" value={discord} onChange={e => setDiscord(e.target.value)} className="border p-2 w-full"/>
            <input type="text" placeholder="Link Social Media Kanal *" value={social1} onChange={e => setSocial1(e.target.value)} className="border p-2 w-full"/>
            <input type="text" placeholder="Weiterer Link (optional)" value={social2} onChange={e => setSocial2(e.target.value)} className="border p-2 w-full"/>

            <label>Wie oft lädst du Content von jdbros.de wöchentlich hoch? *</label>
            <select value={uploadFreq} onChange={e => setUploadFreq(e.target.value)} className="border p-2 w-full">
                <option value="">Bitte wählen</option>
                <option>0-1x</option>
                <option>1-2x</option>
                <option>2-4x</option>
                <option>4x +</option>
            </select>

            <textarea placeholder="Anmerkung zu deiner Upload-Zeit und/oder Verhalten *" value={uploadAnmerkung} onChange={e => setUploadAnmerkung(e.target.value)} className="border p-2 w-full"/>

            <label>Auf welchen Plattformen spielst du Minecraft? *</label>
            <select value={plattform} onChange={e => setPlattform(e.target.value)} className="border p-2 w-full">
                <option value="">Bitte wählen</option>
                <option>Smartphone</option>
                <option>Windows (Laptop oder Computer)</option>
                <option>Konsole</option>
                <option>Switch</option>
                <option>Sonstiges</option>
            </select>

            {plattform === "Sonstiges" && (
                <input type="text" placeholder="Bitte angeben *" value={plattformSonstiges} onChange={e => setPlattformSonstiges(e.target.value)} className="border p-2 w-full"/>
            )}

            <label>Hast du bereits als Content-Creator Erfahrung sammeln können? *</label>
            <select value={erfahrung} onChange={e => setErfahrung(e.target.value)} className="border p-2 w-full">
                <option>Nein</option>
                <option>Ja</option>
            </select>

            {erfahrung === "Ja" && (
                <textarea placeholder='Falls Ja: Als was hast du Erfahrung gesammelt und wo? *' value={erfahrungDetails} onChange={e => setErfahrungDetails(e.target.value)} className="border p-2 w-full"/>
            )}

            <label>Kannst du in Discord Sprachkanäle nutzen? *</label>
            <select value={voice} onChange={e => setVoice(e.target.value)} className="border p-2 w-full">
                <option value="">Bitte wählen</option>
                <option>Ja</option>
                <option>Nein</option>
            </select>

            <textarea placeholder="Was zeichnet einen guten Content aus? *" value={contentQuali} onChange={e => setContentQuali(e.target.value)} className="border p-2 w-full"/>
            <textarea placeholder="Woraus besteht dein Content? *" value={contentArt} onChange={e => setContentArt(e.target.value)} className="border p-2 w-full"/>

            <label>Ich bestätige, dass ich die Anforderungen als Content-Creator kenne *</label>
            <select value={anforderungenAkzeptiert} onChange={e => setAnforderungenAkzeptiert(e.target.value)} className="border p-2 w-full">
                <option>Nein</option>
                <option>Ja</option>
            </select>

            <label>Ich bin einverstanden, dass meine Bewerbung nach 10 Tagen abgelehnt wird, falls keine Rückmeldung erfolgt *</label>
            <select value={fristenAkzeptiert} onChange={e => setFristenAkzeptiert(e.target.value)} className="border p-2 w-full">
                <option>Nein</option>
                <option>Ja</option>
            </select>

            <label>Ich akzeptiere die Datenschutz-Bestimmungen aus Regeln & AGBs *</label>
            <select value={datenschutzAkzeptiert} onChange={e => setDatenschutzAkzeptiert(e.target.value)} className="border p-2 w-full">
                <option>Nein</option>
                <option>Ja</option>
            </select>

            <button onClick={handleSubmit} className="bg-purple-500 text-white px-4 py-2 rounded mt-4">Bewerbung absenden</button>
        </div>
    );
}
