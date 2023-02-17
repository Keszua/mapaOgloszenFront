import React from 'react';
import logo from './logo.svg';
import './App.css';


export const App = () => {

  return <>
    <div className="wrapper">
      <header>
        <h1>
          <strong>Mega</strong> Ogłoszenia
        </h1>
        <button>Dodaj ogłoszenie</button>
        <div className="search">
          <input type="text" />
          <button>Szukaj</button>
        </div>
      </header>
      <div className="map">
        <p>Test</p>

      </div>
    </div>
  </>;
}

// export default App;
