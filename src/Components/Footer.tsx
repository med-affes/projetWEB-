import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {

    

    return (
        <div>
            

            


            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-box">
                        <h3>We are Homade:</h3>
                        <ul>
                            <li>Durability</li>
                            <li>Authenticity</li>
                            <li>Good quality</li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h3>About us:</h3>
                        <p>
                            We offer you a place where you can show your work and also buy people’s creations.
                        </p>
                    </div>
                </div>
                <div className="footer-icons">
                    <a href="https://facebook.com" className="icon" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.png" alt="Facebook" />
                    </a>
                    <a href="tel:+1234567890" className="icon">
                        <img src="/phone.png" alt="Phone" />
                    </a>
                    <a href="https://instagram.com" className="icon" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="Instagram" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;