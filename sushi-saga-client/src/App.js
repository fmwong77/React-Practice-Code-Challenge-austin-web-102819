import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
	state = { sushis: [], counter: 0, remainingMoney: 100, selectedSushi: [] };

	handleMoreSushi = () => {
		this.setState({ counter: this.state.counter + 4 });
	};

	handleSelectedSushi = (sushi) => {
		if (this.state.remainingMoney - sushi.price >= 0) {
			if (this.state.selectedSushi.some((s) => s.id === sushi.id)) {
				console.log('found');
			} else {
				this.setState({
					selectedSushi: [...this.state.selectedSushi, sushi],
					remainingMoney: this.state.remainingMoney - sushi.price
				});
			}
		}
	};

	componentDidMount() {
		fetch(API)
			.then((response) => response.json())
			.then((data) => this.setState({ sushis: data }));
	}

	render() {
		return (
			<div className="app">
				<SushiContainer
					sushis={this.state.sushis}
					counter={this.state.counter}
					handleMoreSushi={this.handleMoreSushi}
					selectedSushi={this.state.selectedSushi}
					handleSelectedSushi={this.handleSelectedSushi}
				/>
				<Table
					remainingMoney={this.state.remainingMoney}
					selectedSushi={this.state.selectedSushi}
				/>
			</div>
		);
	}
}

export default App;
