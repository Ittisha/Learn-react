import React, { Component } from 'react';
import Comment from './Comment';

class CommentsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
    if(!this.props.commentsData || this.props.commentsData.length === 0) {
        return <p>There is no comments</p>
    }

    return (<div>
            <button onClick={this.onButtonClick}>{this.getButtonText()}</button>
            {this.getComments()}
        </div>
    )

    }

    getComments() {
        if(!this.state.isOpen) {
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
        return this.state.isOpen ? `Hide comments` : `Show comments (${this.props.commentsData.length})`;
    }

    onButtonClick = (evt) => {
    evt.preventDefault();
    this.setState({
        isOpen: !this.state.isOpen
    })

    }

}

export default CommentsList;