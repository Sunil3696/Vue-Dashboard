export async function fetchCryptoMarketData() {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
    );
    if (!response.ok) throw new Error("Failed to fetch cryptocurrency data.");
    const data = await response.json();
    return data; 
  }
  