var katzDeli = [];

function takeANumber(katzDeli, customerName) {
  katzDeli.push(customerName);
  
  return `Welcome, ${customerName}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length > 0) {
  var first = katzDeliLine.shift()
  return `Currently serving ${first}.`;
  }
  else {
  return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var currentKatzLine = [];
  
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  }
  else {
     for(let i = 0; i < katzDeliLine.length; i++){
      currentKatzLine.push((i + 1) + ". " + katzDeliLine[i]);
     }
  }
    var stringCurrentKatzLine = currentKatzLine.join(`, `);
    return `The line is currently: ${stringCurrentKatzLine}`;
}