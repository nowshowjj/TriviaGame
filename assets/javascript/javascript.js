
$("input:checkbox").on('click', function() {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});



var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 5;

     function myClock() {
       document.getElementById("demo").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Reached zero");
       }
     }
   }

var hideDivTwo;
funtion hideTwo () {
if (c === 0)
  $("#results").removeClass("hidden2");
};
 




   




