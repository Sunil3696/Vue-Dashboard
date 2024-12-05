// Asynchronous function to fetch share market data from the Twelve Data API
export async function fetchShareMarketData() {
  // Making a GET request to the Twelve Data API to fetch stock data
  const response = await fetch("https://api.twelvedata.com/stocks");
  if (!response.ok) throw new Error("Failed to fetch share market data.");
  // Parse the JSON data from the response

  const data = await response.json();

  return data.data.slice(0, 10);
}
