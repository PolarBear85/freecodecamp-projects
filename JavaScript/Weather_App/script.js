//Document element declarations
const locationSelect = document.querySelector("#target")
const getWeatherBtn = document.querySelector("#get-weather-btn")
const weatherImg = document.querySelector("#weather-icon")
const mainTemp = document.querySelector("#main-temperature")
const feelsLike = document.querySelector("#feels-like")
const humidity = document.querySelector("#humidity")
const wind = document.querySelector("#wind")
const windGust = document.querySelector("#wind-gust")
const weatherMain = document.querySelector("#weather-main")
const locationDisplay = document.querySelector("#location")


//Event listeners
getWeatherBtn.addEventListener("click", () => {
    console.log("button clicked")
    showWeather()
})





//functions
const getWeather = async location => fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${location}`)
    .then(response=>response.json())
    .catch(error=> {
        console.error("An error occured: ", error)
        throw error
    })


async function showWeather() {
    console.log("showWeather triggered")
    const weatherData = locationSelect.value == "" ? "No City Selected" : await getWeather(locationSelect.value)
    console.log(weatherData)
    if (weatherData === undefined) {
        console.error()
    }

    console.log(weatherData.base)
    console.log(weatherData.name)

}





