var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var strng = `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
  return strng;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var served = deliLine.shift();
    return "Currently serving " + served + ".";
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var stg = [];
    for (var i = 0; i < deliLine.length; i++) {
      stg.push((i+1) + ". " + deliLine[i]);
    }
    return "The line is currently: " + stg.join(", ");
  }
}