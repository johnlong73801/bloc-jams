import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="nav">
            <h1 className="header-logo">Bloc Jams</h1>
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
          
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        <footer className="foot">
          <span>Bloc Jams</span>
        </footer>
      </div>
    );
  }
}

export default App;
