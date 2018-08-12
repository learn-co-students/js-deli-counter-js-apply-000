/**
  1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept two paramaters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as `"Welcome, Ada. You are number 1 in line."`. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
*/

function takeANumber(currentLine, name){
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
  
}


/**
  2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!
*/

function nowServing(currentLine){
  if (currentLine.length === 0)
    return "There is nobody waiting to be served!"
  else
    var rvalue = currentLine[0] //need a temporary place holder since we will be deleting the first person from the array with the shift method
    currentLine.shift();
    return `Currently serving ${rvalue}.`;
}


/**
3. Build a function `currentLine` that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  You don't have to use `katzDeliLine` as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return `"The line is currently empty."`
*/
function currentLine(line){
  var i;
  if (line.length){
    for (i=0; i < line.length; i++){
      line[i]= ` ${i+1}. ${line[i]}` //we are replacing the original element with a new element. We prepend a space and an ordered number followed by a period and space then add the original element so that the array elements are formatted in the way we want. 
    }
    return "The line is currently:" + line;
  }else{
    return "The line is currently empty."
  }
}
