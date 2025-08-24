import React from 'react';

const Products: React.FC = () => {
    const products = [
        {
            id: 1,
            name: "Adjustable Dumbbells",
            price: 299,
            image: "/images/dumbbells.jpg",
            description: "Adjustable weight dumbbells, perfect for home workouts."
        },
        {
            id: 2,
            name: "Yoga Mat Pro",
            price: 79,
            image: "/images/yogamat.jpg",
            description: "Non-slip premium yoga mat, 6mm thick."
        },
        {
            id: 3,
            name: "Resistance Bands Set",
            price: 129,
            image: "/images/resistance.jpg",
            description: "Set of 5 resistance bands with varying tension."
        }
    ];

    return (
        <div className="products-page">
            <h2>Our Products</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="price">{product.price} ₪</p>
                        <button>View Product</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
