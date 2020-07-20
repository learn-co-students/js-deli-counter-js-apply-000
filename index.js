function takeANumber(Deli, name){
  Deli.push(name)
  return `Welcome, ${name}. You are number ${Deli.indexOf(name) + 1} in line.`
}

function nowServing(current){
  if(current.length > 0){
    var name = current[0]
    current.shift()
    return "Currently serving " + name + "."
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(current){
  if(current.length > 0){
    var currentName = ""
    for(var i = 0; i < current.length; i++){
      if(i !== current.length-1){
        currentName += `${i+1}. ${current[i]}, `
      }else{
        currentName += `${i+1}. ${current[i]}`
      }
    }
    return `The line is currently: ${currentName}`
  }else{
    return `The line is currently empty.`
  }
}