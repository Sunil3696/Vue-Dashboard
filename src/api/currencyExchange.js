// Asynchronous function to fetch currency exchange rates from the ExchangeRate-API
export async function fetchCurrencyRates(base) {
  // Making a GET request to the ExchangeRate-API to fetch currency rates for a given base currency
  const response = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${base}`
  );
  // If the response is not ok (status code is not in the range 200-299), throw an error

  if (!response.ok) throw new Error("Failed to fetch currency rates.");
  const data = await response.json();
  // Parse the JSON data from the response

  return data.rates;
}
