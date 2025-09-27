"use client";
import { useState } from "react";

export default function Bewerbung() {
    const [rolle, setRolle] = useState("Supporter");

    // Allgemeine Felder
    const [vorname, setVorname] = useState("");
    const [alter, setAlter] = useState("");
    const [minecraft, setMinecraft] = useState("");
    const [discord, setDiscord] = useState("");
    const [anderesTeam, setAnderesTeam] = useState("Nein");
    const [teamDetails, setTeamDetails] = useState("");
    const [leben, setLeben] = useState("");
    const [onlineZeit, setOnlineZeit] = useState("");
    const [onlineAnmerkungen, setOnlineAnmerkungen] = useState("");
    const [discordVerf, setDiscordVerf] = useState("");
    const [plattform, setPlattform] = useState("");
    const [plattformSonstiges, setPlattformSonstiges] = useState("");

    const handleSubmit = async () => {
        // Pflichtfeld-Validierung
        if (!vorname || !alter || !minecraft || !discord || !leben || !onlineZeit || !discordVerf || !plattform) {
            alert("Bitte fülle alle Pflichtfelder aus!");
            return;
        }

        if (anderesTeam === "Ja" && !teamDetails) {
            alert("Bitte gib an, in welcher Rolle du im anderen Team tätig bist!");
            return;
        }

        if (plattform === "Sonstiges" && plattformSonstiges.length < 1) {
            alert("Bitte gib bei 'Sonstiges' eine Plattform an!");
            return;
        }

        const payload = {
            rolle,
            vorname,
            alter,
            minecraft,
            discord,
            anderesTeam,
            teamDetails: anderesTeam === "Ja" ? teamDetails : "Nein",
            leben,
            onlineZeit,
            onlineAnmerkungen: onlineZeit !== "6H+" ? onlineAnmerkungen : "",
            discordVerf,
            plattform,
            plattformSonstiges: plattform === "Sonstiges" ? plattformSonstiges : "",
        };

        const res = await fetch("/api/bewerbung", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (data.success) alert("Bewerbung erfolgreich gesendet!");
        else alert("Fehler beim Senden!");
    };

    return (
        <div className="p-8 max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold">Bewerbung als Supporter</h1>

            <input
                type="text"
                placeholder="Vorname *"
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
                className="border p-2 w-full"
            />

            <input
                type="number"
                placeholder="Alter *"
                value={alter}
                onChange={(e) => setAlter(e.target.value)}
                className="border p-2 w-full"
            />

            <input
                type="text"
                placeholder="Minecraft Username *"
                value={minecraft}
                onChange={(e) => setMinecraft(e.target.value)}
                className="border p-2 w-full"
            />

            <input
                type="text"
                placeholder="Discord Username *"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                className="border p-2 w-full"
            />

            {/* Anderes Team */}
            <label>Bist du derzeitig in einem anderen Team tätig? *</label>
            <select
                value={anderesTeam}
                onChange={(e) => setAnderesTeam(e.target.value)}
                className="border p-2 w-full"
            >
                <option>Nein</option>
                <option>Ja</option>
            </select>

            {anderesTeam === "Ja" && (
                <input
                    type="text"
                    placeholder='Falls Ja: In welcher Rolle tätig? *'
                    value={teamDetails}
                    onChange={(e) => setTeamDetails(e.target.value)}
                    className="border p-2 w-full"
                />
            )}

            <label>Was übst du in deinem echten Leben aus? *</label>
            <select
                value={leben}
                onChange={(e) => setLeben(e.target.value)}
                className="border p-2 w-full"
            >
                <option value="">Bitte wählen</option>
                <option>Schüler/Student</option>
                <option>Erwerbstätig</option>
                <option>Arbeitssuchend</option>
            </select>

            <label>Durchschnittliche tägliche Onlinezeit auf jdbros.de *</label>
            <select
                value={onlineZeit}
                onChange={(e) => setOnlineZeit(e.target.value)}
                className="border p-2 w-full"
            >
                <option value="">Bitte wählen</option>
                <option>0H-1H</option>
                <option>1H-3H</option>
                <option>3H-6H</option>
                <option>6H+</option>
            </select>

            {onlineZeit !== "6H+" && onlineZeit !== "" && (
                <textarea
                    placeholder='Anmerkungen zu deiner Onlinezeit'
                    value={onlineAnmerkungen}
                    onChange={(e) => setOnlineAnmerkungen(e.target.value)}
                    className="border p-2 w-full"
                />
            )}

            <input
                type="text"
                placeholder='Von wann bis wann bist du auf Discord verfügbar? *'
                value={discordVerf}
                onChange={(e) => setDiscordVerf(e.target.value)}
                className="border p-2 w-full"
            />

            <label>Auf welchen Plattformen spielst du Minecraft? *</label>
            <select
                value={plattform}
                onChange={(e) => setPlattform(e.target.value)}
                className="border p-2 w-full"
            >
                <option value="">Bitte wählen</option>
                <option>Smartphone</option>
                <option>Windows (Laptop oder Computer)</option>
                <option>Konsole</option>
                <option>Switch</option>
                <option>Sonstiges</option>
            </select>

            {plattform === "Sonstiges" && (
                <input
                    type="text"
                    placeholder='Bitte angeben *'
                    value={plattformSonstiges}
                    onChange={(e) => setPlattformSonstiges(e.target.value)}
                    className="border p-2 w-full"
                />
            )}

            <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            >
                Bewerbung absenden
            </button>
        </div>
    );
}
