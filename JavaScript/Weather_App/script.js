//Document element declarations
const locationSelect = document.querySelector("#target")
const getWeatherBtn = document.querySelector("#get-weather-btn")


getWeatherBtn.addEventListener("click", () => {
    console.log("click")
    if (locationSelect.value != "") {
        return weatherData(locationSelect.value)
    } else {
        console.log("no city")
        return
    }
    
})





//functions

const weatherData = location => fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${location}`)
    .then(response=>response.json())
    .then(data => console.log(data))

