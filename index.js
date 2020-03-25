function takeANumber(arr, name) {
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.indexOf(name) + 1} in line.`
};

function nowServing(arr) {

  if (arr.length == 0) {
    return 'There is nobody waiting to be served!'
  }
  let current = arr[0]
  arr.shift()
  return `Currently serving ${current}.`
}

function currentLine(arr) {
  if (arr.length === 0) {
    return 'The line is currently empty.'
  }
  let orderedList = '';
  for (let i = 0; i < arr.length; i++) {
    orderedList += `${i+1}. ${arr[i]}, `
  }

  return `The line is currently: ` + orderedList.slice(0, -2);
}




// otherDeli = ["Steven", "Blake", "Avi"];
//
// function takeANumber(deliLine, name) {
//   console.log(deliLine)
//
//   var nextPersonInLine;
//
//   nextPersonInLine = deliLine.pop()
//
//   console.log(nextPersonInLine)
//
//   console.log(deliLine)
//
//   // console.log(deliLine[deliLine.length-1])
//
//   // console.log("Welcome, " + deliLine[deliLine.length-1] + ". You are number 4 in line.")
// }
//
// takeANumber(otherDeli, 'Grace')


// Array. push()
// Array.pop()
// Array.shift()
