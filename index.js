var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  if (katzDeli.length > 0){
    return `Currently serving ${katzDeli.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli){
  var newArr = []
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
  for (var i = 0; i < katzDeli.length; i++){
    newArr.push(`${i+1}. ${katzDeli[i]}`)
  }
  return `The line is currently: ${newArr.join(', ')}`
  }
}
