function takeANumber(currentLine,name){
currentLine.push(name)
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
  }
function nowServing(deliLine){
  if (deliLine.length == 0){
    return 'There is nobody waiting to be served!'
  } else {
    for (let i = 0; i < deliLine.length; i++){
      var deliLineGuy = deliLine[i];
      deliLine.shift(deliLineGuy)
         return `Currently serving ${deliLineGuy}.`

    }
  }
}
function currentLine(line){
  if (line.length == 0){
    return 'The line is currently empty.'
  } else {
    var string = `The line is currently:`
    for (let i = 0; i < line.length; i++){
      let linePeep = line[i];
       string += ` ${i+1}. ${linePeep}`
      if (i != line.length-1){
        string += ','
      }
    }
  }
  return string;
}
