
import React from 'react';
import './Header.css';


const prosp = (e) => {
    return (
        <header className="header">
            <h3>
                <i className={e.icon}></i>
                {e.title}
            </h3>
            
        </header>
    );
}

export default prosp;