//Add elements to an array
//Return items from an array
//Iterate through an array
//Pass an array as a function parameter
function takeANumber(arr,name){
// I will push the name into the array .and then figure out the index , which could be
 var queuePosition ;
  arr.push(name) // insert out name into the queue
  /* I then perhaps create a variable which tells me the queue position this person is in */
  queuePosition = arr.indexOf(name) + 1; // This returns the index position (not the value)
  // I added +1 so it would not return 0 index from beginning
  // Then we want to return a string with their name and number
  return `Welcome, ${name}. You are number ${queuePosition} in line.`
}

/*function nowServing(arr){ // the challenge is creating a string if the array is empty.
if (arr.length != 0) {
  return `Currently serving ${arr.splice(0,1)}`
} else {
  return `There is nobody waiting to be served!`}
}*/
function nowServing(arr){
if (!arr.length) {
return "There is nobody waiting to be served!"
}
else {
//  return "Currently serving " + arr[0] + ".";
 return "Currently serving " + arr.shift() + ".";
}
}


function currentLine(arr){
if (!arr.length) {
  return "The line is currently empty."}
 let newArr = []
  for (let i = 0;i<arr.length;i++ ){
    newArr.push(i+1 + "." +" " + arr[i])
  }

console.log(`The line is currently: ${newArr}`);
  return `The line is currently: `+ newArr.join(", ")
}



var katzDeliLine = [];

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
