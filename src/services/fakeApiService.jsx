const firms = [
	{
        "id": 1,
        "name": "Food Firma",
        "budget": 1000000,
        "budget_spent": 45000,
        "date_of_first_purchase": "2020-03-01"
    },
    {
        "id": 2,
        "name": "Automotive Firma",
        "budget": 2000000,
        "budget_spent": 55000,
        "date_of_first_purchase": "2020-02-01"
    },
    {
        "id": 3,
        "name": "Health Firma",
        "budget": 13000000,
        "budget_spent": 65000,
        "date_of_first_purchase": "2020-03-02"
    },
    {
        "id": 4,
        "name": "Entertainment Firma",
        "budget": 7000000,
        "budget_spent": 75000,
        "date_of_first_purchase": "2020-04-03"
    },
    {
        "id": 5,
        "name": "Digital Internation Firma",
        "budget": 8000000,
        "budget_spent": 85000,
        "date_of_first_purchase": "2020-03-07"
    },
    {
        "id": 6,
        "name": "Clothing Firma",
        "budget": 9000000,
        "budget_spent": 78000,
        "date_of_first_purchase": "2020-03-08"
    },
    {
        "id": 7,
        "name": "Clothing Firma",
        "budget": 9500000,
        "budget_spent": 63000,
        "date_of_first_purchase": "2020-03-21"
    }
];

export function getFirms() {
  return { firms: firms };
}

