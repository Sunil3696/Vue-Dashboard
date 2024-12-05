export async function fetchCurrencyRates(base) {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${base}`
    );
    if (!response.ok) throw new Error("Failed to fetch currency rates.");
    const data = await response.json();
    return data.rates;
  }
  