import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentsForm from './CommentsForm';
import toggleOpenWrap from '../decorators/toggleOpen';

const getComments = (commentsData, isOpen) => {
  if (!isOpen) {
    return null;
  }

  const commentElements = commentsData.map(element => (
    <li key={element.id}>
      <Comment comment={element} />
    </li>
  ));

  return (
    <ul>
      {commentElements}
    </ul>
  );
};

const getButtonText = (commentsData, isOpen) => (
  isOpen ? 'Hide comments' : `Show comments (${commentsData.length})`
);

const CommentsList = ({ commentsData = [], isOpen, toggle }) => {
  if (!commentsData.length) {
    return (
      <div>
        <p>No comments</p>
        <CommentsForm />
      </div>
    );
  }

  return (
    <div>
      <button onClick={toggle}>{getButtonText(commentsData, isOpen)}</button>
      {getComments(commentsData, isOpen)}
      <CommentsForm />
    </div>
  );
};

CommentsList.propTypes = {
  commentsData: PropTypes.arrayOf(PropTypes.object),
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

CommentsList.defaultProps = {
  commentsData: [],
};

export default toggleOpenWrap(CommentsList);
