

setInterval(function(){

  $(".works").load(location.href + " .works");
  console.log("Refreshing");
}, 3000);
