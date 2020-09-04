import React, { Component } from 'react';
import logo from '../logo.svg';

import H1 from './H1';


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
	header: ({ backgroundColor }) => ({
		backgroundColor,
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

	state = {
		backgroundColor: 'red'
	}

	handleClick = () => {
		const { miau, handleClick } = this.props;
		handleClick(miau);
	}
	pruebaClick = () => {
		console.log('buenisimo');
	}

	changeColor = () => {
		this.setState({
			backgroundColor: '#555'
		})
	}

	render() {
		const { miau, handleClick } = this.props;
		const { backgroundColor } = this.state;


		return (
			<header
				className="App-header"
				// style={styles.header}
				style={styles.header({ backgroundColor })}
			>
				<img
					src={logo} className="App-logo" alt="logo" />
				<p onClick={this.handleClick}>
					{miau}
				</p>
				<H1 onClick={this.changeColor}>Ajaa</H1>
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