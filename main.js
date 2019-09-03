let bodyElement = document.querySelector("body");
let searchBtn = document.querySelector("input[type=submit]");
searchBtn.addEventListener("click", getWeather);

function night() {
    bodyElement.classList.remove("day");
    bodyElement.classList.add("night");
}

function day() {
    bodyElement.classList.remove("night");
    bodyElement.classList.add("day");
}

if (new Date().getHours() >= 6 && new Date().getHours() <= 20) {
    day();
} else {
    night();
}

// document.querySelector('input').addEventListener('', getWeather) this was workimg on every key pressed
function getWeather(e) {
    let cityName = document.querySelector('input').value;
    e.preventDefault()
        // Make a request for a user with a given ID
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=12e844e9b297084077b1b9af18b8babb`)
        .then(function(response) {
            // handle success

            console.log(response);
            let mainHeading = document.querySelector('h1').innerHTML = `Current Weather`;
            document.querySelector('#temp').innerHTML = `${Math.floor(response.data.main.temp - 273.15)}°C `;
            document.querySelector('#city').innerHTML = `${response.data.name}, ${response.data.sys.country}`;
            if (response.data.weather[0].main === "Clouds" && response.data.weather[0].description === "overcast clouds") {
                document.querySelector('#weather').innerHTML = `<img class="outsource" src="./icon/Overcast.png">`;
                document.querySelector('#main').innerHTML = (response.data.weather[0].description);
            } else if (response.data.weather[0].main === "Clouds") {
                document.querySelector('#weather').innerHTML = `<img class="outsource" src="./icon/iconfinder_weather-2_1214004.svg">`;
                document.querySelector('#main').innerHTML = (response.data.weather[0].description);
            } else if (response.data.weather[0].main === "Rain") {
                document.querySelector('#weather').innerHTML = `<img class="outsource" src="./icon/rain.png">`;
                document.querySelector('#main').innerHTML = (response.data.weather[0].description);
            } else if (response.data.weather[0].main == "Clear") {
                document.querySelector('#weather').innerHTML = `<img class="outsource" src="./icon/Sunny.png">`;
                document.querySelector('#main').innerHTML = (response.data.weather[0].description);
            } else if (response.data.weather[0].main == "Fog" || response.data.weather[0].main == "Mist" || response.data.weather[0].main == "Smoke") {
                document.querySelector('#weather').innerHTML = `<img class="outsource" src="./icon/Fog.png">`;
                document.querySelector('#main').innerHTML = (response.data.weather[0].description);
            } else if (response.data.weather[0].main == "Haze") {
                document.querySelector('#weather').innerHTML = `<img class="outsource" src="./icon/hazy.png">`;
                document.querySelector('#main').innerHTML = (response.data.weather[0].description);
            } else if (response.data.weather[0].main == "Thunderstorm") {
                document.querySelector('#weather').innerHTML = `<img class="outsource"  src="./icon/storm.svg">`;
                document.querySelector('#main').innerHTML = (response.data.weather[0].description);
            } else if (response.data.weather[0].main == "Drizzle") {
                document.querySelector('#weather').innerHTML = `<img class="outsource" src="./icon/drizzle.png">`;
                document.querySelector('#main').innerHTML = (response.data.weather[0].description)
            } else if (response.data.weather[0].main == "Sleet") {
                document.querySelector('#weather').innerHTML = `<img class="outsource" src="./icon/Sleet.png">`;
                document.querySelector('#main').innerHTML = (response.data.weather[0].description)
            } else if (response.data.weather[0].main == "Hail") {
                document.querySelector('#weather').innerHTML = `<img class="outsource" src="./icon/Hail_Heavy.png">`;
                document.querySelector('#main').innerHTML = (response.data.weather[0].description)
            } else if (response.data.weather[0].main == "Snow") {
                document.querySelector('#weather').innerHTML = `<img class="outsource" src="./icon/snow.png">`;
                document.querySelector('#main').innerHTML = (response.data.weather[0].description)
            }
            document.querySelector('#humidity').innerHTML = ` Humidity :  ${response.data.main.humidity}`;

            document.querySelector('#windspeed').innerHTML = `Windspeed : ${response.data.wind.speed} /mps`;


        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .finally(function() {
            // always executed
        });

    return false;
}