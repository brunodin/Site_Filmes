import React, { Component } from 'react';
import axios from 'axios';
import Main from './components/templates/Main'

const basesURL = 'https://api.themoviedb.org/3/movie/popular?api_key=078a257963a4ba28d54a222e5dce01bf&language=pt-BR'

class App extends Component {

  state = {
    results: [],
  }

  componentWillMount() {
    axios(basesURL).then(resp => {
        this.setState({ results: resp.data.results })
    })
  }

  render() {

    const results  = this.state.results;
    let i = 0
    return (
      <Main>
      <div>
        <h1>Listar os Filmes</h1>
        {results.map(results=> (
          console.log(results.title)
        ))}
      </div>
      </Main >
    );
  };
};

export default App;