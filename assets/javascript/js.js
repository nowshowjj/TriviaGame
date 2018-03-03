
console.log("Is this working?")

var win = 0;
var loss = 0;




//Why doesn't this work anymore? Check box funtion so only one box can be checked at one time. It worked and then it stopped working.
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
     var c = 15;

     function myClock() {
       document.getElementById("timer").innerHTML = --c;
       $("#p1").removeClass("hidden")
       $("#start").addClass("hidden")
       if (c === 0) {
         clearInterval(myTimer);
              var unhideDivTwo;
        if (c === 0) {
          $("#results").removeClass("hidden");
          $("#p1").addClass("hidden");
        }

      }
     }
   };

function Results() {
  if ($("input[name=question0]:checked").val() == "correct") {
    win++;
  } 
  else {
    loss++;
  }

  if ($("input[name=question1]:checked").val() == "correct") {
    win++;
  } 
  else {
    loss++;
  }

  if ($("input[name=question2]:checked").val() == "correct") {
    win++;
  } 
  else {
    loss++;
  }

  if ($("input[name=question3]:checked").val() == "correct") {
    win++;
  } 
  else {
    loss++;
  }

  if ($("input[name=question4]:checked").val() == "correct") {
    win++;
  } 
  else {
    loss++;
  }

  $("#ans1").text("<p>Correct Answers: " + win + "</p>");
  $("#ans2").text("<p>Incorrect Answers: " + loss + "</p>");
  $("#ans3").text("<p>Unanswered: " + unanswered + "</p>");

};




   




