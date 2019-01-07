var katzDeliLine = [];


function takeANumber(katzDeliLine, newCustomer) {


  katzDeliLine.push(newCustomer);

  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length } in line.`;


}




function nowServing(katzDeliLine){
  var name = katzDeliLine.shift();
  if (katzDeliLine < 1) {
    return 'There is nobody waiting to be served!'
  }
  else {
    return `Currently serving ${name}.`;
  }
}




function currentLine(katzDeliLine){
  var lineStatus = "The line is currently:";
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      lineStatus = lineStatus + ` ${i + 1}. ${katzDeliLine[i]},`;
    }
    lineStatus = lineStatus.slice(0, lineStatus.length -1);
    return lineStatus;

  }
}
