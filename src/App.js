import React, { Component } from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import api from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: undefined, error: '', isLoading: true };
  }

  // async componentDidMount() {
  //   const response = await fetch(`https://academy-video-api.herokuapp.com/content/free-items`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   this.data = await response.json();
  //   this.setState({ isLoading: false, movies: this.data });
  //   console.log('Movies:', this.state.movies);
  // }

  // componentDidMount() {
  //   fetch(`https://academy-video-api.herokuapp.com/content/free-items`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       console.log('Vyksta fetch');
  //       if (!response.ok) throw new Error(response.status);
  //       else return response.json();

  //       // if (response.status >= 400) {
  //       //   throw new Error('Server responds with error!');
  //       // } else return response.json();
  //     })
  //     .then((data) => {
  //       this.setState({ isLoading: false, movies: data });
  //       console.log('Ivyko fetch priskyrimas duomenu', this.state);
  //     })
  //     .catch((error) => {
  //       console.log('Error: ', error);
  //       this.setState({ error: error });
  //     });
  // }

  // componentDidMount() {
  //   fetch('https://academy-video-api.herokuapp.com/content/free-items', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       console.log('Vyksta fetch');
  //       if (!response.ok) throw new Error(response.status);
  //       else return response.json();
  //     })
  //     .then(
  //       (data) => {
  //         this.setState({ isLoading: false, movies: data });
  //         console.log('Ivyko fetch priskyrimas duomenu', this.state);
  //       },
  //       (err) => {
  //         console.log('Erroras:', err);
  //         this.setState({
  //           error: err,
  //           isLoading: false,
  //         });
  //       }
  //     );
  // }

  componentDidMount() {
    api.getFreeItems(
      (data) => this.setState({ isLoading: false, movies: data }),
      (error) => {
        this.setState({ isLoading: false, error: error.message });
        console.error('Erroras:', error);
      }
    );
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch info:', info);
    this.setState({ error: error.message });
  }

  render() {
    return (
      <div className="App">
        <Home error={this.state.error} loading={this.state.isLoading} movies={this.state.movies} />
      </div>
    );
  }
}
export default App;
