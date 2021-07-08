var katzDeliLine =[];

function takeANumber (katzDeliLine,name) {
  var number = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(lineNow) {
 var line = "The line is currently:"
 if (lineNow.length === 0) {
    return "The line is currently empty."
  } else {
    for(var i = 0; i < lineNow.length; i++) {
      if (i < lineNow.length - 1) {
     line += ` ${i+1}. ${lineNow[i]},`;
        }
      else {
        line += ` ${i+1}. ${lineNow[i]}`
        }
     }
      return line;
  }
    }