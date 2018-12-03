

var sodaSprings = document.querySelector("div#town-events");

var eventSummary = new XMLHttpRequest();
var url = "https://byui-cit230.github.io/weather/data/towndata.json";

eventSummary.open("GET", url);
eventSummary.responseType = 'json';
eventSummary.send();
eventSummary.onload = function() {
    var eventInfo = eventSummary.response;
    //console.log(eventInfo);

    insertWeatherData(eventInfo);

    function insertWeatherData(object) {

        var idahoTowns = object.towns;

        for (var i = 0; i < idahoTowns.length; i++) {
            if ( idahoTowns[i].name == "Soda Springs" ){

                var eventList = document.createElement("ul");

                var idahoTownEvents = idahoTowns[i].events;
                for (var j = 0; j < idahoTownEvents.length; j++) {
                    var events = document.createElement("li");
                    events.textContent = idahoTownEvents[j];
                    eventList.appendChild(events);          
                }                  

                sodaSprings.appendChild(eventList);
            }
        }    
    }
} // removed https to work on Github
