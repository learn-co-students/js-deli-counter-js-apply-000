function takeANumber(deli, name) {
  deli.push(name)
	return `Welcome, ${deli[deli.length - 1]}. You are number ${deli.length} in line.`
}

// function nowServing(deliLine) {
//   var new_arr = [];
//     while (deliLine.length > 0) {
//         new_arr.push(deliLine.shift());
//         return `Currently serving ${new_arr[new_arr.length - 1]}.`;
//       }
//       if (deliLine.length ===0) {
//         return 'There is nobody waiting to be served!';
//       }
// }

function nowServing(deliLine) {
  if (deliLine.length > 0) {
   var deliLine_remove = deliLine.shift()
   return `Currently serving ${deliLine_remove}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine) {
  var i = 0
  var tally = ''
  while (i < deliLine.length) {
    if (i > 0) {
      tally += ', '
    }
    tally += `${i + 1}. ${deliLine[i]}`
  i++
  }
    if (deliLine.length === 0) {
      return 'The line is currently empty.'
    }

  return 'The line is currently: ' + tally
}