import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-actions">
            <h3>Actions</h3>
            <ul>
                <li href="#!">Login</li>
                <li href="#!">Sign Up</li>
                <li href="#!">Vender un producto</li>
                <li href="#!">Contactanos</li>
            </ul>
        </div>
        <div className="footer-info">
            <h3>Found Us</h3>
            <ul>
                <li><FontAwesomeIcon icon={faFacebook}/></li>
                <li><FontAwesomeIcon icon={faTwitter}/></li>
            </ul>
            <p>Brisas del Golf, Panamá</p> 
            <p>lootsy-desk@lootsy.com</p>
        </div>
    </footer>
    )
}

export default Footer
