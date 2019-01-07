var katzDeli = [];

var takeANumber = function(katzDeliLine, name){
katzDeliLine.push(name)
return "Welcome, " + name + "." + " You are number " + katzDeliLine.length + " in line."
}
var nowServing = function(katzDeliLine){
    if(katzDeliLine.length===0){
      return "There is nobody waiting to be served!"
    }
    var names = ["Steven", "Blake", "Avi"]
    katzDeliLine.shift(names)
      return "Currently serving " + names[0] + "."
  }
var currentLine = function(katzDeliLine){
  if(katzDeliLine.length===0){
    return "The line is currently empty."
  }
var array = []
for(var i = 0; i<katzDeliLine.length; i++){
  array.push(i+1 + ". " + katzDeliLine[i])
}
return "The line is currently: " + array.join(', ')
  }
