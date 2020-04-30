//my code below

var katzDeliLine = [];


//the question wants me to return the welcome message, and also add the person to the end of the line.

function takeANumber(lineArray, nameStr){
  let curName = nameStr
  let currentPosition = lineArray.length + 1
  let welcomeMessage = `Welcome, ${curName}. You are number ${currentPosition} in line.`
  
  lineArray.push(curName);
  return welcomeMessage;
}

//if theres no one in the line, retur the message 'There is nobody waiting to be served!'.  IF there are others in ther line, return the message `Currently serving ${firstInLine}.` and remoive them from the front of the line.

function nowServing(lineArray){
  if (!lineArray.length){
    return 'There is nobody waiting to be served!';
  }
  let firstInLine = lineArray[0];
  lineArray.shift();
  return `Currently serving ${firstInLine}.`
}


function currentLine(lineArray){
   if (!lineArray.length){
    return 'The line is currently empty.';
  }
  
  let lineString = 'The line is currently: ';
  
  for (let i = 0; i < lineArray.length - 1 ; i++){
    let placeInLine = i + 1;
    let curName = lineArray[i];
    lineString += `${placeInLine}. ${curName}, `;
  }
  
  let lastPlace = lineArray.length;
  let lastInLine = lineArray[lineArray.length -1]
  
  lineString += `${lastPlace}. ${lastInLine}`
  
  return lineString;
}










