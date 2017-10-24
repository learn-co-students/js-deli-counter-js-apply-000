
function takeANumber(line,name){
  var lineNumber = line.length + 1
  line.push(name)
  line = ("Welcome, " + name + ". You are number " + lineNumber + " in line.")
  return line
}


function nowServing(line,name){

  if(line.length === 0){
    var line = "There is nobody waiting to be served!"
  }else{
    line = "Currently serving " + line.shift() + "."
  }
  return line
}


function currentLine(line){

  if(line.length ===0){

    return "The line is currently empty."

  }else{
    var middleItems = ""
    var lastItem = (line.length) + ". "  + line[line.length-1]

    for (var i = 0; i<line.length-1; i++){

      var lineString = (i+1) + ". " + line[i] + ", "
      // creates a string from the lineName and linePlace variables
      middleItems += lineString
      //adds the newest string from the present [i] to the existing string

    }
    return "The line is currently: " + middleItems + lastItem
  }
}
