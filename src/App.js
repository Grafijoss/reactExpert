import React, { Component } from 'react';

import Header from './components/header';

import './App.css';

class App extends Component {
	handleClick = texto => {
		console.log(`Handle texto ${texto}`);
	}
	render() {
		return (
			<div className="App" >
				<Header
					handleClick={this.handleClick}
					miau={'Nienvenido miau'} />
			</div>
		);
	}
}

export default App;
