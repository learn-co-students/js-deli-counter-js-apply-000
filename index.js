/*function takeANumber(katzDeliLine, name) {
  var i = 0;
  while(katzDeliLine[i] != name && katzDeliLine.length - 1 > i) {
    if(i == katzDeliLine.length - 1) {
      katzDeliLine.push(name);
      return i;
    }
    i++;
  }
  return "Welcome, " + katzDeliLine[i] +
  ". You are number ${i + 1} in line.";
}*/
function takeANumber(katzDeliLine, name) {
  if(typeof name == 'string') {
    katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }
  else {
    katzDeliLine.push([...name]);
  }
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0)
    return "Currently serving " + katzDeliLine.shift() + ".";
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var theLine = "The line is currently:"
  if(katzDeliLine.length > 0) {
    for(var i = 0; i < katzDeliLine.length; i++)
      theLine += (i + 1 === 1 ? ' ' : ', ') + (i + 1) +". " + katzDeliLine[i];
      return theLine;
  }
  else {
    return "The line is currently empty."
  }
}
