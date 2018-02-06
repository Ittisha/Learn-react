import React, { Component } from 'react';
import CommentsList from './CommentList';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.onToggleClick}>
                    {isOpen ? `Close` : `Open`}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) {
            return null;
        }

        const {article} = this.props;
        return <section><p>{article.text}</p><CommentsList commentsData = {article.comments} /></section>
    }

    onToggleClick = (evt) => {
        evt.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article;