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




function currentLine(line){

  if(line.length === 0){
    return "The line is currently empty."
  }
  else{

    var temp = []

    for(var i=0; i<line.length; i++){
      temp.push(' ' + (i+1).toString() + '. ' + line[i])
    }
    temp.join(',')
    return "The line is currently:" + temp
  }
}
