var katzDeli = []; // At the beginning of the day,
//the deli is empty and is represented by an empty array
//<<<<<<<<<--------------- in the instructions <<<<<<

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}


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

// Build a function currentLine that returns the current line.
// For example, if katzDeliLine is currently ["Ada", "Grace"],
// currentLine(katzDeliLine) would return "The line is currently: 1. Ada 2. Grace".
// If there is nobody in line, it should return "The line is currently empty."


var line = [];

function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}


/// did it this way first, then refactored to above
//(i used a for loop instead of a while loop)

// function currentLine(katzDeli) {
//   let i = 0;
//   while (i < katzDeli.length) {
//     line.push(` `+[i+1]+`. `  + katzDeli[i])
//     i++;
//   }
//   if (katzDeli.length === 0) {
//     return "The line is currently empty.";
//   } else
//   return(`The line is currently:` + line);
// }

//WORKS:::::

// function currentLine(katzDeli) {
//
//   for (let i = 0; i < katzDeli.length; i++) {
//     line.push(` `+[i+1]+`. `  + katzDeli[i])
//   }
//   return(`The line is currently:` + line);
// }