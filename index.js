function takeANumber(katzDeli, newCustomer){
  if (katzDeli.length > 0);
  katzDeli.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " + katzDeli.length + " in line."
}


function nowServing (katzDeliLine) {
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }
    let newL = katzDeliLine.shift()
    return 'Currently serving ' + newL + '.'
}


function currentLine (line){
  if (line.length === 0){
    return 'The line is currently empty.'
  }
  let newArr = []
  for(let i = 0; i< line.length; i++){
      newArr.push(i + 1 + '. ' + line[i])
  }
    return "The line is currently: " + newArr.join(", ");
}