const apikey = "ff9be7c262ff14dfa88abd2ce1c2a0f0";
const weathericon = document.querySelector(".weather-icon");
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".ws").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";

    const weather = data.weather[0].main;
    switch(weather){
        case "Clouds": 
            weathericon.src = "images/clouds.png"; 
            break;
        case "Rain":
            weathericon.src = "images/rain.png";
            break;
        case "Clear":
            weathericon.src = "images/clear.png";
            break;
        case "Snow":
            weathericon.src = "images/snow.png";
            break;
        case "Drizzle":
            weathericon.src = "images/drizzle.png";
            break;
        case "Mist":
            weathericon.src = "images/mist.png";
            break;
        default:
            weathericon.src = "images/clouds.png"; 
    }

   
}



document.querySelector("button").addEventListener("click", () => {
    checkweather(document.querySelector("input").value);
});
