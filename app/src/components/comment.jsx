import React from 'react';
import Remarkable from 'remarkable';

export default class Comment extends React.Component {
	rawMarkup() {
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return { __html: rawMarkup };
	}
	render() {
		return (
			<div className="comment">
				<h2 className="comment-author">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()}></span>
			</div>
		);
	}
}