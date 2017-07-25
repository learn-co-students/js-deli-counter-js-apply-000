var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    var person = katzDeliLine.shift();
    return `Currently serving ${person}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var current = "The line is currently:"
    for (var i = 0; i < katzDeliLine.length - 1; i++) {
      var position = i + 1;
      current += " " + position + ". " + katzDeliLine[i] + ","
    }
    return current + " " + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length-1];
  }
}
