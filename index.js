function takeANumber(katzDeliline, name){
  katzDeliline.push(name)
  return `Welcome, ${name}. You are number ${katzDeliline.length} in line.`
}

function nowServing(katzDeliline){
  if (katzDeliline.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliline.shift()}.`
  }
}

function currentLine(katzDeliline){
  if (katzDeliline.length === 0){
    return "The line is currently empty."
  }
  else {
    var str = "The line is currently: "
    var i = 0
    while (i <  (katzDeliline.length - 1)){
      
      str = str + `${i+1}. ${katzDeliline[i]}, `
      
      i++
      
    }
    
    str = str + `${i+1}. ${katzDeliline[i]}`
    
    return str
  }
}