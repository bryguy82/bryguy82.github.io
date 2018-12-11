
var Wtucson = document.querySelector(".weather-tucson");
var Wphoenix = document.querySelector(".weather-phoenix");
var Wgilbert = document.querySelector(".weather-gilbert");
var Wgila = document.querySelector(".weather-gila");

var weatherTuc = new XMLHttpRequest();
var weatherPho = new XMLHttpRequest();
var weatherGil = new XMLHttpRequest();
var weatherGila = new XMLHttpRequest();

var urlTucson = "//api.openweathermap.org/data/2.5/weather?id=5318313&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial";
var urlPhoenix = "//api.openweathermap.org/data/2.5/weather?id=5296409&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial";
var urlGilbert = "//api.openweathermap.org/data/2.5/weather?id=5771312&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial";
var urlGila = "//api.openweathermap.org/data/2.5/weather?id=5317170&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial";

weatherTuc.open("GET", urlTucson, true);
weatherPho.open("GET", urlPhoenix, true);
weatherGil.open("GET", urlGilbert, true);
weatherGila.open("GET", urlGila, true);

weatherTuc.send();
weatherPho.send();
weatherGil.send();
weatherGila.send();

weatherTuc.onload = function () {
    var weatherInfo = JSON.parse(weatherTuc.responseText);

    var h4 = document.createElement("h4");
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");

    h4.textContent = "Current Weather and Temperature";
    li1.textContent = weatherInfo.weather["0"].description;
    li2.textContent = weatherInfo.main.temp + " F";
    ul.appendChild(li1);
    ul.appendChild(li2);

    Wtucson.appendChild(h4);
    Wtucson.appendChild(ul);
}
weatherPho.onload = function () {
    var weatherInfo = JSON.parse(weatherPho.responseText);

    var h4 = document.createElement("h4");
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");

    h4.textContent = "Current Weather and Temperature";
    li1.textContent = weatherInfo.weather["0"].description;
    li2.textContent = weatherInfo.main.temp + " F";
    ul.appendChild(li1);
    ul.appendChild(li2);

    Wphoenix.appendChild(h4);
    Wphoenix.appendChild(ul);
}
weatherGil.onload = function () {
    var weatherInfo = JSON.parse(weatherGil.responseText);

    var h4 = document.createElement("h4");
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");

    h4.textContent = "Current Weather and Temperature";
    li1.textContent = weatherInfo.weather["0"].description;
    li2.textContent = weatherInfo.main.temp + " F";
    ul.appendChild(li1);
    ul.appendChild(li2);

    Wgilbert.appendChild(h4);
    Wgilbert.appendChild(ul);
}
weatherGila.onload = function () {
    var weatherInfo = JSON.parse(weatherGila.responseText);

    var h4 = document.createElement("h4");
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");

    h4.textContent = "Current Weather and Temperature";
    li1.textContent = weatherInfo.weather["0"].description;
    li2.textContent = weatherInfo.main.temp + " F";
    ul.appendChild(li1);
    ul.appendChild(li2);

    Wgila.appendChild(h4);
    Wgila.appendChild(ul);
}