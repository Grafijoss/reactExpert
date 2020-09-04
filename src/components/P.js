import React, { Component } from 'react';

const style = {
	p: {
		fontSize: '1em'
	}
}

export default class P extends Component {

	render() {
		// const { children, pruebaClick } = this.props;
		return (
			// <h1 onClick={pruebaClick}>{children}</h1>
			<p style={style.p} {...this.props} />
		)
	}

}