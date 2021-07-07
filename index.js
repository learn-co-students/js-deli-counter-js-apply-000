function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else {
    var personBeingServed = katzDeliLine.shift();
    return `Currently serving ${personBeingServed}.`;
  }
}

function currentLine(katzDeliLine){
  var newString = 'The line is currently: ';
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.';
  }
  else {
    for(let i=0; i<katzDeliLine.length; i++){
      var personName = katzDeliLine[i];
      newString += `${i+1}. ${personName}, `;
    }
    newString = newString.slice(0,-2);
    return newString;
  }
}