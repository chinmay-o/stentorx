

// setInterval(function(){
//
//   $("#reVideo1").load(location.href + " #reVideo1");
//   $("#reVideo2").load(location.href + " #reVideo2");
//   $("#reVideo3").load(location.href + " #reVideo3");
//   console.log("Refreshing");
// }, 3000);
//
// var gif = [];
//
// var data = null
// var url = "https://sheets.googleapis.com/v4/spreadsheets/1uqPhd8Xl7fYZc7FZT5sU7QDRBd6Gf2Dp-JqZVj4-nvI/values/Sheet1!A1:F5?majorDimension=ROWS&valueRenderOption=FORMULA&key="
// var apiKey = "AIzaSyBpaORBU9bCcAMmAbawXlxTpXr1LuAGjWw";
//
//
// fetch(url + apiKey).then((response) => response.json()).then((values) => {
//   data = values;
//
//   for (var i = 0; i <= data.values.length; i++) {
//
//     gif.push(getContentUrl(data.values[0][i]));
//   }
// });
//
// document.getElementById("gdrivePull").innerHTML += '<video id="reVideo1" class="thumb" src="'+ gif[1] +'" width="480" height="360" autoplay loop muted></video>';

// setInterval(function() {
//
//   console.log(seconds);
//   $( "#works" ).load(window.location.href + " #works" );
// }, 10000);
