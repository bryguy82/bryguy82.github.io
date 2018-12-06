
var templeinfo = new XMLHttpRequest();
var file = "../data/templedata.json";

var closurelist = document.getElementById("ul#closures");//sdfsdfasdf

templeinfo.open("GET", file);
templeinfo.responseType = 'json';
templeinfo.send();
templeinfo.onload = function() {
    var closure = templeinfo.response;
    console.log(closure);

    getClosureInfo(closure);

    function getClosureInfo(object){

        var temples = object.temples;

        for (i = 0; i < temples.length; i++) {

            var schedule = temples[i].closures;

            for (j = 0; j < schedule.length; j++) {

                var list = document.createElement("li");
                list.textContent = schedule[j];
                closurelist.appendChild(list);
            }
        }
    }
}