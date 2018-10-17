var katzDeliLine = [];
var newName=(prompt("Enter your name to take a number."));
var todayLine = katzDeliLine;
function takeANumber(todayLine,newName){
    todayLine.push(newName);
    katzDeliLine = todayLine;
    var welcomeNewName = ("Welcome, "+ newName+". You are number " + (katzDeliLine.length)+" in line.");
    return welcomeNewName;
}
takeANumber();

function nowServing(katzDeliLine){
  var nextInLine = "There is nobody waiting to be served!";
  if (katzDeliLine[0]!==undefined){
      var beingServed = katzDeliLine.shift();
      nextInLine = ("Currently serving "+beingServed+".");
    }
  return nextInLine;
}
nowServing();


function currentLine(arrLine){
  var theLine = "The line is currently empty.";
  if (arrLine[0]!==undefined){
      var numL = arrLine.length;
      var arrLineTwo = [];
      for (var i=0;i<numL;i++){ 
          var strNum = (i+1);
          arrLineTwo[i]= (" "+strNum.toString() +". "+arrLine[i]); 
        }
        theLine = ("The line is currently:" + arrLineTwo.toString());
      } 
  return theLine;
}
currentLine(line);