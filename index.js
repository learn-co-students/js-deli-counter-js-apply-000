var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ` + `${name}` + `. You are number ` + `${katzDeliLine.length}` + ` in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var currentPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ` + `${currentPerson}` + `.`
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {

  var lineintro = "The line is currently: "

  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      if (i < line.length - 1) {
        lineintro += `${i + 1}` + `. ` + `${line[i]}` + `, ` // 1. Ada line[i]
      } else {
        lineintro += `${i + 1}` + `. ` + `${line[i]}`
      }
    }
    return lineintro;
  } else {
    return "The line is currently empty."
  }
}
