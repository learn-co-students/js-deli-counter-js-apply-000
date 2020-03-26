/*
1. create a func `takeANumber` = (katzDeliLine, name) => return string + name + # of current name in the line;
2. using .push method add name to the current line;
3. using the .length method get the #of the current name in the line;
4. return welcome tring + name + #of curName in the line;
*/

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


/*
1. create a func `nowServing` = (katzDeliLine) => return 1) the `string`, if the line is empty; return 2) first name in katzDeliLine, than remove that name from the line;
2. using if (conditional) and the .length method to check if the line is empty
3. if so => return the `nobody waiting` string;
4. else => using the .shift method delete the 1st element from the line and return it;
*/

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

/*
1. create a func `currentLine` = (katzDeliLine) => return 1) `line is empty` string in  case if line is empty; return 2) current line as a `string + names of people in the line`;
2. using if (conditional) and .length method check if the line is empty;
3. if so => return `line is empty` string;
4. else => create a new lineToString = `The line is currently: ` to collect the names from curLine concatinated to it;
5. using a for loop iterate over each element of the curLine and get each name and concat with lineToString;
6. get the number of each person in the line by (i + 1) and concat it with the lineToString before each name;
7. using non-mutating .slice method pop of last to elements of the string (comma and space);
8. return sliced string;
*/

function currentLine(curLine) {
  if (curLine.length === 0) {
    return `The line is currently empty.`;
  } else {
    let lineToString = `The line is currently: `;
    for (let i = 0; i < curLine.length; i++) {
      let curName = curLine[i];
      let curNum = i + 1;
      lineToString += `${curNum}. ${curName}, `;
    }
    let noCommaNoSpace = lineToString.slice(0, -2);
    
    return noCommaNoSpace;
  }
}

