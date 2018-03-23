import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordionWrap from '../decorators/accordion';

const ArticleList = (props) => {
  const articleElements = props.data.map(element => (
    <li key={element.id}>
      <Article
        article={element}
        isOpen={element.id === props.openItemId}
        toggle={props.toggleItem(element.id)}
      />
    </li>));

  return (
    <ul>
      {articleElements}
    </ul>
  );
};

ArticleList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
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
  // from accordion
  openItemId: PropTypes.string,
  toggleItem: PropTypes.func.isRequired,
};

ArticleList.defaultProps = {
  openItemId: null,
};

export default accordionWrap(ArticleList);

