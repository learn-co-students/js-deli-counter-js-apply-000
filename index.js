var katzDeli = []

function takeANumber(katzDeliLine, n){  //params: line of ppl array, new person
  katzDeliLine.push(n)                  //adds new person to end of line
  return ('Welcome, '+n+'. You are number ' +(katzDeliLine.length)+' in line.')
}
function nowServing(katzDeliLine){      //line of ppl array
  if(katzDeliLine.length===0){          //if line is empty, return message
    return 'There is nobody waiting to be served!'
  }
  else{                                 //else remove first person from line and return serving message
    return ('Currently serving '+katzDeliLine.shift()+'.')
  }
}

function currentLine(katzDeliLine){     //line of ppl array
  var x = 'The line is currently:'
  if(katzDeliLine.length===0){          //if line is empty, return message
    return('The line is currently empty.')
  }
  else{                                 //else add names and line position to string x
    for (var i=0;i<katzDeliLine.length;i++){    //loop through line length
      x= x +' '+(i+1)+'. '+katzDeliLine[i]+','  //add line position+. +name+,
    }
  }
  x=x.slice(0,x.length-1)               //remove comma at end of string
  return x                              //return string x with line positions and names
}