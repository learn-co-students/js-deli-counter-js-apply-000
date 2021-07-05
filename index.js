javascript


function takeANumber(katsDeliLine, name){
katsDeliLine.push(name);
return `Welcome, ${name}. You are number ${katsDeliLine.indexOf(name)+1} in line.`;
}

function nowServing(katsDeliLine){
if(katsDeliLine.length !== 0){
var currentCustomer = katsDeliLine[0];
katsDeliLine.shift();
return ("Currently serving "+currentCustomer+".");
} 
else{
return 'There is nobody waiting to be served!';
}
}

function currentLine(katsDeliLine){
  if(katsDeliLine.length!==0){
      return `The line is currently: 1. ${katsDeliLine[0]}, 2. ${katsDeliLine[1]}, 3. ${katsDeliLine[2]}`;
  }
  else{
    return 'The line is currently empty.';
}}