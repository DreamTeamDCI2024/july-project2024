
export const products = [
    {
        name: "Elegant Table",
        description: "A beautifully crafted table perfect for any dining room.",
        price: 299.99,
        categories: ["furniture", "living room"],
        materials: ["wood", "metal"],
        images: [
          { url: "http://example.com/img1.jpg", description: "Front view" },
          { url: "http://example.com/img2.jpg", description: "Top view" }
        ],
        stock: 15,
        featured: false
    },
    {
        name: "Luxury Sofa",
        description: "A plush sofa that combines comfort with elegance.",
        price: 499.99,
        categories: ["furniture", "living room"],
        materials: ["leather", "foam"],
        images: [
          { url: "http://example.com/img3.jpg", description: "Side view" },
          { url: "http://example.com/img4.jpg", description: "Angle view" }
        ],
        stock: 8,
        featured: true
    },
    {
        name: "Ergonomic Chair",
        description: "An ergonomic office chair",
        price: 199.99,
        categories: ["Adjustable", "Lumbar support", "Wheels"],
        materials: ["Metal", "Plastic", "Fabric"],
        images: [
          { url: "http://example.com/img3.jpg", description: "Side view" },
          { url: "http://example.com/img4.jpg", description: "Angle view" }
        ],
        stock: 5,
        featured: true
    }
];
