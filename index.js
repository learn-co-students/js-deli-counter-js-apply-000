let katzDeliLine = []

function takeANumber(array, newCustomer){
  array.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${array.indexOf(newCustomer)+1} in line.`
}

function nowServing(array){
  if (array.length === 0){
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${array.shift()}.`
  }
}

function currentLine(array){
  if (array.length === 0){
    return 'The line is currently empty.'
  } else {
    let line = []
    for(let a = 0; a < array.length; a++){
      line.push(` ${a+1}. ${array[a]}`)
    }
    return `The line is currently:${line}`
  }
}