import React, { Component } from 'react';

export default class Text extends Component {

	render() {
		// const { children, pruebaClick } = this.props;
		return (
			// <h1 onClick={pruebaClick}>{children}</h1>
			<h1 {...this.props} />
		)
	}

}