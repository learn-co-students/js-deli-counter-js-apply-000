var katzDeliLine = [];

function takeANumber(katzDeliLine, name) { 
  katzDeliLine.push(name)
  return  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return`Currently serving ${katzDeliLine.shift()}.`}
  else {
  return "There is nobody waiting to be served!"}
}

function currentLine(kazDeliLine) {
  var x = []
  if (kazDeliLine.length > 0)
  for (let z = 0; z < kazDeliLine.length ; z++){
  x.push(`${z+1}. ${kazDeliLine[z]}`)
  }
  else { 
    return 'The line is currently empty.'
  }
  return ('The line is currently: '  +  x.join(", ") )
}