import React from 'react';
import ReactDOM from 'react-dom';

class MainLayout extends React.Component {
	render() {
		return (
			<section style={{ border: '2px solid red' }}>
				<header>
					<h1>Page Logo</h1>
					<nav>
						<ul>
							<li><a href="javascript:void(0)">Home</a></li>
							<li><a href="javascript:void(0)">About</a></li>
							<li><a href="javascript:void(0)">Contact</a></li>
						</ul>
					</nav>
				</header>
				<section>
					{this.props.children}
				</section>
				<footer>
					Footer Information.
				</footer>
			</section>
		);
	}
}

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<h1>Home Page</h1>
				<p>Home Page is rendered as `this.props.children` inside of MainLayout</p>
				<p>The count is: {this.props.count}</p>
				<button className="btn-cool" type="button" onClick={this.props.incrementCount}>Increase Count</button>
			</div>
		);
	}
}

class Filter extends React.Component {
	render() {
		return (
			<section>
				<input type="text" placeholder="Search" onChange={this.props.filter} />
			<List items={this.props.items}/>
			</section>
		);
	}
}

class List extends React.Component {
	render() {
		return (
			<ul>
			{
				this.props.items.map(function(item) {
					return <li key={item}>{item}</li>
				})
			}
			</ul>
		);
	}
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialItems: [
				'Apples',
				"Broccoli",
				"Chicken",
				"Duck",
				"Eggs",
				"Fish",
				"Granola",
				"Hash Browns"
			],
			items: [],
			count: 5
		};
		this.incrementCount = this.incrementCount.bind(this);
	}

	componentWillMount() {
		this.setState({
			items: this.state.initialItems
		});
	}

	render() {
		return (
			<MainLayout>
				<HomePage count={this.state.count} incrementCount={this.incrementCount} />
				<Filter items={this.state.items} filter={(e) => this.filterList(e)} />
			</MainLayout>
		);
	}

	incrementCount() {
		this.setState({
			count: this.state.count + 1
		});
	}

	filterList(event) {
		let updatedList = this.state.initialItems;
		
		updatedList = updatedList.filter(function(item) {
			return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		});

		this.setState({
			items: updatedList
		});
	}
}