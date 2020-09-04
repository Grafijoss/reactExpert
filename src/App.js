import React, { Component } from 'react'

import axios from 'axios'

import FormularioSimple from './components/FormularioSimple'
import './App.css';

class App extends Component {
	constructor() {
		super()
		// GET
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(({ data }) => console.log(data))
		// POST
		axios.post('https://jsonplaceholder.typicode.com/users', {
			name: 'Jose Montenegro',
			userName: 'Grafijoss'
		})
			.then(({ data }) => console.log(data))
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
