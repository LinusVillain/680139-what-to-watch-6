import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  const {film} = props;
  const {id, previewImage, name} = film;
  const [, setActiveFilm] = useState(0);

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter = {() => setActiveFilm(id)} onMouseLeave = {() => setActiveFilm()}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/:${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.object.isRequired
};

export default MovieCard;
