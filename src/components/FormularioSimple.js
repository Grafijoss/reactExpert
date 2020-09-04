import React, { Component } from 'react';

import P from './P';

const validate = values => {
	const errors = {}
	console.log(values)
	if (!values.name) {
		errors.name = 'Mandatory field';
	}
	if (!values.lastname) {
		errors.lastname = 'Mandatory field';
	}
	return errors
}

class FormularioSimple extends Component {

	state = {
		errors: {}
	}

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit = e => {
		e.preventDefault();

		const { errors, ...withOutErrors } = this.state; // We are assigning all the properties except errors to the withOutErrors constant
		console.log('Prevent', withOutErrors);
		const result = validate(withOutErrors);
		this.setState({ errors: result })
		if (!Object.keys(result).length) {
			e.target.reset();
			console.log('Valid form');
		}
	}

	render() {

		const { errors } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<input name="name" onChange={this.handleChange} />
				{errors.name && <P>{errors.name}</P>}
				<input name="lastname" onChange={this.handleChange} />
				{errors.lastname && <P>{errors.lastname}</P>}
				<input type="submit" value="Enviar" />
			</form>
		)
	}
}

export default FormularioSimple;