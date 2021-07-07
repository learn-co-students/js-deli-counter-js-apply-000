function takeANumber(lineOfPeople, name){
  lineOfPeople.push(name)
  return `Welcome, ${name}. You are number ${lineOfPeople.length} in line.`
}

function nowServing(lineOfPeople){
  if (lineOfPeople.length > 0){
    var firstPerson = lineOfPeople.shift()
    return `Currently serving ${firstPerson}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(lineOfPeople) {
  var namesOfPeopleOnLine = 'The line is currently:'
  var lastIndex = lineOfPeople.length - 1
  
  if (lineOfPeople.length > 0){
    for (var i = 0; i <= lastIndex; i++) {
      namesOfPeopleOnLine = namesOfPeopleOnLine + ` ${i+1}. ${lineOfPeople[i]}`
      if (i !== lastIndex) {
        namesOfPeopleOnLine = namesOfPeopleOnLine + ','
      }
    }
    return namesOfPeopleOnLine
    }
  return "The line is currently empty."
  }
  
  