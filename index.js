var katzDeli = [];

function takeANumber(katzDeliLine, customer){
  katzDeliLine.push(customer);
  // Since we just pushed the customer on, their Position
  // is equal to the length of the line.
  let placeInLine = katzDeliLine.length;
  return `Welcome, ${customer}. You are number ${placeInLine} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    let customer = katzDeliLine.shift();
    return `Currently serving ${customer}.`;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var output = "The line is currently: ";
    for(var i = 0; i < katzDeliLine.length; i++){
      let customer = katzDeliLine[i];
      output += `${i+1}. ${customer}`;
      if(i < katzDeliLine.length - 1){
        output += ", ";
      }
    }
    return output;
  }
}
