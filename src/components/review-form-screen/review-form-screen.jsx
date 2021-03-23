import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import RatingAndCommentForm from '../comment-form/comment-form';

const ReviewFormScreen = (props) => {
  const {match, films} = props;
  let {id} = match.params;
  id = id.match(/\d+/)[0];
  const movie = films.find((film) => film.id === parseInt(id, 10));
  const {name} = movie;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/:${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt={name} width="218" height="327" />
        </div>
      </div>

      <RatingAndCommentForm />

    </section>
  );
};

ReviewFormScreen.propTypes = {
  match: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired
};

export default ReviewFormScreen;
