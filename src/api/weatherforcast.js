// Asynchronous function to fetch the weather forecast for a given location
export async function fetchWeatherForecast(location) {
  // Sending a GET request to the OpenWeatherMap API to fetch forecast data for the specified location
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8d5ba03d1366f8056e56b7c7548726e7&units=metric`
  );
  if (!response.ok) throw new Error("Failed to fetch weather data.");
  // Parsing the response body as JSON

  const data = await response.json();
  const forecastData = data.list.map((item) => ({
    date: item.dt_txt.split(" ")[0],
    temp: item.main.temp.toFixed(1),
  }));
  // Grouping the data by date and calculating the average temperature for each date

  const groupedData = forecastData.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = { date: item.date, temp: 0, count: 0 };
    }
    // Add the temperature to the date's total and increase the count of temperature readings

    acc[item.date].temp += parseFloat(item.temp);
    acc[item.date].count += 1;
    return acc;
  }, {});

  return Object.values(groupedData).map((day) => ({
    date: day.date,
    // Calculating the average temperature for the day by dividing the total by the count

    temp: (day.temp / day.count).toFixed(1),
  }));
}
