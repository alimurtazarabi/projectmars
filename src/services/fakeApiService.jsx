const firms = [
	{
        "id": 1,
        "name": "Martian Firma",
        "budget": 1000000,
        "budget_spent": 45000,
        "date_of_first_purchase": "2020-03-01"
    },
    {
        "id": 2,
        "name": "Solar Firma",
        "budget": 2000000,
        "budget_spent": 55000,
        "date_of_first_purchase": "2020-02-01"
    },
    {
        "id": 3,
        "name": "Lunar Firma",
        "budget": 13000000,
        "budget_spent": 65000,
        "date_of_first_purchase": "2020-03-02"
    },
    {
        "id": 4,
        "name": "Galaxy Firma",
        "budget": 7000000,
        "budget_spent": 75000,
        "date_of_first_purchase": "2020-04-03"
    },
    {
        "id": 5,
        "name": "Earth Internation Firma",
        "budget": 8000000,
        "budget_spent": 85000,
        "date_of_first_purchase": "2020-03-07"
    }
];

export function getFirms() {
  return { firms: firms };
}

