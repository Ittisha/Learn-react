import React, { Component } from 'react';
import Comment from './Comment';
import toggleOpenWrap from '../decorators/toggleOpen';

class CommentsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    if(!this.props.commentsData.length) {
        return <p>No comments</p>
    }

    return (<div>
            <button onClick={this.props.toggle}>{this.getButtonText()}</button>
            {this.getComments()}
        </div>
    )

    }

    getComments() {
        if(!this.props.isOpen) {
            return null;
        }

        const commentElements = this.props.commentsData.map(element => <li key = {element.id}>
            <Comment comment = {element} />
        </li>);

        return (
            <ul>
                {commentElements}
            </ul>
        )
    }

    getButtonText() {
        return this.props.isOpen ? `Hide comments` : `Show comments (${this.props.commentsData.length})`;
    }
}

CommentsList.defaultProps = {
    commentsData: []
};

export default toggleOpenWrap(CommentsList);