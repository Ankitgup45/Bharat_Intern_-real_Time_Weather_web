var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "6e027ef227ef3498c1f38823922e3cd9";

function convertion(val) {
    return (val - 273.15).toFixed(2); // Converting from Kelvin to Celsius
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var descrip = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var windspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${convertion(temperature)} °C</span>`;
        description.innerHTML = `Sky Condition: <span>${descrip}</span>`;
        wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
    })
    .catch(err => alert('You Entered A Wrong City Name '));
});
