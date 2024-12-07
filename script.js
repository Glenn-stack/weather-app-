const apiKey = 'YOUR_API_KEY'; 

document.getElementById('fetchWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (response.ok) {
        const data = await response.json();
        displayWeather(data);
    } else {
        alert('City not found. Please try again.');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}" class="weather-icon" />
        <p>Temperature: ${temperature} °C</p>
        <p>Condition: ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
    `;
}