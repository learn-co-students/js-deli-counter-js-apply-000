/*Build a function that a new customer will use when entering the deli.
The function, `takeANumber`, should accept two paramaters: the current line of people,
along with the new person's name. The function should return a welcome message including
the new person's position in line, such as `"Welcome, Ada. You are number 1 in line."`.
And don't go being too programmer-y and give them their index. These are normal people.
If they are 7th in line, tell them that. Don't get their hopes up by telling them they
are number 6 in line.*/

function takeANumber(line, name) {
  line.push(name);
  var number = line.length;
  return `Welcome, ${name}. You are number ${number} in line.`;
}

/*Build a function `nowServing`. This function should accept the current line of people
(`katzDeliLine`) and return the first person in line and then remove that individual
from the line. If there is nobody in line, it should return "There is nobody waiting to be
served!"*/

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}



function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var arr = [];
    for (let i = 0; i < line.length; i++) {
      arr.push(` ${i +1}. ${line[i]}`)
    }
  }
  return "The line is currently:" + arr;
}
