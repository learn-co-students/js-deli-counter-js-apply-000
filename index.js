var katzDeli = [];
function takeANumber(katzDeli, customer){
    katzDeli.push(customer)
    return `Welcome, ${customer}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeliLine){                                              //Returns first person in line, then removes
  if (katzDeliLine.length === 0) {                                              //them from array. If no one in line, returns
return "There is nobody waiting to be served!"                                  //"There is nobody waiting to be served!"
}
  else {
  var name = katzDeliLine[0]
  katzDeliLine.shift()
}
for (var i = 0; i < katzDeliLine.length + 1; i++)
return`Currently serving ${name}.`
}

function currentLine(katzDeliLine){
  var nameList = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
    nameList.push(` ${i+1}. ${katzDeliLine[i]}`)
  }
}
return "The line is currently:" + nameList
}
