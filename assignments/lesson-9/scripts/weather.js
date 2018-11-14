
var weatherSource = new XMLHttpRequest();
var url = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial";

weatherSource.open("GET", url, true);

weatherSource.send();

weatherSource.onload = function() {
    var weatherInfo = JSON.parse(weatherSource.responseText);
    console.log(weatherInfo);

    document.getElementById("cityName").innerHTML = weatherInfo.name;
    document.getElementById("currently").innerHTML = weatherInfo.weather["0"].description;
    document.getElementById("cityTemp").innerHTML = weatherInfo.main.temp;
    document.getElementById("cityHumid").innerHTML = weatherInfo.main.humidity;
    document.getElementById("cityWindChill").innerHTML = weatherInfo.wind.speed;

    var weatherIcon = weatherInfo.weather["0"].icon;
    var iconLocation = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

    document.getElementById("current-conditions").src = iconLocation;
    document.getElementById("cityMain").innerHTML = weatherInfo.weather["0"].main;

}
