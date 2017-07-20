var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var currentCus = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentCus}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  } else {
    var lineStr = "The line is currently:";
    for (let i=0; i< katzDeliLine.length; i++) {
      lineStr += ` ${i+1}. ${katzDeliLine[i]}`
      if ( (i+1) < katzDeliLine.length) {
        lineStr += ","
      }
    }
    return lineStr;
  }
}
