interface Product {
    readonly id: number;
    name: string;
    price: number;
    description?: string;
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 25000,
    description: "A modern laptop",
};