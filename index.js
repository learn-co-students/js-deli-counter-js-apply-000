function takeANumber(katzDeli, name){

  katzDeli.push(name)
 
 console.log(katzDeli.length)

return "Welcome, " + name + "." + " You are number " + katzDeli.length + " in line."
}



function nowServing(deliLine){
  
if(deliLine.length > 0){
    return "Currently serving " + deliLine.shift() + "."
    
 } else {
    
    return "There is nobody waiting to be served!"
  }
}

function currentLine(theLine){
  
  var peopleInLine = "The line is currently: "

if(theLine.length <= 0){
  return "The line is currently empty."
  
} else if (theLine.length > 0){
  
     for(let i = 0; i < theLine.length; i++){
       peopleInLine += `${i + 1}. ${theLine[i]}`
       if(i < 2){
         peopleInLine += `, `
       }
     }
//The line is currently: 1. Bill, 2. Jane, 3. Ann
  return peopleInLine
}

  
}