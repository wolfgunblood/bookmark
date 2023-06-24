import React from 'react';
import "./Extension.scss";
import Chrome from "../../assets/images/logo-chrome.svg"
import Firefox from "../../assets/images/logo-firefox.svg"
import Opera from "../../assets/images/logo-opera.svg"
import Dots from "../../assets/images/bg-dots.svg"

const Extension = () => {

    const ext = [
        {
            icon: Chrome,
            name: "Chrome",
            version: "62",
        },
        {
            icon: Firefox,
            name: "Firefox",
            version: "55",
        },
        {
            icon: Opera,
            name: "Opera",
            version: "46",
        },
    ]
    return (
        <div className='extension-container'>
            <div className='extension-title-container'>
                <h4 className='extension-title'> Download the extension</h4>
                <p className='extension-subtitle'>We’ve got more browsers in the pipeline. Please do let us know if you’ve
                    got a favourite you’d like us to prioritize.</p>
            </div>
            <div className='extension-list-container'>
                {
                    ext.map((item, index) => (
                        <div className='extension-list-item' key={index}>
                            <img src={item.icon} alt="icon" />
                            <div className='extension-list-item-info'>
                                <p className='extension-list-item-name'>{"Add to " + item.name}</p>
                                <p className='extension-list-item-version'>{"Minimum version " + item.version}</p>
                                <img src={Dots} alt="Dots" />
                                <button className='extension-list-item-button'>Add & Install Extensiona</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Extension