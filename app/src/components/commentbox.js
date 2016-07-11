import React from 'react';
import CommentList from './commentlist';
import CommentForm from './commentform';

export default class CommentBox extends React.Component {
	render() {
		return (
			<div className="comment-box">
				<h1>Comments</h1>
				<CommentList data={this.props.data} />
				<CommentForm />
			</div>
		);
	}
}