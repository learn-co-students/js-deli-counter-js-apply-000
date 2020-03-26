function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName)
  return 'Welcome, ' + personName + '. You are number ' + katzDeliLine.length + ' in line.'
}

//Build a function nowServing. This function should accept the current line of people (katzDeliLine) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return 'Currently serving ' + katzDeliLine.shift() + '.'
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}
//the function first checks for the condition if katzDeliLine > 0,
//if that satisfies then it means the code below will run. Else, the else code will run.
//shift method removes the first element of an array and returns the element.

//Build a function `currentLine` that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  You don't have to use `katzDeliLine` as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return `"The line is currently empty."`

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var placeHolder = ''
    for(var i = 0; i < katzDeliLine.length; i++) {
      placeHolder += (i + 1) + '. ' + katzDeliLine[i] + ', '
    }
    placeHolder = placeHolder.slice(0, -2)   //-2 will cut out the ',' after Ann to satisfy test.
    return 'The line is currently: ' + placeHolder
  }
  else {
    return 'The line is currently empty.'
  }
}

//if I logged placeHolder after line 26, it will show number + . + katzDeliLine[i](indicating personName).
//array slice method takes two args, one start and one end but could be optional. 
