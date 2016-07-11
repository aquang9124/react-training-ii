import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/scss/app.scss';
import CommentBox from './components/commentbox';

ReactDOM.render(<CommentBox url="/api/comments" pollInterval={2000} />, document.getElementById('content'));