import React from 'react';
import './Nav.css';


const prosp = () => {
    
    return (
        <aside className="menu-navegacao">
            <nav className="menu mt-2">
                <a href="/"><i className="fa fa-film"> Filmes</i></a>
                <a href="/"><i className="fa fa-star"> Favoritos</i></a>

                <div className="input-group">
                    <input type="text" placeholder="Pesquise aqui! " className="form-control" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" >
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </aside>);
}

export default prosp;
