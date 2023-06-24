import React, { useState } from 'react';
import "./Faq.scss";
import Up from "../../assets/images/icon-arrow.svg"
import Down from "../../assets/images/icon-close.svg"

const Faq = () => {
    const [active, setActive] = useState([
        false, false, false, false
    ]);
    console.log(active);
    const questions = [
        "What is Bookmark?",
        "How can I request a new browser?",
        "Is there a mobile app?",
        "What about other Chromium browsers?",
    ];

    const answers = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
        " Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    ];

    const handleFaq = (e, i) => {
        const updatedArray = [...active]; // Create a new array
        updatedArray[i] = !active[i]; // Update the desired element
        console.log(active)
        setActive(updatedArray); // Set the new array as the new state;
    };

    return (
        <div className='faqs-container'>
            <div className='faqs-header'>
                <h4 className='faqs-title'>Frequently Asked Questions</h4>
                <p className='faqs-subtitle'>Here are some of our FAQs. If you have any other questions you’d like
                    answered please feel free to email us.</p>
            </div>
            <div className='faqs'>
                {
                    Array(questions.length).fill().map((_, i) => (

                        <div className='faq-item' key={i}>
                            <div className='faq-question' onClick={(e) => handleFaq(e, i)}>
                                <h4 className='faq-question-title'>{questions[i]}</h4>
                                <img src={`${active[i] ? Down : Up}`} alt="Up Arrow" />
                            </div>
                            {
                                active[i] &&
                                <div className='faq-answer'>
                                    <p className='faq-answer-text'>{answers[i]}</p>
                                </div>
                            }
                        </div>

                    ))
                }
            </div>
        </div >
    )
}

export default Faq