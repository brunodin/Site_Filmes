import React, { Component } from 'react';
import axios from 'axios';
import Main from '../templates/Main';

const basesURL = 'https://api.themoviedb.org/3/movie/'

class Search extends Component {
    state = { 
        result: []
     }
    
     componentWillMount() {
        axios(basesURL).then(resp => {
            this.setState({ results: resp.data.results })
        })
    }

    renderFilm(){
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
 
export default Search;