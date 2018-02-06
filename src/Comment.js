import React from 'react';

const Comment = (props) => {
    return (
        <blockquote>
            <p>{props.comment.text}</p>
            <cite>{props.comment.user}</cite>
        </blockquote>
    )
};

export default Comment;