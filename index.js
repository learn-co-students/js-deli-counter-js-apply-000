
function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  return "Welcome, " + customer + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(line) {
  let lunchRush = [];
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < line.length; i++) {
      lunchRush.push(" " + (i + 1) + ". " + line[i]);
    } 
  } return "The line is currently:" + lunchRush;  
}