// ranks.ts

export interface Rank {
    name: string;
    price: number; // in Euro
    imageUrl: string;
    purchaseLink: string;
}

export const ranks: Rank[] = [
    {
        name: "Premium",
        price: 5.99,
        imageUrl: "https://dunb17ur4ymx4.cloudfront.net/packages/images/89e5accd5af536855c0d0d150b414a9f8185069a.png", // Platzhalter-Bild
        purchaseLink: "https://store.jdbros.de/package/6891826"
    },
    {
        name: "Emerald",
        price: 11.99,
        imageUrl: "https://dunb17ur4ymx4.cloudfront.net/packages/images/9e89dc3a95313fa363a21c717bb5aee7f3162961.png",
        purchaseLink: "https://store.jdbros.de/package/6891838"
    },
    {
        name: "Hero",
        price: 15.99,
        imageUrl: "https://dunb17ur4ymx4.cloudfront.net/packages/images/ecc517aafe97372a3e2749f5d78a3713e6832852.png",
        purchaseLink: "https://store.jdbros.de/package/6891839"
    },
    {
        name: "Titan",
        price: 24.99,
        imageUrl: "https://dunb17ur4ymx4.cloudfront.net/packages/images/404fa647ee0398728d47e2de1ba96421a6fc5aa6.png",
        purchaseLink: "https://store.jdbros.de/package/6891840"
    },
    {
        name: "Wiederherstellen",
        price: 0.0,
        imageUrl: "https://via.placeholder.com/150?text=Wiederherstellen",
        purchaseLink: "https://store.jdbros.de/category/ranks"
    }
];
