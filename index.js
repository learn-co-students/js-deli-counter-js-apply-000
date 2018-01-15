var katzDeli = [];

function takeANumber(katzDeliLine, newPeople){
  katzDeliLine.push(newPeople);
  return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else
    return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    var lineOut = 'The line is currently empty.';
  }
  else {
    var lineOut = "The line is currently: "
    for (var loop = 0; loop <= katzDeliLine.length-1; loop++){
        lineOut += String(loop+1) +". "+ katzDeliLine[loop] + ", ";
    }
    lineOut = lineOut.slice(0,lineOut.length-2);
  }
  return lineOut;
}
