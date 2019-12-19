export const getFormattedValue = (value) => 
			( value.toLocaleString('de-DE', 
				{
					style: 'currency',
					currency: 'EUR',
					minimumFractionDigits: 2 
				}
			));
export default getFormattedValue;