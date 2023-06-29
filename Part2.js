import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './logo.png';
import Icon from './icon.png';
import './style.css';


const Header = () => {
    return(
        <>
        <header className="header">
            <div className="left">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="center">
                <input className="input" type="text" placeholder="Search anything you want..."/>
                <button type="submit">Submit</button>
            </div>
            <div className="right">
                <img src={Icon} alt="User Icon"/>
            </div>
        </header>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header/>)