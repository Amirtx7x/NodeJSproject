import { useState } from 'react';

function Products() {
    const [form, setForm] = useState({
        name: '',
        brand: '',
        shipper: '',
        buying_price: '',
        selling_price: '',
    });

    const brands = ['Nike', 'Adidas', 'Under Armour'];
    const shippers = ['FedEx', 'DHL', 'UPS'];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', form);
        alert('Product added!');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Add a New Product</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Product Name:</label>
                <input type="text" id="name" value={form.name} onChange={handleChange} required />

                <label htmlFor="brand">Brand:</label>
                <select id="brand" value={form.brand} onChange={handleChange} required>
                    <option value="">Select</option>
                    {brands.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>

                <label htmlFor="shipper">Shipper:</label>
                <select id="shipper" value={form.shipper} onChange={handleChange} required>
                    <option value="">Select</option>
                    {shippers.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>

                <label htmlFor="buying_price">Buying Price:</label>
                <input type="number" id="buying_price" value={form.buying_price} onChange={handleChange} required />

                <label htmlFor="selling_price">Selling Price:</label>
                <input type="number" id="selling_price" value={form.selling_price} onChange={handleChange} required />

                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default Products;
