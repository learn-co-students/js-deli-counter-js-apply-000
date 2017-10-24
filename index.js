// A pretty important deli needs somebody to program the "Take a Number" feature for their counter.
//
// At the beginning of the day, the deli is empty and is represented by an empty array, e.g.,
//
// `var katzDeli = [];`
//
// 1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept the current line of
//  people, `katzDeliLine`, along with the new person's name as parameters. The function should return their position in line. And don't go
//   being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their
//   hopes up by telling them they are number 6 in line.
//
// 2. Build a function `nowServing`. This function should return the first person in line and then remove that individual from the line.
// If there is nobody in line, it should return "There is nobody waiting to be served!"
//
// 3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`,
// `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should return
//  `"The line is currently empty."`


function takeANumber(line,name){
  var lineNumber = line.length + 1
  line.push(name)
  line = ("Welcome, " + name + ". You are number " + lineNumber + " in line.")
  return line
}
function nowServing(line,name){
  name = line[0]
  if(line.length === 0){
    var line = "There is nobody waiting to be served!"
  }else{
    line = "Currently serving " + line.shift() + "."
  }
  return line
}
function currentLine(line){

  var lastItem = (line.length) + ". "  + line[line.length-1]

  if(line.length ===0){
    var finalString = "The line is currently empty."
    return finalString

  }else{
    var middleItems = ""
    for (var i = 0; i<line.length-1; i++){

      var lineString = (i+1) + ". " + line[i] + ", "
      // creates a string from the lineName and linePlace variables
      middleItems += lineString
      //adds the newest string from the present [i] to the existing string

    }
    return "The line is currently: " + middleItems + lastItem
  }
}
