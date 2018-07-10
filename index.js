var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length+1;
  katzDeliLine.push(name);
  return("Welcome, " + name + ". You are number " + position + " in line.")
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!")
  }
  else {
    var output = "Currently serving " + katzDeliLine.shift() + "."
    return(output)
  }
}

var line = []

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return("The line is currently empty.")
  }
  else {
    let i = 0
    while(i < katzDeliLine.length) {
      line.push(' ' + [i + 1] + '. '+ katzDeliLine[i])
      i++;
    }
     return("The line is currently:" + line)
  }
}