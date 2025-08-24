import React from 'react';

const Products: React.FC = () => {
    const products = [
        { id: 1, name: 'Adjustable Dumbbells', price: 299, image: '/images/dumbbells.jpg', description: 'Adjustable dumbbells for strength training.' },
        { id: 2, name: 'Yoga Mat Pro', price: 89, image: '/images/yoga-mat.jpg', description: 'Comfortable non-slip yoga mat.' },
        { id: 3, name: 'Resistance Bands', price: 49, image: '/images/resistance.jpg', description: 'Full set of resistance bands for workouts.' },
        { id: 4, name: 'Kettlebell Set', price: 199, image: '/images/kettlebell.jpg', description: '3-piece kettlebell set (5/10/15kg).' },
        { id: 5, name: 'Treadmill Foldable', price: 1199, image: '/images/treadmill.jpg', description: 'Space-saving foldable treadmill.' },
        { id: 6, name: 'Punching Bag', price: 399, image: '/images/punching-bag.jpg', description: 'Heavy-duty punching bag for home gyms.' },
        { id: 7, name: 'Pull-Up Bar', price: 75, image: '/images/pullup-bar.jpg', description: 'Door-mounted pull-up bar.' },
        { id: 8, name: 'Foam Roller', price: 39, image: '/images/foam-roller.jpg', description: 'Massage foam roller for recovery.' },
        { id: 9, name: 'Bench Press', price: 449, image: '/images/bench-press.jpg', description: 'Flat bench press station.' },
        { id: 10, name: 'Rowing Machine', price: 899, image: '/images/rowing-machine.jpg', description: 'Cardio rower with digital display.' },
        { id: 11, name: 'Fitness Gloves', price: 29, image: '/images/gloves.jpg', description: 'Anti-slip breathable workout gloves.' },
        { id: 12, name: 'Jump Rope', price: 19, image: '/images/jump-rope.jpg', description: 'Adjustable speed jump rope.' },
        { id: 13, name: 'Stepper Machine', price: 349, image: '/images/stepper.jpg', description: 'Compact stepper for indoor cardio.' },
        { id: 14, name: 'Smart Scale', price: 99, image: '/images/smart-scale.jpg', description: 'Tracks weight, BMI, body fat %.' },
        { id: 15, name: 'Medicine Ball', price: 59, image: '/images/medicine-ball.jpg', description: 'Durable medicine ball, 4kg.' },
        { id: 16, name: 'Ankle Weights', price: 45, image: '/images/ankle-weights.jpg', description: 'Adjustable ankle weights (2kg).' },
        { id: 17, name: 'Balance Board', price: 69, image: '/images/balance-board.jpg', description: 'For stability & core training.' },
        { id: 18, name: 'Battle Ropes', price: 189, image: '/images/battle-ropes.jpg', description: 'Strength + endurance rope training.' },
        { id: 19, name: 'Fitness Tracker', price: 149, image: '/images/tracker.jpg', description: 'Smart fitness band with heart rate.' },
        { id: 20, name: 'Spin Bike', price: 999, image: '/images/spin-bike.jpg', description: 'Indoor cycling bike, adjustable seat.' }
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
