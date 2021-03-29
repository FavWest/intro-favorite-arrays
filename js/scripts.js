$(document).ready(function(){
  $("#favorites").submit(function(event) {
    event.preventDefault();
    let array = [];
    array.push($("#input1").val());
    array.push($("#input2").val());
    array.push($("#input3").val());
    array.push($("#input4").val());
    console.log(array.toString());
    let newAr = [];
    newAr.push(array[1], array[0], array[2]);
    console.log(newAr);

    $(".favs").text(newAr.toString());
    $(".results").fadeIn();
  });
});
