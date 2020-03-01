function takeANumber(katzDeli, current){
  var place = katzDeli.length + 1
  katzDeli.push(current)
  return `Welcome, ${current}. You are number ${place} in line.`
  
}

function nowServing(katzDeli){
  var current
  if (katzDeli === undefined || katzDeli.length === 0) 
    return "There is nobody waiting to be served!"
  else{
    current = katzDeli[0]
    katzDeli.shift()
    return `Currently serving ${current}.`
    
  }
}
  
  function currentLine(katzDeli){
  var current

  var counter = 0
  var empty = "The line is currently empty."
  var place = katzDeli.length
  var sentence = `The line is currently:`
   
  if (katzDeli === undefined || katzDeli.length === 0) 
    return empty
    
  else{
     
      do{
      
      current = katzDeli[0]
      katzDeli.shift()
      if (counter ===0 )  sentence = sentence + ` ${counter+1}. ${current}`
      else sentence = sentence + `, ${counter+1}. ${current}`
      counter++
       }
      while(counter < place)
      return sentence
    }

  }
  


  