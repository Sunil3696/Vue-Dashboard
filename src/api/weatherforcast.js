export async function fetchWeatherForecast(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=8d5ba03d1366f8056e56b7c7548726e7&units=metric`);
    if (!response.ok) throw new Error("Failed to fetch weather data.");
    
    const data = await response.json();
    const forecastData = data.list.map(item => ({
      date: item.dt_txt.split(' ')[0],
      temp: item.main.temp.toFixed(1)  
    }));
    
    const groupedData = forecastData.reduce((acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = { date: item.date, temp: 0, count: 0 };
      }
      acc[item.date].temp += parseFloat(item.temp);
      acc[item.date].count += 1;
      return acc;
    }, {});
  
    return Object.values(groupedData).map(day => ({
      date: day.date,
      temp: (day.temp / day.count).toFixed(1) 
    }));
  }
  