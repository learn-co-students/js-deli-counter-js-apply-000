var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name)+1;
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length){
    return 'Currently serving ' + katzDeliLine.shift() + ".";
  } else return `There is nobody waiting to be served!`
}

function currentLine(katzDeliLine){
  var string = `The line is currently: `;
  if(katzDeliLine.length){
    for(var i = 0; i<katzDeliLine.length; i++){
      if(i === katzDeliLine.length-1){
        string += (i+1) + ". " + katzDeliLine[i];
      } else {
        string += (i+1) + ". " + katzDeliLine[i] + ", ";
      }
    }
  } else return "The line is currently empty.";
  return string;
}