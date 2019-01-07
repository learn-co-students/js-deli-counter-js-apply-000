var katzDeliLine = [];

function takeANumber(lineOfPeople, newName) {
    lineOfPeople.push(newName);
    return "Welcome, " + newName + ". You are number " + lineOfPeople.length + " in line."

}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var person = katzDeliLine.shift();
  return "Currently serving " + person + ".";
}

var currentLine = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var newPersonNo = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    newPersonNo.push(i + 1 + ". " + katzDeliLine[i])
  }
  return "The line is currently: " + newPersonNo.join(", ");
}
