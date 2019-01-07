function takeANumber(deli, person){
  deli.push(person)
  return `Welcome, ${person}. You are number ${deli.length} in line.`
}


function nowServing(deli){
  if (deli.length === 0){
    return 'There is nobody waiting to be served!'
  }else{
    var person = deli.shift()
    return `Currently serving ${person}.`
  }
}

function currentLine(line){
  var string = 'The line is currently:'
  if (line.length === 0){
    return 'The line is currently empty.'
  }
  for (var i = 0; i < line.length; i++){
    string += ` ${i+1}. ${line[i]}`
    if (i+1 < line.length){
      string += ','
    }
  }

  return string
}
