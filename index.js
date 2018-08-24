let katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
takeANumber(Ada);


function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!";
  } else {
      let currentlyServing = katzDeliLine.shift();
      return `Currently serving ${currentlyServing}.`;
  }
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
let number = line.map((name, index) => `${index+1}. ${name}`);
    return `The line is currently: ${number.join(", ")}`
  } 
}