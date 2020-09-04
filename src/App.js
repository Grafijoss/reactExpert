import React, { Component } from 'react';
import FormularioSimple from './components/FormularioSimple'
import './App.css';

class App extends Component {
	constructor() {
		super()
		// GET, POST, PUT, PATCH, DELETE
		// GET
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(x => x.json())
			.then(x => console.log(x))
		// POST
		fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'aplication/json'
			},
			body: JSON.stringify({
				name: 'Joss',
				userName: 'Grafijoss'
			})
		})
			.then(x => x.json())
			.then(x => console.log(x))
	}
	render() {
		return (
			<div className="App" >
				<FormularioSimple />
			</div>
		);
	}
}

export default App;
