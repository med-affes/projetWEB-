import React from 'react';
import './Homing.css'; // Import the external CSS file for Homing
import NavBar from './NavBar'; // Import Navbar component

const Homing: React.FC = () => {
    const categories = [
        {
            name: 'Clothes',
            products: [
                { name: 'Dress', imageUrl: 'dress.jpg' },
                { name: 'Hat', imageUrl: 'hat.jpg' },
                { name: 'Skirt', imageUrl: 'skirt.jpg' }
            ],
        },
        {
            name: 'Food',
            products: [
                { name: 'Pizza', imageUrl: 'pizza.jpg' },
                { name: 'Donut', imageUrl: 'donuts.jpg' },
                { name: 'Couscous', imageUrl: 'Couscous.jpg' }
            ],
        },
        {
            name: 'Paintings',
            products: [
                { name: 'Paint', imageUrl: 'paint.jpg' },
                { name: 'Brush Set', imageUrl: 'painter.jpg' },
                { name: 'Acrylic Paints', imageUrl: 'painters.jpg' }
            ],
        },
        {
            name: 'Artisan products',
            products: [
                { name: 'Handmade Vase', imageUrl: 'vase.jpg' },
                { name: 'Carpet', imageUrl: 'zarbiya.jpg' },
                { name: 'Bag', imageUrl: 'bags.jpg' }
            ],
        },
    ];

    return (
        <div className="homing-page">
            {/* Navbar Section */}
            <section className="navbar-section">
                <NavBar />
            </section>

            {/* Content Section for Categories and Products */}
            <section className="content-section">
                {categories.map((category) => (
                    <div className="category-section" key={category.name}>
                        <h2 className="category-name">{category.name}</h2>
                        <div className="products-container">
                            {category.products.map((product, index) => (
                                <div className="product-card" key={index}>
                                    {/* Product Image */}
                                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                                    <h3 className="product-name">{product.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Homing;
