async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = 'e7a151baca422c9fda4fd7d671412812'; // Use your actual API key
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

    const temp = data.main.temp;

    // Funny Telugu food suggestion
    let foodSuggestion = "";
    if (temp > 35) {
      foodSuggestion = "వేడిని తగ్గించాలంటే వడపేప్ వేసుకో... బొప్పాయి జ్యూస్ గుటుక్కుమంతా వేయి! 🍉🧊";
    } else if (temp > 25) {
      foodSuggestion = "మితిమీరిన వేడి కాదు... పుచ్చకాయ, చిల్డ్ పెప్సీ తో చల్లబర్చుకుందాం! 🍹";
    } else if (temp > 15) {
      foodSuggestion = "వాతావరణం బాగుంది... బజ్జీలు, కాఫీ ఆర్డర్ వేసే టైం వచ్చింది! ☕🌯";
    } else if (temp > 5) {
      foodSuggestion = "ఊపిరి తీస్తే పాపం బయటకు పొగ వస్తుంది... వేడి మిర్చి బజ్జీ + జిన్జర్ టీ పెట్టుకో! 🍲☕";
    } else {
      foodSuggestion = "ఈ సీకరుగా ఉన్న వాతావరణంలో ఒక్క బ్రియానీ ప్లేట్ వల్లే జీవితం! 🍛🔥";
    }

    // Display everything
    weatherDiv.innerHTML = `
      <div class="emoji">${emoji}</div>
      <div><strong>${data.name}</strong></div>
      <div>🌡️ ${temp}°C</div>
      <div>💧 Humidity: ${data.main.humidity}%</div>
      <div>🌬️ Wind: ${data.wind.speed} m/s</div>
      <div>Condition: ${data.weather[0].description}</div>
      <div style="margin-top: 15px; font-weight: bold; color: #d62828;">🍽️ ${foodSuggestion}</div>
    `;
  } else {
    weatherDiv.innerHTML = `<div style="color: red;">❌ నగరం కనబడలేదు. సరిగా టైప్ చెయ్యండి!</div>`;
  }
}
