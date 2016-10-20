var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
    return "The line is currently empty.";
  }
  else {
    var nowServing = "The line is currently: ";
    katzDeliLine.forEach(function(name, index) {
      var position = index + 1;
      if (position === 0) {
        nowServing = nowServing + position + ". " + name;
      }
      else {
        nowServing = nowServing  + position + ". " + name + ", ";
      }
    });
    return nowServing.slice(0, -2);
  }
}
