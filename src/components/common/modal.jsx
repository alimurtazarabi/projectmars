import React, { useState, useEffect } from 'react';
import { number } from 'yup';



const Modal = ({ data, onSubmit, isModalOpen, closeModal }) => {
// Declare the schema
const schema =  number().required().positive().integer().min(data.budget_spent)
	
	const [input, setInput] = useState(data.budget);
	const [isValid, setIsValid] = useState(true)

	useEffect(() => {
		schema.isValid(input)
			.then((isValid) => setIsValid(isValid))
	}, [input])


	const handleChange = event => {
 		setInput(event.currentTarget.value);
	}

	return (
		<div className="backdrop">
			<div className="card border-primary mb-3">
			  <div className="card-header">{ data.name }</div>
			  <div className="card-body">
			    <form onSubmit={(e, id) => onSubmit(e, data.id)}>
		    		<div className="form-group">
					  <input 
					  	type="text"
					  	name="validateIt" 
					  	className="form-control"
					  	value={input} 
					  	onChange={event => handleChange(event)} 
					  />
					</div>
					<button 
						disabled={!isValid}
						type="submit"
						className="btn btn-secondary">
						update
					</button>
					<button 
						type="submit"
						onClick={(e) => closeModal()}
						className="btn btn-danger mx-2">
						close
					</button>
			    </form>
			  </div>
			</div>
		</div>
	)
}

export default Modal;