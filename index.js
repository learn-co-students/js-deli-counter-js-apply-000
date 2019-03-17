var katzDeliLine = [];

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var first = katzDeliLine.shift()
  return `Currently serving ${first}.`;
}

function currentLine(katzDeliLine){
  var currentKatzLine = [];
  
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  }
  
  for(let i = 0; i < katzDeliLine.length; i++){
    currentKatzLine.push((i + 1) + ". " + katzDeliLine[i]);
  }
  
  var stringCurrentKatzLine = currentKatzLine.join(`, `);
  return `The line is currently: ${stringCurrentKatzLine}`;
}