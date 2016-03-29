function Roll(number, total) {
  this.number = number;
  this.total = total;
}

var Rollbalance = 0
var Totalbalance = 0

var dieRoll = Math.floor(Math.random() * 6) +1;
  alert("You rolled a " + dieRoll);

var score = function(dieRoll) {
  if (dieRoll === 1)   {
     Rollbalance === 0;
  } if (2 <= dieRoll) {
    Rollbalance += dieRoll;
}
};

return Rollbalance;


$(document).ready(function() {
  $("#rollbutton").submit(function() {
    event.preventDefault();

    var Rollnumber = parseInt($("dieRoll").val());
    $("#score").text(Rollbalance);
  });
});
