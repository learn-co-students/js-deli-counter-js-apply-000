var katzDeli = [];

function takeANumber (katzDeliLine, newName) {
  // var pos = 0;
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
      return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine (katzDeliLine) {
  var line = "The line is currently:";
  if(katzDeliLine.length <1 ){
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      line = `${line} ${i+1}. ${katzDeliLine[i]}`
      if(i+1 <katzDeliLine.length) {line = line + ","}
    }
  }
  return line;
}
