import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
        <blockquote>
            <p>{props.comment.text}</p>
            <cite>{props.comment.user}</cite>
        </blockquote>
    )
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    })
};

export default Comment;
