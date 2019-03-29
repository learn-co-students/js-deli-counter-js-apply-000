//Takes 2 arguments and adds values/indexes to the array argument. It returns a string.
function takeANumber(lineAmount,newPerson){
  lineAmount.push(newPerson)
  return(`Welcome, ${newPerson}. You are number ${lineAmount.length} in line.`);
}
//returns a string with array argument index values
function nowServing(lineAmount){
  let i = 0;
  while (i < lineAmount.length) {
    i++;
  }
  if (lineAmount.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${lineAmount.shift()}.`);
}


function currentLine(lineAmount) {
  var line=[]
  let i = 0;
  while (i < lineAmount.length) {
    line.push(` `+[i+1]+`. `  + lineAmount[i])
    i++;
  }
  if (lineAmount.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}