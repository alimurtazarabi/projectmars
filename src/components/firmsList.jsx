import React, { Component, Fragment } from 'react';
import Table from './table';
import Modal from './common/modal';
import TaskOne from './taskOne';
import { getFirms } from '../services/fakeApiService';

class Firms extends Component {
	state = {
		firms: [],
		isModalOpen: false,
		modalItem: [],
	}

	getTheFirm = (id) => {
		const { firms } = this.state;
		const selectedFirm = firms.find(item => item.id === id);
		return selectedFirm;
	}

	handleSubmit = (e, id, input) => {
		e.preventDefault();
		const result = window.confirm('Please Confirm....!!!');
		if(!result) return;
		this.closeModal();
		this.doSubmit(id, input);
	}

	doSubmit = (id, input) => {
		const tempFirms = [ ...this.state.firms];
		// Method A - with this you dont have to use the getTheFirm function.
		const updatedFirmList = tempFirms.map(firm => firm.id === id ? { ...firm, budget: input }: firm);
		
		// Method B
		const index = tempFirms.indexOf(this.getTheFirm(id));
		const firm = tempFirms[index];
		const newFirmList = { firm, budget: input };

		// set State 
		this.setState({ firms: updatedFirmList });
	}

	openModal = (id) => {
		const selectedFirm = this.getTheFirm(id);
		this.setState({ modalItem: selectedFirm, isModalOpen: true });
	}

	closeModal = () => {
		this.setState({ isModalOpen: false, modalItem: ''});
	}

	async componentDidMount() {
		const { firms } = await getFirms();
		this.setState({ firms: firms });
	}

	render() {
		const { firms, modalItem, isModalOpen } = this.state;
		return (
			<Fragment>
				<Table
					data={firms} 
					openModal={this.openModal}
				/>
				{
					isModalOpen && 
						<Modal 
							data={modalItem} 
							onSubmit={this.handleSubmit}
							// isModalOpen={isModalOpen}
							closeModal={this.closeModal}
						/>
				}
				<TaskOne />
			</Fragment>
		);
	}
}

export default Firms;
