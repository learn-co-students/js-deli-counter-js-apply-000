var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}


function nowServing(katzDeli, name) {
  if (katzDeli.length == 0) {
    return(`There is nobody waiting to be served!`);
  } else {
    return(`Currently serving ${katzDeli.shift(name)}.`);
  } //end of if..else statement
} //end of function


function currentLine(katzDeli) {
  let newArray = []; //this will hold our new array of elements, to be returned in a string
  if (katzDeli.length == 0) {
    return(`The line is currently empty.`);
  } else {
    for (var i = 0; i < katzDeli.length; i++) {
      newArray.push(` ${[i+1]}. ${katzDeli[i]}`) //need space before ${[i]}.
    } //end of for loop
    return(`The line is currently:${newArray}`); //this needs to be outside for loop
  } //end of if..else statement
} //end of function
