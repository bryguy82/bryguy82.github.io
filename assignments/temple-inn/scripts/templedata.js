
var tucson = document.querySelector(".temple-tucson");
var phoenix = document.querySelector(".temple-phoenix");
var gilbert = document.querySelector(".temple-gilbert");
var gila = document.querySelector(".temple-gila");


var temples = new XMLHttpRequest();
var url = "https://bryguy82.github.io/data/templedata.json";

temples.open("GET", url);

temples.responseType = "json";
temples.send();
temples.onload = function() {
    var data = temples.response;
    //console.log(data);

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

            if (templeData[i].name == "Tucson") {
                tucson.appendChild(ul);
            } else if (templeData[i].name == "Phoenix") {
                phoenix.appendChild(ul);
            } else if (templeData[i].name == "Gilbert") {
                gilbert.appendChild(ul);
            } else if (templeData[i].name == "Gila Valley") {
                gila.appendChild(ul);
            }
        }
    }
}