var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, `+ (name) + `. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ` + katzDeliLine.shift() + `.`;
    }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var response = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length; i++){
    response += (i + 1) + `. ` + `${katzDeliLine[i]}` + (katzDeliLine.length - 1 > i ? ", " : "");
  }
  if (katzDeliLine.length > 0){
    return response;
  }
  else
    return "The line is currently empty."
  }
