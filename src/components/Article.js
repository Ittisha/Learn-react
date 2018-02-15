import React, { Component } from 'react';
import CommentsList from './CommentList';
import PropTypes from 'prop-types';
import toggleOpenWrap from '../decorators/toggleOpen';

class Article extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {article, isOpen, toggle} = this.props;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggle}>
                    {isOpen ? `Close` : `Open`}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props;

        if (!isOpen) {
            return null;
        }


        return (
            <section>
                <p>{article.text}</p>
                <CommentsList commentsData = {article.comments} />
            </section>
        )
    }

}

Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string
    }).isRequired
};

export default toggleOpenWrap(Article);