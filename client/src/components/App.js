import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.PNG';

class App extends Component {
	state = {
		walletInfo: {}
	};

	//utilize react lifecycle method
	componentDidMount() {
		//allows to run request without having to block presentation to user
		fetch(`${document.location.origin}/api/wallet-info`)
		.then(response => response.json())
		.then(json => this.setState({ walletInfo: json }));
	}

	//returns jsx
	render() {
		const { address, balance } = this.state.walletInfo;

		return (
			<div className="App">
				<img className='logo' src={logo}></img>
				<br />
				<div>
					initiating LYMBASKOIN currency.
				</div>
				<br />
				<div>
					<Link to='/blocks'>Blocks</Link>
					<br />
					<Link to='/conduct-transaction'>Conduct a Transaction</Link>
					<br />
					<Link to='/transaction-pool'>Transaction Pool</Link>

				</div>
				<br />
				<div className="WalletInfo">
					<div>Address: {address}</div>
					<div>Balance: {balance}</div>
				</div>
			</div>

		);
	}
}

export default App;
