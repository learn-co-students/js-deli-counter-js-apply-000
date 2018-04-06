var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

//can also add 1 to indexOf(): The indexOf() method returns the position of the first occurrence of a specified value in a string.

// return "Welcome, " + name + ". You are number " +  (katzDeliLine.indexOf(name) + 1) + " in line.";

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return `The line is currently empty.`;
  } else {
      var people = [];
      for(let i = 0; i < katzDeliLine.length; i++){
        people.push(`${i + 1}. ${katzDeliLine[i]}`);
      }

    return `The line is currently: ${people.join(', ')}`
  }
}
