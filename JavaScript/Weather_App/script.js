//Document element declarations
const locationSelect = document.querySelector("#target")
const getWeatherBtn = document.querySelector("#get-weather-btn")
const weatherImg = document.querySelector("#weather-icon")
const mainTemp = document.querySelector("#main-temperature")
const feelsLike = document.querySelector("#feels-like")
const humidityDisp = document.querySelector("#humidity")
const windSpeed = document.querySelector("#wind")
const windGust = document.querySelector("#wind-gust")
const weatherMain = document.querySelector("#weather-main")
const locationDisplay = document.querySelector("#location")


//Event listeners
getWeatherBtn.addEventListener("click", () => {
    console.log("button clicked")
    showWeather()
})





//functions

async function getWeather(location) {
    try {
        const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${location}`)
        if (!response.ok) {
            throw new Error (`HTTP Error! status: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return undefined;
    }
}


async function showWeather() {
    console.log("showWeather triggered")
    const weatherData = locationSelect.value == "" ? "No City Selected" : await getWeather(locationSelect.value)
    console.log(weatherData)
    if (weatherData === undefined || weatherData === null || weatherData === "No City Selected") {
        console.error("Something went wrong, please try again later")
        alert("Something went wrong, please try again later")
        return
    }

    mainTemp.innerHTML= ""
    mainTemp.innerHTML = weatherData.main && weatherData.main.temp ? `${Number(weatherData.main.temp).toFixed(2)}&deg;C` : "N/A"
    feelsLike.innerHTML=""
    feelsLike.innerHTML = weatherData.main && weatherData.main.feels_like ? `${Number(weatherData.main.feels_like).toFixed(2)}&deg;C` : "N/A"
    humidityDisp.innerHTML=""
    humidityDisp.innerHTML = weatherData.main && weatherData.main.humidity ? `${weatherData.main.humidity} %` : "N/A"
    windGust.innerHTML =""  
    windGust.innerHTML = weatherData.wind && weatherData.wind.gust ? `${weatherData.wind.gust}` : "N/A"
    windSpeed.innerHTML = ""
    windSpeed.innerHTML = weatherData.wind && weatherData.wind.speed? `${weatherData.wind.speed} m/s` : "N/A"
    weatherMain.innerHTML =""
    weatherMain.innerHTML = weatherData.weather && weatherData.weather[0] && weatherData.weather[0].main ? `${weatherData.weather[0].main}` : "N/A"
    weatherImg.src =""
    weatherImg.src = weatherData.weather && weatherData.weather[0] && weatherData.weather[0].icon ? `${weatherData.weather[0].icon}` : "N/A"
    locationDisplay.innerHTML =""
    locationDisplay.innerHTML = weatherData.name ? `${weatherData.name}` : "N/A"

}
