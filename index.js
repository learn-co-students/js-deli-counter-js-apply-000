var listOfNames = ['Marina', 'Zach', 'Max']

function takeANumber(array, name){
  array.push(name);
  return (`Welcome, ${name}. You are number ${array.length} in line.`)
  
}

function nowServing(array){
  var frontName = array[0];
  
  if (array.length > 0) {
    array.shift()
    // console.log(`Currently serving ${frontName}.`)
    return (`Currently serving ${frontName}.`)
  } else {
    return (`There is nobody waiting to be served!`)
  }
}

function currentLine(array) {
  var newArray = [];
  
  for (let i = 0; i < array.length; i++){
    newArray.push(`${i+1}. ${array[i]}`)
}
  newArray = newArray.join(', ')
  if (array.length > 0){
    return (`The line is currently: ${newArray}`)
  } else {
    return (`The line is currently empty.`)
  }
}

nowServing(listOfNames)
