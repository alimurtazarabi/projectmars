import React, { Component } from 'react';

class Modal extends Component {
	state = {
		value: ''
	}

	handleChange = e => {
		this.setState({ value: e.currentTarget.value });
	}

	render() {
		const { data, onSubmit, openModal, closeModal } = this.props;
		const { budget, name } = data;

		if(!openModal) return null;
		return (
			<div className="card text-white bg-primary mb-3">
			  <div className="card-header">{ name }</div>
			  <div className="card-body">
			    <form onSubmit={(e) => onSubmit(e)}>
		    		<div className="form-group">
					  <input 
					  	type="text" 
					  	className="form-control"
					  	value={this.state.value} 
					  	onChange={this.handleChange} 
					  />
					</div>
					<button 
						type="submit"
						className="btn btn-secondary">
						update
					</button>
					<button 
						type="button"
						onClick={(e) => closeModal()}
						className="btn btn-danger mx-2">
						close
					</button>
			    </form>
			  </div>
			</div>
		);
	}
}

export default Modal;


// const Modal = ({ data, onSubmit, openModal, closeModal }) => {
// 	const budget = data.budget;
// 	const [input, setInput] = useState(budget);

// 	if(!openModal) return null;

// 	return (
// 		<div className="card text-white bg-primary mb-3">
// 		  <div className="card-header">{ data.name }</div>
// 		  <div className="card-body">
// 		    <form onSubmit={(e) => onSubmit(e)}>
// 	    		<div className="form-group">
// 				  <input 
// 				  	type="text" 
// 				  	className="form-control"
// 				  	value={input} 
// 				  	onChange={(e) => setInput(e.target.value)} 
// 				  />
// 				</div>
// 				<button 
// 					type="submit"
// 					className="btn btn-secondary">
// 					update
// 				</button>
// 				<button 
// 					type="button"
// 					onClick={(e) => closeModal()}
// 					className="btn btn-danger mx-2">
// 					close
// 				</button>
// 		    </form>
// 		  </div>
// 		</div>
// 	)
// }

// export default Modal;