function getWeather() {
  let city = document.getElementById("city").value;
  let apiKey = "532f3711d0348d7fe7d3679ac8aedff3";

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        document.getElementById("result").innerHTML = "City not found!";
        return;
      }

      document.getElementById("result").innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
    })
    .catch(() => {
      document.getElementById("result").innerHTML = "Error fetching data";
    });
}
