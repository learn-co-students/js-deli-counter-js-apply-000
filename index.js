

function takeANumber(currentLine, name) {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

/*
function takeANumber(currentLine, name) {
  currentLine.push(name);
  // one way is to do:
  //  let position = currentLine.indexOf(name) + 1;
  let position = currentLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}
*/

//OR

/*
function nowServing(currentLine){
  if (currentLine === false){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${currentLine.shift()}.`;
  }
}

*/

// or

function nowServing(currentLine){
  if (currentLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${currentLine.shift()}.`;
  }
}



function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  } else {
      let str = "The line is currently:"
      for (let i = 0; i< line.length; i++){
        str +=  ` ${i+1}. ${line[i]},`
      }
  return str.slice(0,str.length-1)
  }
}

/*

OR 

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0; i < line.length; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
}


*/