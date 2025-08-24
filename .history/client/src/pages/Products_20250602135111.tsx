import React from 'react';
import './Products.css'; // Make sure you import your CSS file

const Products: React.FC = () => {
    const products = [
        { id: 1, name: 'Adjustable Dumbbells', price: 299, image: 'https://images.pexels.com/photos/416747/pexels-photo-416747.jpeg', description: 'Adjustable dumbbells for strength training.' },
        { id: 2, name: 'Yoga Mat Pro', price: 89, image: 'https://images.pexels.com/photos/3822663/pexels-photo-3822663.jpeg', description: 'Comfortable non-slip yoga mat.' },
        { id: 3, name: 'Resistance Bands', price: 49, image: 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg', description: 'Full set of resistance bands for workouts.' },
        { id: 4, name: 'Kettlebell Set', price: 199, image: 'https://images.pexels.com/photos/669577/pexels-photo-669577.jpeg', description: '3-piece kettlebell set (5/10/15kg).' },
        { id: 5, name: 'Treadmill Foldable', price: 1199, image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg', description: 'Space-saving foldable treadmill.' },
        { id: 6, name: 'Punching Bag', price: 399, image: 'https://images.pexels.com/photos/4761798/pexels-photo-4761798.jpeg', description: 'Heavy-duty punching bag for home gyms.' },
        { id: 7, name: 'Pull-Up Bar', price: 75, image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg', description: 'Door-mounted pull-up bar.' },
        { id: 8, name: 'Foam Roller', price: 39, image: 'https://images.pexels.com/photos/4498603/pexels-photo-4498603.jpeg', description: 'Massage foam roller for recovery.' },
        { id: 9, name: 'Bench Press', price: 449, image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg', description: 'Flat bench press station.' },
        { id: 10, name: 'Rowing Machine', price: 899, image: 'https://images.pexels.com/photos/6456005/pexels-photo-6456005.jpeg', description: 'Cardio rower with digital display.' },
        { id: 11, name: 'Fitness Gloves', price: 29, image: 'https://images.pexels.com/photos/1552241/pexels-photo-1552241.jpeg', description: 'Anti-slip breathable workout gloves.' },
        { id: 12, name: 'Jump Rope', price: 19, image: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg', description: 'Adjustable speed jump rope.' },
        { id: 13, name: 'Stepper Machine', price: 349, image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg', description: 'Compact stepper for indoor cardio.' },
        { id: 14, name: 'Smart Scale', price: 99, image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg', description: 'Tracks weight, BMI, body fat %.' },
        { id: 15, name: 'Medicine Ball', price: 59, image: 'https://images.pexels.com/photos/669577/pexels-photo-669577.jpeg', description: 'Durable medicine ball, 4kg.' },
        { id: 16, name: 'Ankle Weights', price: 45, image: 'https://images.pexels.com/photos/4498576/pexels-photo-4498576.jpeg', description: 'Adjustable ankle weights (2kg).' },
        { id: 17, name: 'Balance Board', price: 69, image: 'https://images.pexels.com/photos/4498601/pexels-photo-4498601.jpeg', description: 'For stability & core training.' },
        { id: 18, name: 'Battle Ropes', price: 189, image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg', description: 'Strength + endurance rope training.' },
        { id: 19, name: 'Fitness Tracker', price: 149, image: 'https://images.pexels.com/photos/6456109/pexels-photo-6456109.jpeg', description: 'Smart fitness band with heart rate.' },
        { id: 20, name: 'Spin Bike', price: 999, image: 'https://images.pexels.com/photos/1954521/pexels-photo-1954521.jpeg', description: 'Indoor cycling bike, adjustable seat.' }
    ];

    return (
        <div className="products-page">
            <h2>Our Products</h2>
            <div className="products-grid">
                {products.map((product) => (
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
