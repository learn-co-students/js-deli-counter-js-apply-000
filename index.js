var katzDeli = [];

function takeANumber(katzDeli,name){
  katzDeli.push(name)
  return 'Welcome, ' + name + '. You are number ' + (katzDeli.length) + ' in line.'
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    let serving = katzDeliLine.shift()
    return 'Currently serving ' + serving + '.'
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line){
  if (line.length === 0){
    return 'The line is currently empty.'
  } else {
    let theLine = []
    for (let i = 0; i < line.length; i++){
      theLine.push(' ' + (i+1) + '. ' + line[i])
    }
return 'The line is currently:' + theLine
  }
}
