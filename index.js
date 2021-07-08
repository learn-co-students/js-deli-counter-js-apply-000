function takeANumber(katzDeliLine, name){
  var message = `Welcome, ${name}. You are number ${katzDeliLine.length + 1} in line.`;
  katzDeliLine.push(name);
  return message;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var currentCustomer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var currentLineString = "The line is currently: "
      for (var i = 0; i < katzDeliLine.length; i++){
        currentLineString = currentLineString + `${i + 1}. ${katzDeliLine[i]}, `
      }
      return currentLineString.substr(0, currentLineString.length - 2);
    } else {
      return "The line is currently empty."
    }

}