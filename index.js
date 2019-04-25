var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var number = katzDeliLine.indexOf(name);
  number += 1;
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else{
    return 'Currently serving ' + katzDeliLine.shift() + "."
  }
}

var message = [];

function currentLine(line){

  for (let i=0;i<line.length;i++){
    message.push(" " + (i+1) + ". " + line[i] )
  }

  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    return "The line is currently:" + message
  }
}