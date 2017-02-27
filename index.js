function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  if (katzDeliLine.length === 1) {
    return `Welcome, ${name}. You are number ${1} in line.`;
  } else {
    for (var i = 1; i < katzDeliLine.length; i++) {
      if (name === katzDeliLine[i]) {
        return `Welcome, ${name}. You are number ${[i + 1]} in line.`;
      }
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
      var name = katzDeliLine.shift();
      return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine) {
  var deliLineOrder = "";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    deliLineOrder = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++) {
      deliLineOrder = deliLineOrder + `${[i + 1]}. ${katzDeliLine[i]}, `;
    }
  }
  deliLineOrder = deliLineOrder.slice(0, -2);
  return deliLineOrder;
}
