import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

const PlayerScreen = (props) => {
  const {match, films} = props;
  let {id} = match.params;
  id = id.match(/\d+/)[0];
  const movie = films.find((film) => film.id === parseInt(id, 10));
  const {previewImage, runTime} = movie;
  const history = useHistory();

  let positionStyle = {
    left: `30%`
  };

  return (
    <div className="player">
      <video src="#" className="player__video" poster={previewImage}></video>

      <button onClick={() => history.goBack()} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={positionStyle}>Toggler</div>
          </div>
          <div className="player__time-value">{runTime + ` m`}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = {
  match: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired
};

export default PlayerScreen;
