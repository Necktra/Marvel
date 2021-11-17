import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import App from './components/app/App';
import MarvelService from './services/MarvelService';
import reportWebVitals from './reportWebVitals';

const marvelService = new MarvelService();

marvelService.getAllCharacters().then(res=> console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
