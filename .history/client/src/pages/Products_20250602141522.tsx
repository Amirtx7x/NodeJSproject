import React, { useState } from 'react';
import './Products.css'; // Ensure this CSS file exists

const Products: React.FC = () => {
    const [searchId, setSearchId] = useState('');

    const products = [
        {
            id: 1,
            name: 'Adjustable Dumbbells',
            price: 299,
            image: 'https://images.pexels.com/photos/4793222/pexels-photo-4793222.jpeg',
            description: 'Adjustable dumbbells for strength training.'
        },
        {
            id: 2,
            name: 'Yoga Mat Pro',
            price: 89,
            image: 'https://images.pexels.com/photos/8436639/pexels-photo-8436639.jpeg',
            description: 'Comfortable non-slip yoga mat.'
        },
        {
            id: 3,
            name: 'Resistance Bands',
            price: 49,
            image: 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg',
            description: 'Full set of resistance bands for workouts.'
        },
        {
            id: 4,
            name: 'Kettlebell Set',
            price: 199,
            image: 'https://images.pexels.com/photos/669577/pexels-photo-669577.jpeg',
            description: '3-piece kettlebell set (5/10/15kg).'
        },
        {
            id: 5,
            name: 'Foldable Treadmill',
            price: 1199,
            image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg',
            description: 'Space-saving foldable treadmill.'
        },
        {
            id: 6,
            name: 'Punching Bag',
            price: 399,
            image: 'https://images.pexels.com/photos/4761798/pexels-photo-4761798.jpeg',
            description: 'Heavy-duty punching bag for home gyms.'
        },
        {
            id: 7,
            name: 'Pull-Up Bar',
            price: 75,
            image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg',
            description: 'Door-mounted pull-up bar.'
        },
        {
            id: 8,
            name: 'Foam Roller',
            price: 39,
            image: 'https://images.pexels.com/photos/4498603/pexels-photo-4498603.jpeg',
            description: 'Massage foam roller for recovery.'
        },
        {
            id: 9,
            name: 'Bench Press',
            price: 449,
            image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg',
            description: 'Flat bench press station.'
        },
    ];

    const filteredProducts = products.filter(product =>
        searchId === '' ? true : product.id === parseInt(searchId)
    );

    return (
        <div className="products-page">
            <h2>Our Products</h2>

            <div className="search-bar">
                <input
                    type="number"
                    placeholder="Search by Product ID"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
            </div>

            <div className="products-grid">
                {filteredProducts.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="price">{product.price} ₪</p>
                            <button>View Product</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
