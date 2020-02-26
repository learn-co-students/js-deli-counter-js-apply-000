function takeANumber(array, name){
  array.push(name)
  return "Welcome, " + name + ". You are number " + array.length + " in line."
}

function nowServing(array){
  if (array.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + array.shift() + "."
  }
}

function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty."
  }
  var string = "The line is currently: "
  for(let i=0; i <=array.length; i++){
    if (i === array.length - 1){
      return string +=  array.length + ". " + array[array.length - 1]
    }
    else{
    string += i+1 + ". " + array[i] +", "
    }
  }
}

/*function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty."
  }
  var string = "The line is currently: "
  var objectLine = {}
  for(let i=1; i <=array.length; i++){
    objectLine[i] = array[i-1]
  }
  return string + [objectLine]
}*/