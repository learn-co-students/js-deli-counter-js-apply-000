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
  var customer = katzDeliLine.shift();
  return "Currently serving " + customer + ".";
}

var currentLine = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var customerNo = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    customerNo.push(i + 1 + ". " + katzDeliLine[i])
  }
  return "The line is currently: " + customerNo.join(", ");
}
