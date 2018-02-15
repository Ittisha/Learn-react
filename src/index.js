import React from 'react';
import {render} from 'react-dom';
import ArticleList from './components/ArticleList';
import {articles} from './data';

render(<ArticleList data = {articles} />, document.getElementById('app'));