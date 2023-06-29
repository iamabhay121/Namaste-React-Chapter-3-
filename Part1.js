import React from 'react';
import ReactDOM from "react-dom/client";

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
/*
const header = React.createElement(
    "div",
    {
        className:"title",
        key:'title'
    },
    [
        React.createElement("h1", {key: "h1"}, "This is h1 Tag" ),
        React.createElement("h2", {key: "h2"} , "This is h2 Tag" ),
        React.createElement("h3", {key: "h3"}, "This is h3 Tag" )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(header)
*/


// Create the same element using JSX
/*
const header = (

      <div className='title'>
        <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <h3>This is heading 3</h3>
      </div>
    
    );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(header);

*/

//  Create a functional component of the same with JSX
/*
const Header = () =>{
    return <>
      <div className='title'>
        <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <h3>This is heading 3</h3>
      </div>
    </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header/>)
*/

// Pass attribute into the tag in JSX
/*
const Header = () => {
    return (
      <div className="Title">
        <h1 style={{color:"red"}}>This is h1 tag</h1>
        <h2 style={{color:"blue"}} key="h2">This is h2 tag</h2>
        <h3 style={{color:"yellow"}} key="h3">This is h3 tag</h3>
      </div>
    );
  };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header/>)

*/

// Composition of Component (Add a component inside another)
/*
const Title = () => {
    return <h1>This is Title</h1>
}

const Header = () => {
    return <div>
        <Title />
        <h1>This is Heading</h1>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header/>)
*/

//   {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

const TitleComponent = () => {
    return <h1>This is Title</h1>
}

const Header = () => {
    return <div>
        {TitleComponent()}
        <TitleComponent />
        <TitleComponent></TitleComponent>
        <h1>This is Heading</h1>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header/>)