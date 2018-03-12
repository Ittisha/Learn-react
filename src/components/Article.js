import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentList';

class Article extends Component {
  constructor(props) {
    super(props);

    this.setContainerRef = this.setContainerRef.bind(this);
    this.setCommentRef = this.setCommentRef.bind(this);
  }

  setCommentRef(elem) {
    this.comments = elem;
  }

  getBody() {
    const { article, isOpen } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <section>
        <p>{article.text}</p>
        <CommentsList commentsData={article.comments} ref={this.setCommentRef} />
      </section>
    );
  }

  setContainerRef(elem) {
    this.container = elem;
  }

  render() {
    const { article, isOpen, toggle } = this.props;

    return (
      <div ref={this.setContainerRef} >
        <h3>{article.title}</h3>
        <button onClick={toggle}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getBody()}
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

Article.defaultProps = {
  isOpen: null,
};

export default Article;
