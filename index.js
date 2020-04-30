var array = [];

function takeANumber(currentLine, name) {
  currentLine.push(name);
  var string = `Welcome, ${name}. You are number ${currentLine.length} in line.`;
  return string; 
}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

function nowServing(currentLine) {
  if (currentLine.length > 0) {
    return "Currently serving " + currentLine.shift() + ".";
  } else {
  var string = `There is nobody waiting to be served!`;
  return string;
  }
}


function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return('The line is currently empty.');
  }
var  data = []; 
for(var i=0; i<katzDeliLine.length; i++) { 
data.push(katzDeliLine[i]);

}
return `The line is currently: 1. ${data[0]}, 2. ${data[1]}, 3. ${data[2]}` } 
  