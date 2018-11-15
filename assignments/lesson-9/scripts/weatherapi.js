
var weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial", true);

weatherRequest.send();

weatherRequest.onload =  function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("current-city").innerHTML = weatherData.name;    
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;

    var weatherDescription = weatherData.weather["0"].description;
    var weatherIcon = weatherData.weather["0"].icon;
    var icon_location = "//openweathermap.org/img/w/" + weatherIcon + ".png";
    document.getElementById("weatherIcon").src = icon_location;
    document.getElementById("weatherDescription").innerHTML = weatherDescription;

} // removed http to work on Github