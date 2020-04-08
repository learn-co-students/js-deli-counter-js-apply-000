var katzDeliLine = [];

 function takeANumber (katzDeliLine, name){ 
 katzDeliLine.push(name)
let welcomeMessage = 'Welcome,' + " " + name  + ". You are number " + katzDeliLine.length + " in line." 
 return welcomeMessage
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return "Currently serving " + katzDeliLine.shift()+ '.'
  }
  
}

function currentLine(katzDeliLine){
  let currentLineMessage = []
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  } else{
    for(let i = 0; i< katzDeliLine.length; i++){
      currentLineMessage.push((i + 1 + ".") +" "+ katzDeliLine[i])
    } return `The line is currently: ${currentLineMessage.join(", ")}`;
   

    
  }
}