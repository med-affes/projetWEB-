import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        UserName: '',
        Address: '',
        Phone_Number: '',
        E_mail: '',
        Password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);

        try {
            const response = await fetch('http://localhost:3001/api/signups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            console.log('Response status:', response.status);
            if (response.ok) {
                alert('User created successfully!');
                setFormData({
                    UserName: '',
                    Address: '',
                    Phone_Number: '',
                    E_mail: '',
                    Password: ''
                }); // Reset the form data
                navigate('/'); // Navigate to HomePage after form submission
            } else {
                const errorData = await response.json();
                console.log('Error data:', errorData);
                alert('Failed to create user');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the user');
        }
    };

    return (
        <div className="background">
            <div className="bg">
                <img src="/bgg.jpg" alt="Background" />
            </div>
            <form className="signup-container" onSubmit={handleSubmit}>
                <label htmlFor="UserName">Name</label>
                <input
                    type="text"
                    id="UserName"
                    placeholder="Enter your name"
                    required
                    value={formData.UserName}
                    onChange={handleInputChange}
                />

                <label htmlFor="Address">Address</label>
                <input
                    type="text"
                    id="Address"
                    placeholder="Enter your address"
                    required
                    value={formData.Address}
                    onChange={handleInputChange}
                />

                <label htmlFor="Phone_Number">Phone Number</label>
                <input
                    type="tel"
                    id="Phone_Number"
                    placeholder="Enter your phone number"
                    required
                    value={formData.Phone_Number}
                    onChange={handleInputChange}
                />

                <label htmlFor="E_mail">Email</label>
                <input
                    type="email"
                    id="E_mail"
                    placeholder="Enter your email"
                    required
                    value={formData.E_mail}
                    onChange={handleInputChange}
                />

                <label htmlFor="Password">Password</label>
                <input
                    type="password"
                    id="Password"
                    placeholder="Enter your password"
                    required
                    value={formData.Password}
                    onChange={handleInputChange}
                />

                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
