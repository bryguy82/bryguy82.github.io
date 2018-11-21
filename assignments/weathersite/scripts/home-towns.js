

var fishHaven = document.querySelector("div#fish-haven");
var preston = document.querySelector("div#preston");
var sodaSprings = document.querySelector("div#soda-springs");

var weatherSummary = new XMLHttpRequest();
var url = "//byui-cit230.github.io/weather/data/towndata.json";

weatherSummary.open("GET", url);
weatherSummary.responseType = 'json';
weatherSummary.send();
weatherSummary.onload = function() {
    var summaryInfo = weatherSummary.response;
    console.log(summaryInfo);

    insertWeatherData(summaryInfo);

    function insertWeatherData(object) {

        var idahoTowns = object.towns;

        for (var i = 0; i < idahoTowns.length; i++) {
            if (idahoTowns[i].name == "Fish Haven" || idahoTowns[i].name == "Preston" || idahoTowns[i].name == "Soda Springs"){
                var pInfo = document.createElement("p");
                var pInfo1 = document.createElement("p");
                var pInfo2 = document.createElement("p");
                var pInfo3 = document.createElement("p");
                var pInfo4 = document.createElement("p");
                var pInfo5 = document.createElement("p");
                var eventList = document.createElement("ul");
                
                pInfo.textContent = idahoTowns[i].name; 
                pInfo1.textContent = "Motto: " + idahoTowns[i].motto;
                pInfo2.textContent = "Year Founded: " + idahoTowns[i].yearFounded;
                pInfo3.textContent = "Population: " + idahoTowns[i].currentPopulation;
                pInfo4.textContent = "Annual Rainfall: " + idahoTowns[i].averageRainfall + " inches";
                pInfo5.textContent = "Events: ";

                var idahoTownEvents = idahoTowns[i].events;
                for (var j = 0; j < idahoTownEvents.length; j++) {
                    var events = document.createElement("li");
                    events.textContent = idahoTownEvents[j];
                    eventList.appendChild(events);                
                }
                  
                switch(idahoTowns[i].name) {
                    case "Fish Haven":
                        fishHaven.appendChild(pInfo);
                        fishHaven.appendChild(pInfo1);
                        fishHaven.appendChild(pInfo2);
                        fishHaven.appendChild(pInfo3);
                        fishHaven.appendChild(pInfo4);
                        fishHaven.appendChild(pInfo5);
                        fishHaven.appendChild(eventList);
                        break;
                    case "Preston":
                        preston.appendChild(pInfo);
                        preston.appendChild(pInfo1);
                        preston.appendChild(pInfo2);
                        preston.appendChild(pInfo3);
                        preston.appendChild(pInfo4);
                        preston.appendChild(pInfo5);
                        preston.appendChild(eventList);
                        break;
                    case "Soda Springs":
                        sodaSprings.appendChild(pInfo);
                        sodaSprings.appendChild(pInfo1);
                        sodaSprings.appendChild(pInfo2);
                        sodaSprings.appendChild(pInfo3);
                        sodaSprings.appendChild(pInfo4);
                        sodaSprings.appendChild(pInfo5);
                        sodaSprings.appendChild(eventList);
                        break;
                }    

            }
        }    
    }
} // removed https to work on Github
