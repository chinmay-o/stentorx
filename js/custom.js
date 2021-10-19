

setInterval(function(){

  $("#reVideo1").load(location.href + " #reVideo1");
  $("#reVideo2").load(location.href + " #reVideo2");
  $("#reVideo3").load(location.href + " #reVideo3");
  console.log("Refreshing");
}, 3000);
