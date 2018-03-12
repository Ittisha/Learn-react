/* global document */
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { articles } from './data';

render(<App articles={articles} />, document.getElementById('app'));
