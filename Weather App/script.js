"use strict";

//variables for Input field and button
const searchButton = document.getElementById("search");
const inputField = document.getElementById("input");

//fetch Data from open Weather API
searchButton.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=7a450d40c28899187bb835f5de63e594`
  )
    .then((response) => response.json())
    .then((data) => {
      // Destructure the returned data
      const { name, main, weather } = data;

      // Get the temperature, weather condition and humidity
      const temperature = Math.floor(main.temp - 273.15);
      const condition = weather[0].description;
      const humidity = main.humidity;

      // Get the wind speed and direction
      const windSpeed = data.wind.speed;
      const windDegree = data.wind.deg;

      // Update the city name
      document.querySelector(".city-name").innerHTML = `Weather in ${name}`;

      // Update the temperature
      document.querySelector(".temperature").innerHTML = `${temperature}℃`;

      // Update the weather condition
      document.querySelector(".description").innerHTML = condition;

      // Update the humidity
      document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;

      // Update the wind speed and direction
      document.querySelector(".wind").innerHTML = `Windspeed ${windSpeed}km/h`;
    })
    .catch((error) => {
      console.error(error);
    });
});
