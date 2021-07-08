var katzDeliLine = [];
var newName = [];
var linePosition;
//katzDeliLine = ["Ada", "Grace", "Kent"];
function takeANumber(katzDeliLine){
  
  if (katzDeliLine.length() > 0){
    
  linePosition = linePosition + 1;
  return linePosition;
  }
  else
  {
    linePosition = 1;
    return linePosition;
  }
 }

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length > 0)
  {
    //shift method returns the removed item
    
   var personNow = katzDeliLine.shift();
    var message = "Currently serving " + personNow + ".";
    return message;
// var removePerson = katzDeliLine[0];
 
 
 //var index = katzDeliLine.indexOf(removePerson);
 //if (index > -1){
 //katzDeliLine.splice(index, 1);
 

  //return "Currently serving " + (removePerson );
 } 
 else {
     return "There is nobody waiting to be served!";
 }
  }


function currentLine(katzDeliLine)
{

if (katzDeliLine.length === 0){
  var message = "The line is currently empty.";
  return message;
  }
  
  if (katzDeliLine.length > 0){
    var i = 0;
    var pNumber = 1;
    var messageString = [];
    do {
      //.shift() returns the person removed
      var pPerson =katzDeliLine[i];
      var messageSnip = " " + pNumber + ". " + pPerson;
      
    messageString.push(messageSnip);
    i++;
    pNumber++;
       }
       while (i < katzDeliLine.length);
       messageString = "The line is currently:" + messageString;
       return messageString;
}
}