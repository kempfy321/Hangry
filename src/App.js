import React, { Component } from 'react';
import hangry_cat from './hangry_cat.jpg';
import './App.css';
import './index.css';
import Api from './api.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
       <main>
        <img alt="angry cat" src={hangry_cat}></img>
        <h1>Find somewhere to eat, MEOW!</h1>

        <div id="food-type">
          <div className="dropdown">
            <button className="button">What are you craving?</button>
            <div className="dropdown-content">
              <a href="#">Pizza</a>
              <a href="#">Burgers</a>
              <a href="#">Chinese</a>
            </div>
          </div>
        </div>

        <div id="surprise">
          <button className="button">"I can't decide; pick for me!"</button>
        </div>
      </main>

        </header>
      </div>
    );
  }

}




export default App;
