import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './ProductView.css';

const ProductView: React.FC = () => {
    const navigate = useNavigate();
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState<string>("");

    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    const handleProfileClick = () => {
        navigate('/otherprofile'); // Navigate to the OtherProfilePage
    };

    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <NavBar />
            </header>

            {/* Main Content: Split into Two Sections */}
            <div className="product-view">
                {/* Left Section: Product Image */}
                <div className="product-image-section">
                    <img
                        src="/pizza.jpg"
                        alt="Italian Pizza"
                        className="product-image"
                    />
                    <div className="add-to-basket">
                        <a href="/basket"> {/* Link to the basket page */}
                            <img
                                src="/addtobasket.jpg"
                                alt="Add to basket"
                                className="basket-image"
                            />
                        </a>
                    </div>
                </div>

                {/* Right Section: Owner Profile and Description */}
                <div className="product-details-section">
                    <div className="profile-card">
                        <img
                            src="/emnag.jpg"
                            alt="Profile"
                            className="profile-avatar"
                            onClick={handleProfileClick} // Add onClick handler
                        />
                        <div className="profile-info">
                            <h2 className="profile-name">Anna Parker</h2>
                            <p className="profile-description">
                                <strong>I made:</strong> Italian Pizza
                                <br />
                                <strong>Ingredients:</strong> Tomato Sauce, Mozzarella, Basil
                            </p>
                        </div>
                    </div>

                    {/* Product Description */}
                    <div className="product-description">
                        <h3>Description</h3>
                        <p>
                            This Italian Pizza is made with fresh ingredients, including
                            homemade tomato sauce, creamy mozzarella, and aromatic basil
                            leaves. Perfect for any occasion!
                        </p>
                    </div>
                </div>
            </div>

            {/* Comments Section */}
            <div className="comments-section">
                <h3>Comments</h3>
                <div className="add-comment">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="comment-input"
                    />
                    <button onClick={handleAddComment} className="comment-button">
                        Add Comment
                    </button>
                </div>
                <ul className="comments-list">
                    {comments.map((comment, index) => (
                        <li key={index} className="comment-item">
                            {comment}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductView;
