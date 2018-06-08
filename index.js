function takeANumber(line, name) {
  var listLength = line.push(name)
  var welcome = `Welcome, ${name}. You are number ${listLength} in line.`
  return welcome 
}

function nowServing(list) {
  var firstPerson = list.shift()
  if (list.length > 0) {
    return `Currently serving ${firstPerson}.`
  } else {
  return "There is nobody waiting to be served!"
}
}

function currentLine (line){
  var theLineIs = "The line is currently: "
  var fullList = [] 
  for (var i = 0; i < line.length; ++i) {
    fullList.push(`${i+1}. ${line[i]}`)
  }

  if (line.length > 0) {
    return `The line is currently: ${fullList.join(', ')}`
  } else {
  return "The line is currently empty."
}
}