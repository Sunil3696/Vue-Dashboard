// Asynchronous function to fetch cryptocurrency market data from the CoinGecko API
export async function fetchCryptoMarketData() {
  // Making a GET request to the CoinGecko API to fetch market data

  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
  );
  if (!response.ok) throw new Error("Failed to fetch cryptocurrency data.");
  // Parse the JSON data from the response

  const data = await response.json();
  return data;
}
