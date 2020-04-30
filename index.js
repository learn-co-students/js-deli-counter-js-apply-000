var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for (var i = 0; i < katzDeliLine.length; i++) {
    var normalNum = i + 1;
    var orderPickup = "Welcome, " + name + ". " + "You are number " + normalNum + " in line.";
  }
  return orderPickup;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
      var currentCust = "Currently serving " + katzDeliLine[0] + ".";
      katzDeliLine.splice(0, 1);
  }
  return currentCust;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
   var namesAndNums = [];
   if (katzDeliLine.length > 0) {
     for (var i = 0; i < katzDeliLine.length; i++) {
       var normalNum = i + 1;
       var eachName = normalNum + ". " + katzDeliLine[i] + ",";
       namesAndNums.push(eachName);
     }
    }
    var currLine = "The line is currently: " + namesAndNums.join(" ");
    var revisedLine = currLine.slice(0, -1);
    return revisedLine;
  }
