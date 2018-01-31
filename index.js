var katzDeli = [];

function takeANumber(line, customer){
  line.push(customer)
   var position = line.indexOf(customer) + 1
   
   return "Welcome, "+customer+". You are number "+position+" in line."
}

function nowServing(line) {
  
  if (line.length != 0) {
    return "Currently serving "+line.shift()+"."
    
  } else {return "There is nobody waiting to be served!"}
  
}

function currentLine(line) {
  var lineString = "The line is currently"
  if (line.length != 0){
    lineString += ": "
    for(var i=0;i<line.length;i++){
      if (i < line.length - 1){
      lineString += (i+1)+". " + line[i] + ", "}
      if (i === line.length - 1) {
              lineString += (i+1)+". " + line[i] }

      }
    }
  
  else {
    return lineString += " empty."
    
  }
  
  return lineString
}