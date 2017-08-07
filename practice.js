var katzDeli = [];

function takeANumber(currentLine, name) {
  katzDeli = currentLine.push(name);
  var position = currentLine.length;
  output = `Welcome, ${name} you are number ${position} in line.`;
  console.log(output);
  return output
}

var katzDeliLine = [];
takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Ramy");
takeANumber(katzDeliLine, "Tartoora");

function nowServing (line) {
  if (line.length === 0) {
    output = "There is nobody waiting to be served!"
    console.log(output);
    return output
  }
  else {
    firstName = currentLine[0]
    output = `Currently serving ${firstName}.`
    console.log(output);
    line.shift()
    return output
  }
}

function currentLine (line) {
  if (line.length===0) {
    output = "The line is currently empty";
    return output;
  }
  else {
    var addition = "The line is currently:";
    for (var i = 0; i<line.length; i++){
      position = i+1;
      name = line[i];
      addition = `${addition}, ${position}. ${name} `
    }
    output = `${addition}`;
    console.log(output);
    return output;
  }
}

currentLine(katzDeliLine);
