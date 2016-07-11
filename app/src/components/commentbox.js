import React from 'react';
import CommentList from './commentlist';
import CommentForm from './commentform';
import $ from 'jquery';

export default class CommentBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};

		this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
	}
	loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({
					data: data
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}
	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}
	render() {
		return (
			<div className="comment-box">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
}