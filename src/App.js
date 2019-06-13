import React, { Component } from 'react';
import Header from './header/Header';
import './css/App.css';
import axios from 'axios';
import Router from './router/Router';

class App extends Component {
	async poke() {
		try {
			const res = await axios.get(
				'/institution/9a175661-f00d-4697-9b6e-f80bb4a06964'
			);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		return (
			<div className="root">
				<Header />
				<main className="main">
					<Router />
				</main>
			</div>
		);
	}
}

export default App;
