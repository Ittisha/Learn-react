import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
    const articleElements = props.data.map(element => <li key = {element.id}>
        <Article article = {element} />
    </li>);

    return (
        <ul>
            {articleElements}
        </ul>
    )
};

export default ArticleList;

