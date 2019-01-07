var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;

  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing(katzDeliLine){
  var currentCustomer = katzDeliLine[0]
  katzDeliLine.shift()

  if (currentCustomer === undefined) {
    return "There is nobody waiting to be served!"
  }

  return "Currently serving " + currentCustomer + ".";
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: "
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  for (var i = 0; i < katzDeliLine.length ; i++) {
    if (i === 0) {
      line += i + 1 + ". " + katzDeliLine[i];
    } else {
    line += ", " + (i + 1) + ". " + katzDeliLine[i];
    }
  }
  return line;
}
