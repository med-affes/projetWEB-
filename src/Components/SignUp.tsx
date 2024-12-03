import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './SignUp.css'; // Import the CSS for styling

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        password: ''
    });

    // Handle form data changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add any submit logic here (like calling an API to save the data)
        navigate('/'); // Navigate to HomePage after form submission
    };

    return (
        <div className="background">
            <div className="bg">
                <img src="/bgg.jpg" alt="Background" /> {/* Ensure the path to the image is correct */}
            </div>
            <form className="signup-container" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                />

                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                />

                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
