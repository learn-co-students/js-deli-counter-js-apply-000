var katzDeliLine = []

function takeANumber(katzDeliLine, newPerson){
  // add new person
  katzDeliLine.push(newPerson)
  /* announce name and position by using array length, since the person will
  always be at the end of the line (otherwise I would use indexOf(newPerson))
  */
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length){
    /*  I had to look this up... I didn't realize shift() would return/display
    and then remove. Originally I was retuning the customer at index 0 and then
    using shift().
    */
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else{
    return 'There is nobody waiting to be served!'
  }

}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    // I created this array to store each number and name
    var stringHolder = []
    // push each number and customer to the temporary stringHolder array
    // starting with the first...
    stringHolder.push(`1. ${katzDeliLine[0]}`)
    for(var i = 1; i < katzDeliLine.length; i++){
      //...and then each consecutive one with a preceding space
      stringHolder.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    // return the string
    return `The line is currently: ${stringHolder}`
  }
  else{
    return 'The line is currently empty.'
  }
}
