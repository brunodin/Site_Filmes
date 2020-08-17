import React, { Component } from 'react';
import axios from 'axios';
import Main from '../templates/Main';
import './Film.css';

const basesURL = 'https://api.themoviedb.org/3/movie/popular?api_key=078a257963a4ba28d54a222e5dce01bf&language=pt-BR'
const headerProps = {
    icon: 'fa fa-film',
    title: 'Filmes'
}
const imgUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'



class Film extends Component {
    state = {
        results: []
    }

    componentWillMount() {
        axios(basesURL).then(resp => {
            this.setState({ results: resp.data.results })
        })
    }

    renderList() {
        const results = this.state.results;
        var i = 0
        return (
            <ul className="lista-filmes list-group">
                <a href="/">
                {results.map(results => {
                    return (
                        <li className="list-group-item mb-1" key={results.id}>
                            
                                <img src={`${imgUrl}${results.poster_path}`}
                                    alt="results.title"
                                    width="50" /> 
                                   <span> {results.title}</span>
                            
                        </li>
                    )
                })}
                </a>
            </ul>
        );
    }

    render() {
        return (
            <Main {...headerProps} >
                {this.renderList()}
            </Main>
        );
    }
}

export default Film;