function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var result;
  if (katzDeliLine.length == 0) {
    result = "There is nobody waiting to be served!";
  } else {
    result = "Currently serving " +  katzDeliLine.shift() + ".";
  }
  return result;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length==0) {
    return "The line is currently empty."  // early return
  }

  var result = "The line is currently:";
  for(var i=0; i<katzDeliLine.length; i++) {
    result += ` ${i+1}. ${katzDeliLine[i]}` + (i+1<katzDeliLine.length?",":"");
  }
  return result;
}
