var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var position = (katzDeliLine.length) + 1;
  var greeting = "Welcome, " + name + ". You are number " + position + " in line.";
  katzDeliLine.push(name);
  return greeting;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }

  var firstPerson = katzDeliLine[0];
  var announcement = "Currently serving " + firstPerson + ".";
  katzDeliLine.shift();
  return announcement;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var number = 1;
  var line = "The line is currently: ";

  for(var i = 0; i < katzDeliLine.length; i++) {
    line = line + number + ". " + katzDeliLine[i] + ", ";
    number++;
  }
  
  var lineSize = line.length - 2;
  var newLine = line.slice(0,lineSize);

  return newLine;
}
