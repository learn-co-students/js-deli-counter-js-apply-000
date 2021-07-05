// 1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept two parameters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as `"Welcome, Ada. You are number 1 in line."`. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

// takeANumber
// ✓ adds a person to the line
// ✓ appends the person the end of the line if there are already people on it
// ✓ properly handles multiple people being added

const takeANumber = function(arr, newName) {
  arr.push(newName);
  return `Welcome, ${newName}. You are number ${arr.indexOf(newName) + 1} in line.`;
}

// const takeANumber = function(arr, newName) {
//   arr.push(newName);
//   let placeInLine = "";
//   for(let i=0;i<arr.length;i++) {
//     if(arr[i] === newName){
//       placeInLine = i + 1;
//     }
//   }
//   return `Welcome, ${newName}. You are number ${placeInLine} in line.`
// }



// 2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
// nowServing
// ✓ returns the line is empty when no one is on line
// ✓ returns an announcement about the person it is serving, and shifts the line

const nowServing = function(arr) {
  const currentPerson = arr.shift();
  if(currentPerson===undefined) {
    return `There is nobody waiting to be served!`;
  }
  return `Currently serving ${currentPerson}.`;
}

// 3. Build a function `currentLine` that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  You don't have to use `katzDeliLine` as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return `"The line is currently empty."`

// currentLine(line)
//✓ returns "The line is currently empty." if no one is in line
//✓ says who is in line when there are people waiting

const currentLine = function(arr) {
  const str = `The line is currently`;
  const newArr = [];
   
  if(arr.length===0) {
    return `${str} empty.`;
  }
   
  for(let i=0;i<arr.length; i++) {
    newArr.push(`${i + 1}. ${arr[i]}`);
  }
  return `${str}: ${newArr.join(', ')}`
}
  