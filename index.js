function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var customer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${customer}.`;
  }
}

function currentLine(katzDeliLine){
  var lineString = [];

  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++){
      lineString.push(" " + (i + 1) + `. ${katzDeliLine[i]}`);
      }
    }
    return "The line is currently:" + lineString;
}