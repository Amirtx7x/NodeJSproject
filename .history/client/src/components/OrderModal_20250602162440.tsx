import React, { useState } from 'react';

interface Props {
    productName: string;
    onClose: () => void;
}

const OrderModal: React.FC<Props> = ({ productName, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [qty, setQty] = useState(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Order submitted for ${productName}\nName: ${name}\nPhone: ${phone}\nQuantity: ${qty}`);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <h2>Order: {productName}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    {/* Quantity Input */}
                    <div className="qty-section">
                        <label>Quantity:</label>
                        <div className="qty-controls">
                            <button
                                type="button"
                                onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={qty}
                                min={1}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    setQty(isNaN(value) ? 1 : Math.max(1, value));
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => setQty((prev) => prev + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button type="submit">Submit Order</button>
                </form>
                <button className="close-button" onClick={onClose}>X</button>
            </div>
        </div>
    );
};

export default OrderModal;
