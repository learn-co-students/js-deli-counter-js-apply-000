var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if  (!katzDeliLine.length) {                         //if this evaluates to true, returns "nobody"
    return "There is nobody waiting to be served!";
  } else {                                                //if evaluates to false, returns # in line
    return `Currently serving ${katzDeliLine.shift()}.`;     //no "else" in soln - not necessary?
  }
}

function currentLine(katzDeliLine) {
  if  (!katzDeliLine.length) {
    return "The line is currently empty.";               //if true, return "empty"
  }
  var waiting = [];
  for (let i = 0, l = katzDeliLine.length; i < l; i++) {     //if >0 people in line, proceed
    waiting.push(`${i + 1}. ${katzDeliLine[i]}`)         //add position # & name to array end
  }
  return `The line is currently: ${waiting.join(', ')}`           //string because objects?
}