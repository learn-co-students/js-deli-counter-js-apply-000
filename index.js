function takeANumber(line, name){
  line.push(name)
  var welcome
  welcome = "Welcome, " + name + ". You are number "+(line.length)+" in line."
  return welcome
}
var katzDeliline = []
takeANumber(katzDeliline, Ada)

katzDeliline=["Steven", "Blake", "Avi"]
takeANumber(katzDeliline, Grace)

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return "Currently serving "+line.shift()+"."
  }
}
nowServing(katzDeliline);

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  else{
    var linename = []
    var i=0
    for(i=0; i<line.length; i++){
      linename.push(" "+(i+1)+". "+line[i])
    }
    return "The line is currently:"+linename
  }
}

line = ["Bill", "Jane", "Ann"]
currentline(line)