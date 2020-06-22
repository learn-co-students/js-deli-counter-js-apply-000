function takeANumber(lineArray, newName) {
  lineArray.push(newName);
  return `Welcome, ${newName}. You are number ${lineArray.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  //check if there is anyone in line
  if (line.length === 0) {
    //state that the line is empty
    return "The line is currently empty.";
  } else {
    //initialize the result statment
    let result = 'The line is currently: ';
    //loop through the line
    for (let i = 0; i < line.length; i++) {
      //implement functionality for the first name to be concatenated to the result
      if (i === 0) {
        result = result + `${i+1}. ${line[i]}`;
      //implement functionality for the remaining names to be concatenated
      } else {
        result = result + `, ${i+1}. ${line[i]}`;
      }
    }
    //return the result statement
    return result
  }
}