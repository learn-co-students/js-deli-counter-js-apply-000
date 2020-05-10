// 1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept two parameters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as `"Welcome, Ada. You are number 1 in line."`. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

// 2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

// 3. Build a function `currentLine` that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  You don't have to use `katzDeliLine` as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return `"The line is currently empty."`


function takeANumber(currentLine, name){
  currentLine.push(name);
  var position = currentLine.indexOf(name) + 1;
  var welcomeMsg = `Welcome, ${name}. You are number ${position} in line.`
  return welcomeMsg;
}


function nowServing(katzLine) {
  if (katzLine.length < 1) {
    return 'There is nobody waiting to be served!'
  }else {
    return 'Currently serving ' + katzLine.shift() + '.'
  }
}


function currentLine(katzLine) {
  if (katzLine.length < 1) {
    return 'The line is currently empty.'
  }
  
  var names = 'The line is currently: '
  for (var i = 0; i < katzLine.length; i++) {
    var name = katzLine[i];
    if (i < katzLine.length - 1) {
      names += `${i + 1}. ${name}, `
    }else {
      names += `${i + 1}. ${name}`
    }
  }
  return names;
}


