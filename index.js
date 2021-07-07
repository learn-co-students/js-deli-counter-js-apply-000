var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let lineNumber = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + lineNumber + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
  var result = "Currently serving " + katzDeliLine[0] + ".";
  katzDeliLine.shift();
  return result;
  } else {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(katzDeliLine) {
  let sentence = "The line is currently: ";
  if (katzDeliLine.length > 0) {
    for (let i=0; i < katzDeliLine.length; i++){
      sentence += i + 1 + ". " + katzDeliLine[i] + ", ";
    if (i === katzDeliLine.length -1) {
        let result = sentence.slice(0,-2);
        return result;
      }
    }
    } else {
    return "The line is currently empty."
  }
}





