// Selector variables
var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

// Your OpenWeatherMap API key
let apik = "3045dd712ffe6e702e3245525ac7fa38";

// Kelvin to Celsius conversion function
function convertion(val) {
    return (val - 273).toFixed(2);
}

// Fetch weather data on button click
btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descriptionText = data['weather'][0]['description'];
            var tempature = data['main']['temp'];
            var wndspd = data['wind']['speed'];

            city.innerHTML = `City: ${nameval}`;
            temp.innerHTML = `Temperature: ${convertion(tempature)} °C`;
            descrip.innerHTML = `Conditions: ${descriptionText}`;
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`;
        })
        .catch(err => alert('You entered wrong city name'));
});

