//katzDeli is an empty array that represents the empty deli at the beginning of the day
var katzDeli = [];


// function takeANumber accepts two parameters katzDeli and customerName, it checks using if statement if the katzDeli array is empty (katzDeli.length > 0). If the array is not empty it pushes the argument for parameter customerName to the end of the katzDeli array and returns the following string `Welcome ${customerName}. You are number ${katzDeli.length} in line.`
function takeANumber(katzDeli, customerName) {
  if (katzDeli.length > 0);
  katzDeli.push(customerName);
  return (`Welcome, ${customerName}. You are number ${katzDeli.length} in line.`)
};

//function nowServing accepts one parameter katzDeli. The function body creates a counter variable i and assigns it value 0. A while loop runs as long as i < katzDeli.length (we are using while loop because we might not know how long the array is and want to it run as long as the array is not empty). Each iteration of the loop increments the counter variable by 1. The loop body also uses an if statement to check if the katzDeli is empty. If yes it returns a string "There is nobody waiting to be served!". Else it returns the `Currently serving ${katzDeli.shift()}.` The first element of katzDeli array is removed from the array.
function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return (`Currently serving ${katzDeli.shift()}.`)
  }
};

// this variable was created for the sole purpose two joining (interpolating two strings)
var katzDeliLine = [];


// function currentLine accepts one paremeter katzDeli. The function body creates a counter variable i and assigns it value 0. Then a while loop is initialized and runs as long as i < katzDeli.length. The loop body pushes the string ${i+1}. ${katzDeli[i]} to the previously created array katzDeliLine, after each iteration the counter variable is incremented by 1. The function continues with an if statement and checks if katzDeli.length is equal to 0. If yes it returns the s tring "The line is currently empty." Else it retuns "The line is currently: katzDeliLine"
function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    katzDeliLine.push(` ${[i + 1]}. ${katzDeli[i]}`)
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    return "The line is currently:" + katzDeliLine;
  }
}
