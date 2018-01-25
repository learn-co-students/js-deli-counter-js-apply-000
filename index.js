var katzDeli = []

function takeANumber(deliArray, name){
  deliArray.push(name)
  var index = deliArray.indexOf(name)
  var pos = parseInt(index) + 1
  return `Welcome, ${name}. You are number ${pos} in line.`
}

function nowServing(deliArray){
  
  if(deliArray.length > 0){
    const thisDude = deliArray[0]
    deliArray.shift()
    return `Currently serving ${thisDude}.`
    }
    if(deliArray.length === 0){
    
      return `There is nobody waiting to be served!`
    
  }
}

function currentLine(deliArray){
  if (deliArray.length === 0){
    return `The line is currently empty.`
  } 
  else{
    var str = "The line is currently: " 
    for(let i = 0; i < deliArray.length; i++){
      if(i < deliArray.length - 1){
      str = str + `${i + 1}. ${deliArray[i]}, `
      } 
      
      if(i === deliArray.length - 1){
        str = str + `${i + 1}. ${deliArray[i]}`
      }
      
    }
      return str
  }
}