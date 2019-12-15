import React, { Component, Fragment } from 'react';
import FirmsTable from './firmsTable';
import Modal from './common/modal';
import { getFirms } from '../services/fakeApiService';

class Firms extends Component {
	state = {
		firms: [],
		openModal: false,
		modalItem: []
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('hogya');
	}
	openModal = (id) => {
		const { firms } = this.state;
		const selectedFirm = firms.find(item => item.id === id);
		this.setState({ modalItem: selectedFirm, openModal: true });
	}
	closeModal = () => {
		this.setState({ openModal: false});
	}

	async componentDidMount() {
		const { firms } = await getFirms();
		this.setState({ firms: firms });
	}

	render() {
		const { firms, modalItem, openModal } = this.state;
		return (
			<Fragment>
				<FirmsTable 
					data={firms} 
					openModal={this.openModal}
				/>
				<Modal 
					data={modalItem} 
					onSubmit={this.handleSubmit}
					openModal={openModal}
					closeModal={this.closeModal}
				/>
			</Fragment>
		);
	}
}

export default Firms;
