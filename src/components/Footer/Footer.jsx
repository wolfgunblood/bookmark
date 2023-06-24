import React from 'react'
import "./Footer.scss";
import Twitter from "../../assets/images/icon-twitter.svg"
import Facebbok from "../../assets/images/icon-facebook.svg"
import Bookmark from "../../assets/images/logo-bookmark.svg"
const Footer = () => {
    return (
        <footer>
            <img src={Bookmark} alt="Bookmark" />
            <ul className='footer-list'>
                <li className='footer-item'>FEATURES</li>
                <li className='footer-item'>PRICING</li>
                <li className='footer-item'>CONTACT</li>
            </ul>
            <div className='footer-social'>
                <img src={Twitter} alt="Twiiter" />
                <img src={Facebbok} alt="Facebbok" />

            </div>
        </footer>
    )
}

export default Footer