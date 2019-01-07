var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  }

  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    katzDeliLine.shift();
    return ("Currently serving " + person + ".");
  }
}


function currentLine(katzDeliLine){
  var curr = "The line is currently: ";

  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  }

  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    var pos = katzDeliLine.indexOf(person) + 1;
    var lastPerson = katzDeliLine.length - 1;

    if (i !== lastPerson) {
      curr += pos + ". " + person + ", ";
    } else if (i === lastPerson) {
      curr += pos + ". " + person;
    }
  }
  return curr;
}
