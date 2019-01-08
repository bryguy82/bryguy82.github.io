/*
The formula to calculate the wind chill factor is:  
f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16  
where f is the wind chill factor in Fahrenheit, t is
the air temperature in Fahrenheit, and s is the wind speed in miles per hour.
*/

var f = 0;
var t = parseFloat(document.getElementById("temperature").innerText);
var s = parseFloat(document.getElementById("windSpeed").innerText);
s =  Math.pow(s, 0.16);

f = Math.round((35.74 + .6215 * t - 35.75 * s + 0.42745 * t * s) * 100)/100;

document.getElementById("windChill").innerHTML = f;