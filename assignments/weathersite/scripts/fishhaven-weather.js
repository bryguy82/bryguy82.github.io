
var weatherSource = new XMLHttpRequest();
var url = "https://api.openweathermap.org/data/2.5/weather?id=____&units=imperial";

weatherSource.open("GET", url, true);

weatherSource.send();

weatherSource.onload = function () {
    var weatherInfo = JSON.parse(weatherSource.responseText);
    //console.log(weatherInfo);

    document.getElementById("currently").innerHTML = weatherInfo.weather["0"].description;
    document.getElementById("cityTemp").innerHTML = weatherInfo.main.temp;
    document.getElementById("cityHumid").innerHTML = weatherInfo.main.humidity;
    document.getElementById("cityWindChill").innerHTML = weatherInfo.wind.speed;

    var weatherIcon = weatherInfo.weather["0"].icon;
    var iconLocation = "https://openweathermap.org/img/w/" + weatherIcon + ".png";

    document.getElementById("current-conditions").src = iconLocation;
    document.getElementById("cityMain").innerHTML = weatherInfo.weather["0"].main;

    windChill();

} // removed http to work on Github

/*
The formula to calculate the wind chill factor is:  
f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16  
where f is the wind chill factor in Fahrenheit, t is
the air temperature in Fahrenheit, and s is the wind speed in miles per hour.
*/
function windChill(){
    var f = 0;
    var t = parseFloat(document.getElementById("temperature").innerText);
    var s = parseFloat(document.getElementById("windSpeed").innerText);
    s =  Math.pow(s, 0.16);

    f = Math.round((35.74 + .6215 * t - 35.75 * s + 0.42745 * t * s) * 100)/100;

    document.getElementById("windChill").innerHTML = f;
}
