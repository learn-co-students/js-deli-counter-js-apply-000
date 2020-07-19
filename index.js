function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name) // push or add name to the katzDeliLine [] in order start from 0
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }else{
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine){
  var output = []
  if (katzDeliLine.length > 0){
    for (var i = 0; i < katzDeliLine.length; i++){
      output += ` ${i+1}. ${katzDeliLine[i]},` 
    }
    return 'The line is currently:' + output.slice(0,output.length-1) //remove the comma `,` in the end.
  }else{
    return 'The line is currently empty.'
  }
}