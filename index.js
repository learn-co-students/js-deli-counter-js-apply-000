var katzDeli =[];   //At the beginning of the day, the deli is empty and is represented by an empty array, e.g.,

/*Build a function that a new customer will use when entering the deli.
The function, takeANumber, should accept the current line of people,
katzDeliLine, along with the new person's name as parameters. The function
should return their position in line. And don't go being too programmer-y
and give them their index. These are normal people. If they are 7th in line,
tell them that. Don't get their hopes up by telling them they are number 6
in line. */

// 1) deli takeANumber adds a person to the line:

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

/* Build a function nowServing. This function should return the first person in
line and then remove that individual from the line. If there is nobody in line,
it should return "There is nobody waiting to be served!" */

// 2) deli nowServing returns the line is empty when no one is on line:

//deli nowServing returns an announcement about the person it is serving, and shifts the line:


function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}


// deli currentLine(line) returns "The line is currently empty." if no one is in line:

var line = [];

function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }

  if (katzDeli.length === 0) {
    return "The line is currently empty.";
    } else
    return(`The line is currently:` + line);
  }
