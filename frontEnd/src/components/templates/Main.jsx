import React from 'react';
import './Main.css';
import Header from './Header';

const prosp = (e) => {
    return (
        <React.Fragment>
            <Header {...e}/>
            <main className="conteudo container-fluid">
                <div className="p-2 mt-1">
                    {e.children}
                </div>
                
            </main>
        </React.Fragment>
    );
}

export default prosp;
