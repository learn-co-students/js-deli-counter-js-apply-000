// accepts 2 parameters, adds values to array and returns values in a string
function takeANumber(line,newPerson){
  line.push(newPerson);
  return ('Welcome, ' + newPerson + '. You are number '+ line.length +' in line.');
}

//accept a parameter and uses conditional statement to remove person from line
//returns string that tells customer if they are next
function nowServing(line){
  if (line.length===0){
    return ("There is nobody waiting to be served!");
  }else{
    return ("Currently serving "+ line.shift() + ".")
  }
}
//accepts a parameter, adds the content to a new array and returns the content of that array in a string 
//it will also evaluate whether the array is empty in order to return the correct string 
//it tells you your place in line
function currentLine(line){
  var newLine=[];
  let i=0
  while(i<line.length){
    newLine.push(" " + (i+1)+". "+ line[i])
    i++
  }
  if(line.length===0){
    return("The line is currently empty.")
  }else{
    return("The line is currently:" + newLine)
  }
}