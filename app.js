
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiPositionCounter = 1;
var passengers = 7;

body.onkeydown = function(e)
{
  displayTaxiPassengerCount(passengers);
  var tl = new TrafficLight(taxiPositionCounter);


  if(e.keyCode === 39)
  {
    if( tl.state() === "red")
    {

    }
    else
    {
    var currPos = calculateTaxiLocation(taxiPositionCounter);
    taxiPositionCounter++;
    //console.log(taxiPositionCounter++);
    var nextPos = calculateTaxiLocation(taxiPositionCounter);
    moveTaxi(currPos,nextPos);
  }
  }

  if (e.keyCode === 37)
  {
    if (tl.state === "red")
    {

    }

    else
    {
    var currPos = calculateTaxiLocation(taxiPositionCounter);
    taxiPositionCounter--;
    //console.log(taxiPositionCounter--);
    var nextPos = calculateTaxiLocation(taxiPositionCounter);
    moveTaxi(currPos,nextPos);
    }
  }

  if(e.keyCode === 38)
  {
   if( tl.state() === "green" || tl.state() === "orange")
   {
      tl.red();

      displayMessage("The robbots are red, you cannot go!");
   }
  }

  if(e.keyCode === 40)
  {
  if( tl.state() === "red" || tl.state() === "orange")
   {
      tl.green();
      displayMessage("The robbots are green, you can go!");
   }
  }
    displayMessage(e.keyCode);

  if (e.keyCode === 13)
  {
    tl.orange();
    passengers--;
  }


};
