// for the takeANumber function I used template literals to call the values
// I used the push method to add the values 
// and used template literals again to return the string needed 

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var nextPerson = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return `Currently serving ${nextPerson}.`;
  }
}

function currentLine(katzDeliLine) {
  var newLine = [];
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < katzDeliLine.length; i++){
      newLine.push(`${i + 1}. ${katzDeliLine[i]}` );
      var space = newLine.join(", ");
    }
    return `The line is currently: ${space}`;
  }
}