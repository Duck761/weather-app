const apiKey = "ce74069a05af14cfb5fba6a999c4630a";
const input = document.querySelector("input");
const button = document.querySelector("button");

async function getCity(city) {
    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    let data = await response.json();
    lat = data.coord.lat;
    lon = data.coord.lon;
    response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    data = await response.json();
    return data;
}

function stripData(data) {
    delete data.current.clouds;
    delete data.current.rain;
    delete data.current.snow;
    delete data.current.wind;
    delete data.current.sys;
    delete data.current.dt;
    delete data.current.timezone;
    delete data.current.id;
    delete data.current.name;
    delete data.current.cod;
    delete data.current.base;
    delete data.current.dt;
    delete data.minutely;
    delete data.hourly;
    delete data.daily;

    return data;
}

function renderInformation(data) {
    const temperature = document.createElement("p");
    temperature.innerHTML = `Temperature: ${data.current.temp}C`;
    const humidity = document.createElement("p");
    humidity.innerHTML = `Humidity: ${data.current.humidity}`;
    // Display the country name
    const country = document.createElement("p");
    country.innerHTML = `Country: ${data.timezone}`;
    const weatherContainer = document.querySelector(".weather-container");
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(humidity);
    weatherContainer.appendChild(country);
    weatherContainer.style.padding = "10px";
}

button.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please enter a city");
        return;
    }
    // clear the weather container
    const weatherContainer = document.querySelector(".weather-container");
    weatherContainer.innerHTML = "";
    getCity(input.value).then((data) => {
        stripData(data);
        console.log(data);
        renderInformation(data);
    });
});
