var katzDeliLine = [];
var name = ["Ada", "Grace", "Kent"];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing (katzDeliLine){
  if (katzDeliLine.length === 0)
    return "There is nobody waiting to be served!";
  else
    return `Currently serving ${katzDeliLine.shift()}.`;
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length ===0)
  return "The line is currently empty.";
    else {
    var lineOut = "The line is currently: ";
    for (var n = 0; n <= katzDeliLine.length - 1; n++ ) {
      lineOut += String(n+1) +". " + katzDeliLine[n]+", ";
    }
  return lineOut.slice(0, lineOut.length-2);
  }
}