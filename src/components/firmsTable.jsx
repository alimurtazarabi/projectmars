import React from 'react';

const FirmsTable = ({ data, openModal }) => {

	const remainingBudget = (budget, budget_spent) => ( budget - budget_spent );
	const getFormattedValue = (value) => {
		return ( 
			value
			.toLocaleString('de-DE', 
				{
					style: 'currency',
					currency: 'EUR',
					minimumFractionDigits: 2 
				}
			)
		);
	};

	return (
		<table className="table table-hover">
			<thead>
				<tr>
					<th scope="col">Company Name</th>
	      			<th scope="col">Budget</th>
	      			<th scope="col">Spent</th>
	      			<th scope="col">Date of First Purchase </th>
	      			<th> Remaining Budget </th>
      			</tr>
			</thead>
			<tbody>
				{
					data.map(firm => (
						<tr 
							className="table-active"
							key={firm.id}
							onClick={() => openModal(firm.id)}
						>
							<td>{firm.name}</td>
							<td>{ getFormattedValue(firm.budget)}</td>
							<td>{ getFormattedValue(firm.budget_spent)}</td>
							<td>{firm.date_of_first_purchase}</td>
							<td>{ getFormattedValue(remainingBudget(firm.budget, firm.budget_spent))}</td>
						
						</tr>
					))	
				}
			</tbody>
		</table>
	);
}

export default FirmsTable;