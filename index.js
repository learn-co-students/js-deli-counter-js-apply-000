var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + person + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  } else {
    var line = "The line is currently: ";
    katzDeliLine.forEach( function(el, ind) {
      line += (ind+1) + ". " + el + ", ";
    });
    line = line.slice(0, line.length-2);
    return line;
  }
}
