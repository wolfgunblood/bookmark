import React from 'react';
import "./CTA.scss";

const CTA = () => {
    return (
        <div className='cta'>
            <div className='cta-content'>
            <p className='cta-text'> 35,000+ already joined</p>
            <h4 className='cta-header'>  Stay up-to-date with what we’re doing</h4>

            </div>
            <div className='cta-input-container'>
                <input type="text" placeholder='Send Us Something' className='cta-input' />
                <button className='cta-btn'>Contact Us</button>
            </div>
        </div>
    )
}

export default CTA