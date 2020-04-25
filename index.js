
function takeANumber(line, person) {
  line.push(person)
  return(`Welcome, ${person}. You are number ${line.length} in line.`)

}

function currentLine(line){

  if (line.length === 0) {
  return "The line is currently empty."
  }

  if (line.length > 0) {
    var current = "The line is currently:"
    for (let num = 0; num < line.length; num +=1) {
      current += ` ${num + 1}. ${line[num]}${num + 1 < line.length ? ',': ''}`
    }
  return current
  }

}


function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }

  if (line.length > 0) {

    return `Currently serving ${line.shift()}.`
  }
}
// function nowServing(line){
//     if (line.length === 0) {
//       return 'There is nobody waiting to be served!'
//     }
//     else {
//       return `Currently serving ${line.shift()}.`
//     }
// }
