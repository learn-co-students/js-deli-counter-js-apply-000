var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    katzDeliLine = katzDeliLine.shift();  
    return `Currently serving ${katzDeliLine}.`;
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    const newArr = [];
    let resultMessage = "The line is currently: ";
    for(let i = 0; i < katzDeliLine.length; i++) {
      newArr.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    resultMessage += newArr.join(", ");
    return resultMessage;
  }
}