var katzDeliLine = ['Ada', 'Bill', 'Anne'];
// var peopleInLine1 = [];

// for (var i = 0; i < katzDeliLine.length; i++) {
//   peopleInLine1.push(` ${i+1}. ${katzDeliLine[i]}`)
//   // console.log(`The line is currently:${peopleInLine1}.`)
// }
// console.log(`The line is currently:${peopleInLine1}.`)
// console.log(peopleInLine1)
// The line is currently: 1. Ada
// The line is currently: 2. Bill
// The line is currently: 3. Anna


function takeANumber(array, personName) {
  array.push(personName)
  return (`Welcome, ${personName}. You are number ${array.length} in line.`)
}

var currentTicketNumber = 47;  
  
function takeANumberTwo(array) {
  var yourNumber = currentTicketNumber + 1
  currentTicketNumber++
  array.push(yourNumber)
  return (`You are number: ${yourNumber}`)
}  

console.log(takeANumberTwo(katzDeliLine))
console.log(currentTicketNumber)

function nowServing(array) {
  if(array.length === 0) {
    return ('There is nobody waiting to be served!')
  } else {
    var current = array.shift()
    return (`Currently serving ${current}.`) 
  }
}


function currentLine(array) {
  var peopleInLine = [];
  if(array.length) {
    for (var i = 0; i < array.length; i++) {
      peopleInLine.push(` ${i+1}. ${array[i]}`)
    }
    return (`The line is currently:${peopleInLine.join()}`)
  } else {
    return ('The line is currently empty.')
  }
}





// var line = [];

// function currentLine(array) {
//   if (array.length === 0) {
//     return (`The line is currently empty.`)
//   } else {
//     var i = 0
//     while (i < array.length) {
//       line.push(` ${i+1}. ${array[i]}`)  
//       i++
//     }
//     return (`The line is currently:${line.join()}`)
//   }
// }
// currentLine(katzDeliLine)


