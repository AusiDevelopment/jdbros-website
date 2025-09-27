export async function POST(req: Request) {
    const data = await req.json();
    const webhookURL = "https://discord.com/api/webhooks/1421513389527535798/XomuIhxYAme0qlgCkAsGLfIzZh8_3rMjRVhqNNZFpTWcosJhiIHUhYFIJEq3tVFMa0WZ";

    const fields = Object.entries(data)
        .map(([key, value]) => `**${key}:** ${value}`)
        .join("\n");

    await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            embeds: [
                {
                    title: "Neue Bewerbung: Content-Creator",
                    description: fields,
                    color: 16711935
                }
            ]
        })
    });

    return new Response(JSON.stringify({ success: true }));
}
