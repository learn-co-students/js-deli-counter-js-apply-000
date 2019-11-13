let katzDeliLine = [];//global array as multiple functions need information from this array
 
function takeANumber(katzDeliLine, name){//this function will add someone's name to the line list, and greet them with where they are in the line
  katzDeliLine.push(name);//adds the persons name to the global line array
return 'Welcome, '+name+'. You are number '+katzDeliLine.length+' in line.'
}

function nowServing(katzDeliLine){//this function will check if there is a line. If there is, then they will serve the first person and remove them from the line. If there is no line they will announce there is nobody to be served. 
  if(katzDeliLine.length>0){//checks line and removes the first person in line 
   let firstInLine = katzDeliLine.shift()//removes first name in line and ties it to a variable
   return 'Currently serving '+firstInLine +'.'
  } else{//returns string if katzDeliLine is 0
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine){//function to guage the current line in the deli
  let arr = [] //created a new array to push mutated strings into
  for(let i=0;i<katzDeliLine.length;i++){//this loop will go through the line array and number the people in line
    arr.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  
  if(katzDeliLine.length>0){//check to see if there is a line. If there is then return with how many/who is in the line.
    return 'The line is currently: '+ arr.join(', ')
  } else{//if there is no line then return line is empty
    return 'The line is currently empty.'
  }
}