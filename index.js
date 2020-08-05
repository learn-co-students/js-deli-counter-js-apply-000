function takeANumber(line, newName){
  var placement = line.length + 1 
  line.push(newName)
  
  return `Welcome, ${newName}. You are number ${placement} in line.`
}

function nowServing(line){
  var next = line[0]
  line = line.shift()
  
  if (line === undefined){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${next}.`
  }
}

function currentLine(line){
  if (line.length === 0){
    return 'The line is currently empty.'
  }
  else{
    var placementName = []
    for(let i=0;i<line.length; i++){
      placementName.push(`${i+1}. ${line[i]}`)
    }
  }
  return `The line is currently: ${placementName.join(", ")}`
}