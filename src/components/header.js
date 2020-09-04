import React, { Component } from 'react';
import logo from '../logo.svg';

import Test from './test'


// const styles = {
// 	header: {
// 		backgroundColor: '#282c34',
// 		minHeight: '100vh',
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		fontSize: 'calc(10px + 2vmin)',
// 		color: 'white'
// 	}
// }

const styles = {
	header: () => ({
		backgroundColor: '#282c34',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 'calc(10px + 2vmin)',
		color: 'white'
	})
}

export default class Header extends Component {

	handleClick = () => {
		const { miau, handleClick } = this.props;
		handleClick(miau);
	}
	pruebaClick = () => {
		console.log('buenisimo');
	}

	render() {
		const { miau, handleClick } = this.props;


		return (
			<header
				className="App-header"
				// style={styles.header}
				style={styles.header()}
			>
				<img
					src={logo} className="App-logo" alt="logo" />
				<p onClick={this.handleClick}>
					{miau}
				</p>
				<Test onClick={this.pruebaClick}>Ajaa</Test>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        </a>
			</header>
		)
	}
}