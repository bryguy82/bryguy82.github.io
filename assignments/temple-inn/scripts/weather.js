
var weather = new XMLHttpRequest();
var url = "//data/templedata.json";

weather.open("GET", url);
weather.responseType = 'json';
weather.send();
weather.onload = function() {
    var data = JSON.parse(weather.response);
    console.log(data);


}