"use strict";

//check to make sure they js is talking to the html
// window.onload = function () {
//   alert("working");
// };
// console.log("Hello, World!");
// console.log(document.title);
// document.write(document.title);
/*  These work, so I may continue  */

// jquery
$(document).ready(function(){

  var api = "http://api.openweathermap.org/data/2.5/weather?lat=40.5755&lon=-111.6809&appid=f52141d316d5fe9ec4f644247441dfa9&units=imperial";

//Get JSON data into JS file
$.getJSON(api, function(data) {
  // console.log(data.coord.lon);
  // alert(data.coord.lon);
  //declare the variables
  var temp = data.main.temp.toFixed(1);
  var temp_min = data.main.temp_min.toFixed(0);
  var temp_max = data.main.temp_max.toFixed(0);
  var weatherType = data.weather[0].description;
  var windSpeed=data.wind.speed;
  var windDirection=data.wind.deg;
  var humidity = data.main.humidity;
  var pressure = data.main.pressure;

  //log to see if it works, then populate page
  // console.log("The current temperature is: ", temp + "°F");
  $("#temp").html("The current temperature is: " + temp + "°F<br>");

  // console.log("The low temperature today is:", data.main.temp_min.toFixed(0) + "°F");
  $("#temp_min").html("The low for today is expected to be " + temp_min + "°F");

  // console.log("The high temperature today is:", data.main.temp_max.toFixed(0) + "°F");
  $("#temp_max").html("The high for today is expected to be " + temp_max + "°F");

  // console.log("The current weather is: " + weatherType);
  $("#weatherType").html("It is currently " + weatherType);

  // console.log("The current wind speed is: ", data.wind.speed + "mph");
  // console.log("The current wind direction is:", data.wind.deg + "°");
  $("#windSpeed").html("The wind is currently blowing " + windSpeed + "mph with a heading of " + windDirection + "°.");

  // console.log("The current atmospheric pressure is:", data.main.pressure + "hpa");
  // console.log("The current humidity is:", data.main.humidity + "%");
  $("#humidity").html("The humidity is " + humidity + "%<br>" + "with atmospheric pressure of " + pressure + "hpa")
  // console.log("The country this is in is: ", data.sys.country);
  // console.log("The current weather description is: ", data.weather[0].main);
  // alert(data.main.temp_min);
  // document.write(data.main.temp_min);
  // alert("The current temperature is: ", data.main.temp)
});
});
// {
// var weatherType = data.weather.description;
// var city = data.name;
// var windSpeed = data.wind.id;
// $.getJSON(api, function(data)
    // console.log(city);
    // $('#city').html(city)
    // $('#weatherType').html(weatherType)

    // console.log('the wind speed is: ', windSpeed);
    // document.getElementById("data").innerHTML;
// console.log(city);
// function myFunction() {
//     var str = "Get the weather!";
//     var result = str.link("http://api.openweathermap.org/data/2.5/weather?lat=40.576084&lon=-111.681688&appid=f52141d316d5fe9ec4f644247441dfa9&units=imperial&mode=html");
//     document.getElementById("data").innerHTML = result;
// }
// });
