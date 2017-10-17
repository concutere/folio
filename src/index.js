import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <div>
    <header>
      <div id="title">Concutere</div>
      <div id="subtitle">perceptually-oriented software</div>
    </header>

    <App />
    
    <footer>
      <a href="https://github.com/concutere">github</a>
    </footer>
  </div>,
  document.getElementById('root')
);
