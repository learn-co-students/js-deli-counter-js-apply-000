function takeANumber(currLn,nPerson){
  currLn.push(nPerson)
  return `Welcome, ${nPerson}. You are number ${currLn.length} in line.`
}

function nowServing(katzDeliLine){
  return katzDeliLine.length > 0 ?
    `Currently serving ${katzDeliLine.shift()}.` :
    "There is nobody waiting to be served!"
}

function currentLine(currLn){
  if(currLn.length === 0) return 'The line is currently empty.'
  return currLn.reduce((acc,curr,ci,arr)=>(
    `${acc} ${(ci + 1)}. ${curr + (ci + 1 !== arr.length ? ',' : '')}`
    ),
  "The line is currently:")
}