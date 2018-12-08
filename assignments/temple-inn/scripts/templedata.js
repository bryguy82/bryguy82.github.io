
var tucson = document.querySelector("temple-tucson");
var phoenix = document.querySelector("temple-phoenix");
var gilbert = document.querySelector("temple-gilbert");
var gila = document.querySelector("temple-gila");


var temples = new XMLHttpRequest();
var url = "//data/templedata.json";

temples.open("GET", url);

temples.responseType = "json";
//temples.send();
temples.onload = function() {
    var data = JSON.parse(temples.responseText);
    console.log(data);

    getWeatherData(data);

    function getWeatherData(info) {

        var templeData = info.temples;

        for (i = 0; i < templeData.length; i++) {

            var ul = document.createElement("ul");

            var templeClosures = templeData[i].closures;
            for (j = 0; j < templeClosures.length; j++) {
                var dates = document.createElement("li");
                dates.textContent = templeClosures[j];
                ul.appendChild(dates);
            }

            if (templeData.name == "Tucson") {
                tucson.appendChild(ul);
            } else if (templeData.name == "Phoenix") {
                phoenix.appendChild(ul);
            } else if (templeData.name == "Gilbert") {
                gilbert.appendChild(ul);
            } else {
                gila.appendChild(ul);
            }
        }
    }
}