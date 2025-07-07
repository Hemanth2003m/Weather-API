async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = 'e7a151baca422c9fda4fd7d671412812'; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  const weatherDiv = document.getElementById('weather');
  if (data.cod === 200) {
    const emojiMap = {
      Clear: "☀️",
      Clouds: "☁️",
      Rain: "🌧️",
      Thunderstorm: "⛈️",
      Snow: "❄️",
      Mist: "🌫️"
    };
    const weatherMain = data.weather[0].main;
    const emoji = emojiMap[weatherMain] || "🌡️";

    weatherDiv.innerHTML = `
      <div class="emoji">${emoji}</div>
      <div><strong>${data.name}</strong></div>
      <div>🌡️ ${data.main.temp}°C</div>
      <div>💧 Humidity: ${data.main.humidity}%</div>
      <div>🌬️ Wind: ${data.wind.speed} m/s</div>
      <div>Condition: ${data.weather[0].description}</div>
    `;
  } else {
    weatherDiv.innerHTML = `<div style="color: red;">City not found!</div>`;
  }
}
