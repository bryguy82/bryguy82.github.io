
var tucson = document.querySelector(".weather-tucson");
var phoenix = document.querySelector(".weather-phoenix");
var gilbert = document.querySelector(".weather-gilbert");
var gila = document.querySelector(".weather-gila");

var weatherTuc = new XMLHttpRequest();
var weatherPho = new XMLHttpRequest();
var weatherGil = new XMLHttpRequest();
var weatherGila = new XMLHttpRequest();

var urlTucson = "https://api.openweathermap.org/data/2.5/weather?id=5318313&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial";
var urlPhoenix = "https://api.openweathermap.org/data/2.5/weather?id=5296409&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial";
var urlGilbert = "https://api.openweathermap.org/data/2.5/weather?id=5771312&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial";
var urlGila = "https://api.openweathermap.org/data/2.5/weather?id=5317170&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial";

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

    tucson.appendChild(h4);
    tucson.appendChild(ul);
}
weatherPho.onload = function () {
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

    phoenix.appendChild(h4);
    phoenix.appendChild(ul);
}
weatherGil.onload = function () {
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

    gilbert.appendChild(h4);
    gilbert.appendChild(ul);
}
weatherGila.onload = function () {
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

    gila.appendChild(h4);
    gila.appendChild(ul);
}