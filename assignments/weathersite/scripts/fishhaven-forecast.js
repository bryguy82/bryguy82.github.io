
var forecastRequest = new XMLHttpRequest();
var url = "https://api.openweathermap.org/data/2.5/forecast?id=5603240&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial"
forecastRequest.open("GET", url, true);

forecastRequest.send();

forecastRequest.onload =  function () {
    
    var forecastData = JSON.parse(forecastRequest.responseText);
    //console.log(forecastData);

    var forecastDay = [];
    var number = 0;
    for (var i = 0; i < forecastData.list.length -1; i++) {
        var day = (forecastData.list[i].dt_txt).includes("18:00:00");
        if ( day ) {
            forecastDay[number] = forecastData.list[i].main.temp;
            number++;
        }
    }

    document.getElementById("day1").innerHTML = forecastDay[0];
    document.getElementById("day2").innerHTML = forecastDay[1];
    document.getElementById("day3").innerHTML = forecastDay[2];
    document.getElementById("day4").innerHTML = forecastDay[3];
    document.getElementById("day5").innerHTML = forecastDay[4];
}