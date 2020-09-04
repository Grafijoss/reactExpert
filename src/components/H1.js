import React, { Component } from 'react';

const style = {
	title: {
		fontSize: '2em'
	}
}

export default class H1 extends Component {

	render() {
		// const { children, pruebaClick } = this.props;
		return (
			// <h1 onClick={pruebaClick}>{children}</h1>
			<h1 style={style.title} {...this.props} />
		)
	}

}