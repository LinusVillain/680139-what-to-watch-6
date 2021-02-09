import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = ({props}) => {
  return (
    <MainPage {...props} />
  );
};

App.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  })
};

export default App;
