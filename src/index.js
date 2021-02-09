import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const moviePromo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App props={moviePromo} />,
    document.querySelector(`#root`)
);
