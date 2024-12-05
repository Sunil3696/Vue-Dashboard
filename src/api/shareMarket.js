export async function fetchShareMarketData() {
    const response = await fetch("https://api.twelvedata.com/stocks");
    if (!response.ok) throw new Error("Failed to fetch share market data.");
    const data = await response.json();
  
    
    return data.data.slice(0, 10); 
  }
  