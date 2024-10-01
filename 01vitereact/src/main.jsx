import React from 'react'                  // need to import React to write JSX (which is a syntax extension of JavaScript).
import ReactDOM from 'react-dom/client'    // responsible for rendering your React components to the DOM
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (                        //creates a React element using JSX syntax. It's an anchor (<a>) tag linking to Google that opens in a new tab
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"
const reactElement = React.createElement(       // create React elements manually (without JSX). It takes three arguments
    'a',                                        // The HTML tag (e.g., 'a' for an anchor).
    {href: 'https://google.com',target: '_blank' }, // An object representing the properties/attributes 
    'click me to visit google',                     // Children or content inside the element (text or other elements). 
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)


