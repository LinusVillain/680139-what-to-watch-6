import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const MovieList = (props) => {
  const {films} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film) => <MovieCard film={film} key={film.id} />)}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </React.Fragment>
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired
};

export default MovieList;
