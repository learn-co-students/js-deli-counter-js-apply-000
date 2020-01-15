
function takeANumber(array, name){
  let spot = array.length + 1
  array.push(name)
  return "Welcome, " + name + ". You are number " + spot + " in line."
}

function nowServing (array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    let person = array[0]
    array.shift()
    return `Currently serving ${person}.`
  }
}

function currentLine (array){
let string = "The line is currently:"
if (array.length === 0){
  return "The line is currently empty."
} else {
  for (let i = 0; i < array.length; i++){
    let spot = i + 1
    let name = array[i]
    string += ` ${spot}. ${name},`
  }
  return string.slice(0,-1)
}
}
