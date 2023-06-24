import React,{useState} from 'react'
import Tab1 from "../../assets/images/illustration-features-tab-1.svg" 
import Tab2 from "../../assets/images/illustration-features-tab-2.svg" 
import Tab3 from "../../assets/images/illustration-features-tab-3.svg" 
const Tabs = () => {

    const [active, setActive] = useState(0)
    
    const tabs = [
        {
            img : Tab1,
            title: "Bookmark in one click",
            desc:  "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        },
        {
            img : Tab2,
            title: "Intelligent search",
            desc:  "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        },
        {
            img : Tab3,
            title: "Share your bookmarks",
            desc:  "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        },
    ]
  return (
    <div>
        <h4> Features</h4>
        <p>Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go.</p>
        <div>
            <button className='btn-tab' onClick={setActive(0)}>Simple Bookmarking</button>
            <button className='btn-tab' onClick={setActive(1)}> Speedy Searching</button>
            <button className='btn-tab' onClick={setActive(2)}>Easy Sharing</button>
        </div>
        <div>
            <img src={tabs[active].img} alt="Tabs Image" className='tabs-img' />
            <div>
                <h4>tabs[active].title</h4>
                <p>tabs[active].desc</p>
                <button>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default Tabs