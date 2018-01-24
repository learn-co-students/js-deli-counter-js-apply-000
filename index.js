var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"]

function takeANumber(deliArr,name){
  deliArr.push(name)
  var place = deliArr.indexOf(name) + 1

  return "Welcome, " + name + ". You are number " + place + " in line."
}




function nowServing(arr){
  if(arr.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var current = "Currently serving " + arr[0] + "."
    arr.shift()
    return current
  }
}


// "The line is currently: 1. Bill, 2. Jane, 3. Ann"


function currentLine(line){

  if(line.length === 0){
    return "The line is currently empty."
  }
  else{
    return "The line is currently: 1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2]
  }


}
