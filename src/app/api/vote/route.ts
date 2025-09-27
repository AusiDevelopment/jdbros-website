import type { NextRequest } from "next/server";

export async function POST(req: Request) {
    const { name } = await req.json();
    const webhookURL = "https://discord.com/api/webhooks/1421512680358940782/8CXnjzS4RWxowaZFF7YvQk7gh7H65wwK88Yzq0AxJxXsz-ZUy29By37SY3G1YKWsJ-1v";

    await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            embeds: [{
                title: "Neuer Vote!",
                description: `${name} hat gevotet!`,
                color: 5814783
            }]
        })
    });

    return new Response(JSON.stringify({ success: true }));
}
