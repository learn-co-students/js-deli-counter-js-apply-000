
function takeANumber(katzDeliLine, namePerson){
    katzDeliLine.push(namePerson);
    for (let i = katzDeliLine.length + 1; i > 0; i++) {
      return `Welcome, ${namePerson}. You are number ${i - 1} in line.`;
    }
}


function currentLine(katzDeliLine) {
  var i =0;
   if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  } 
  else {
   return `The line is currently: ${i+1}. ${katzDeliLine[i]}, ${i+2}. ${katzDeliLine[i+1]}, ${i+3}. ${katzDeliLine[i+2]}`;
    
  }
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
  var string = `There is nobody waiting to be served!`;
  return string;
  }
}


