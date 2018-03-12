import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';

const App = props => (
  <div>
    <ArticleList data={props.articles} />
  </div>
);

App.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string,
      text: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

export default App;
