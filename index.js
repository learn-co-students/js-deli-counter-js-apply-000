var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var number = katzDeliLine.indexOf(name) + 1
  return "Welcome, " + name + ". You are number " + number + " in line."
}

function nowServing(katzDeliLine) {
  // katzDeliLine.push(name)
  // var number = katzDeliLine.indexOf(name) -1
  if(katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var result = "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift();
    return result
  }
}
/**
Case 1: the line is empty
  1) Say nobody is waiting to be served
Case 2: there are people in line
  1) Say currently serving the person in the front
  2) use shift() to remove the front person
*/


function currentLine(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return "The line is currently empty."
  } else {
    var results = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++) {
      results += (i+1) + ". " + katzDeliLine[i]
      if(i != katzDeliLine.length - 1) {
        results += ", "
      }
    }
    return results
  }
}
