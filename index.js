var katzDeliLine = [];


function takeANumber(arr,name){
 arr.push(name)
 return "welcome, "+name+". you are number "+`${arr.length}`+" in line"
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!" ;
  }else{
    return "Currently serving "+`${katzDeliLine.shift()}`+"."
    
  }
}

function currentLine(line){
 let x = "The line is currently: ";
  if (line.length === 0){
    return "The line is currently empty."; 
  }else{
   return "The line is currently:"+ line.map( (elem,index) => " "+(index+1).toString()+ ". " + elem )
  }
}