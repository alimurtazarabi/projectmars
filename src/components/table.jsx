import React from 'react';
import { getFormattedValue } from '../utils/formatevalue';
import {remainingBudget } from '../utils/remainingbudget';

const Table = ({ data, openModal }) => {

	return (
		<table className="table table-hover table-responsive-md">
			<thead>
				<tr>
					<th>Company Name</th>
	      			<th>Budget</th>
	      			<th>Spent</th>
	      			<th>Date of First Purchase </th>
	      			<th>Budget Remaining</th>
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

export default Table;
