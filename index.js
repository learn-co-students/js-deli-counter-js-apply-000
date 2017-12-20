function takeANumber(deli, person) {
  deli.push(person);
  return `Welcome, ${person}. You are number ${deli.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}

function currentLine(lineArray) {
  var returnStr = 'The line is currently: ';
  if (lineArray.length === 0) return "The line is currently empty.";
  for (var i = 0; i < lineArray.length; i += 1) {
    console.log(i)
    if (i === lineArray.length - 1) {
      returnStr += `${i + 1}. ${lineArray[i]}`
    } else {
      returnStr += `${i + 1}. ${lineArray[i]}, `
    }
  }
  return returnStr;
}