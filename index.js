var katzDeliLine = [];


/*var counter = 0;

function takeANumber(katzDeliLine){
  katzDeliLine.push(++counter);
  return `Welcome! You're ticket number is #${counter}`;
}*/

// takeANumber(katzDeliLine) => "Welcome! You're ticket number #1"  katzDeliLine => [1]
// takeANumber(katzDeliLine) => "Welcome! You're ticket number #2" [1,2]

// nowServing(katzDeliLine) => "Currently Serving: #1" [2]
// nowServing(katzDeliLine) => "Currently Serving: #2" []

// takeANumber(katzDeliLine) => "Welcome! You're ticket number #3" [3]




function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0)
    return "There is nobody waiting to be served!";
  else
    return `Currently serving ${katzDeliLine.splice(0,1)}.`;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0)
    return "The line is currently empty.";
  else {
    var message = "The line is currently:";
    
    for(var i = 0; i < katzDeliLine.length; i++) {
      message = message + ` ${i + 1}. ${katzDeliLine[i]},`;
    }
    message = message.slice(0,-1);
    return message;
  }
}