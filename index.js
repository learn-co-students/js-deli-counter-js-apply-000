

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else  {
    return `Currently serving ${katzDeliLine.shift()}.`; // removes the first person from the array
  }
}

function currentLine(line) {
  if (line.length === 0) { 
    return "The line is currently empty.";
  } else {

    let newLine = [`The line is currently:`];
    for (let i = 0; i < line.length; i++) {
      i !== line.length -1 ? newLine.push(` ${i + 1}. ${line[i]},`) : newLine.push(` ${i + 1}. ${line[i]}`);
    }
    return newLine.join(""); // joins the two sides of the array without the space
  }

}

/*
*For the currentLine function, i used a tenary operator to check,
if NOT (line.length -1) (last index position of the line array). 
Print statement with ",". or if false and is the last index position
of the array. push statement without the comma.
*/
